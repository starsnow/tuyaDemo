// pages/home_center/timer_edit_page/index.js
import request from '../../../utils/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    device_name: "",
    alias_name:"",
    timer_list: [],
    timer_category: "timer",
    time_zone_id: "Asia/Shanghai",
    time_zone: "+8:00",
    switch_action_on: true,
    time: "00:00",
    is_loop: true,
    loops: "0000000",
    loops_ar : [],
    date: "2021-12-20",
    week_name: "日一二三四五六".split(""),
    is_countdown: false,
    countdown : "00:00",
    categorys : [ "timer", "countdown" ],
    today: new Date()
  },

  addTimer: async function()
  {
    this.data.timer_category = "timer";
    if (this.data.is_countdown)
    {
      let ar = this.data.countdown.split(":");
      let timer_time = new Date(new Date().getTime() + (ar[0] * 60 + ar[1]) * 1000);
      this.data.date = timer_time.Format("yyyyMMdd");
      this.data.time = timer_time.Format("hh:mm");
      this.data.loops = "0000000";
      // 懒得做区分了，最后都显示为定时器
      // this.data.timer_category = "countdown";
    }
    
    let param = {
      name: "ty-service",
      data:
      {
        "action": "timer.add",
        "params": {
          "device_id":this.data.device_id,
          "loops":this.data.loops,
          "alias_name": this.data.alias_name,
          "category":this.data.timer_category,
          "timezone_id":this.data.time_zone_id,
          "time_zone":this.data.time_zone,
          "status": 1,
          "instruct":[
              {
                "functions":[
                  {
                    "code":"switch",
                    "value":true
                  }
                ],
                "date":this.data.date.replaceAll("-", ""),
                "time":this.data.time
              }
          ]
        }
      }
    };

    console.log(param);
    if (this.data.loops != "0000000")
    {
      delete(param.data.params.instruct[0].date);
    }

    console.log(param);
    console.log(await request(param));
    wx.navigateBack({
      delta: 1,
    });
  },

  onInputBlur: function (e)
  {
     let alias_name = e.detail.value;
     this.setData({alias_name});
     console.log({alias_name});
  },

  onSwitchChange: function(e)
  {
    console.log(e);
    this.setData({ [e.currentTarget.dataset.bind_var_name] : e.detail.value });
    console.log(this.data)
  },

  onWeekdayChange: function(e)
  {
    this.data.loops_ar[e.currentTarget.dataset.weekday] = e.detail.value ? "1" : "0";
    let loops = this.data.loops_ar.join("");
    console.log(this.data.loops_ar);
    this.setData({loops});
  },

  bindPickerChange: async function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({[e.currentTarget.dataset.bind_var_name] : e.detail.value});
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // const { device_icon, device_name, device_id } = options;
    const { device_icon, device_name, device_id } = {device_id: "327508562cf43233d493", device_name: "aaa", device_icon: "smart/icon/1547483729ogjp5rjrqb_0.png"};
    let loops_ar = this.data.loops.split("");
    let today = new Date();
    let date = today.Format("yyyy-MM-dd");
    let time = "00:00";

    this.setData({ device_icon: `https://images.tuyacn.com/${device_icon}`, device_name, device_id, loops_ar, today, date, time });
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