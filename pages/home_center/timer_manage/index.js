// pages/home_center/timer_manage/index.js
import request from '../../../utils/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    device_name: "",
    timer_list: [],
    timer_category: "seesea_timer",
    time_zone_id: "Asia/Shanghai",
    time_zone: "+8:00"
  },

  getTimerList: async function ()
  {
    const param = {
      name: "ty-service",
      data:
      {
        "action": "timer.listByCategory",
        "params": {
          "device_id": this.data.device_id,
          "category": this.data.timer_category
        }
      }
    };

    let timer_list = await request(param);
    console.log(timer_list);
    this.setData({timer_list});
  },

  addTimer: async function(loops, )
  {
    const param = {
      name: "ty-service",
      data:
      {
        "action": "timer.add",
        "params": {
          "device_id":this.data.device_id,
          "loops":"0000000",
          "category":this.data.timer_category,
          "timezone_id":this.data.time_zone_id,
          "time_zone":this.data.time_zone,
          "status": 0,
          "instruct":[
              {
                  "functions":[
                      {
                          "code":"switch",
                          "value":true
                      }
                  ],
                  "date":"20220320",
                  "time":"17:41"
              }
          ]
        }
      }
    };
console.log(param);
    console.log(await request(param));
  },

  nullFunction : function (e) {},
  
  editTimer : function (e)
  {
    wx.showToast({ title: "xxx" });
    console.log(e);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    options;
    // const { device_icon, device_name, device_id } = options;
    const { device_icon, device_name, device_id } = {device_id: "327508562cf43233d493", device_name: "aaa", device_icon: "smart/icon/1547483729ogjp5rjrqb_0.png"};
    console.log(options);
    this.setData({ device_icon: `https://images.tuyacn.com/${device_icon}`, device_name, device_id });

    this.getTimerList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})