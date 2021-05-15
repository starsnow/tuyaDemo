// miniprogram/pages/home_center/device_manage/index.js.js

const { default: wxMqtt } = require("../../../utils/mqtt/wxMqtt");


Page({

  /**
   * 页面的初始数据
   */
  data: {
    dialogShow: false,
    device_id : ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { device_icon, device_name, device_id } = options
    this.data.device_id = device_id;
    this.setData({ device_icon: `https://images.tuyacn.com/${device_icon}`, device_name, device_id })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  showDeviceInfo: function() {
    this.setData({ dialogShow: true })
  },

  changeName: function(e) {
    console.log(e.detail.value);
    const params = {
      name: "ty-service",
      data: {
        "action": "device.name",
        "params": {
          "device_id": this.data.device_id,
          "name": e.detail.value
        }
      }
    };
    wx.cloud.callFunction(params).then(res =>{
      console.log('res', res);
      
    }).catch(err => console.log('err', err))
  },
})