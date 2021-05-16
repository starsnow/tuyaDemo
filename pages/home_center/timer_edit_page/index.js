// pages/home_center/timer_edit_page/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    device_name: "",
    alias_name:"",
    timer_list: [],
    timer_category: "seesea_timer",
    time_zone_id: "Asia/Shanghai",
    time_zone: "+8:00",
    switch_action_on: true,
    time: "00:00",
    is_loop: true,
    loops: "1001000",
    date: "20202020",
    week_name: "日一二三四五六".split(""),
  },

  toggleLoopMode: function (e)
  {
      let is_loop = e.detail.value;
      this.setData({is_loop});
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // const { device_icon, device_name, device_id } = options;
    const { device_icon, device_name, device_id } = {device_id: "327508562cf43233d493", device_name: "aaa", device_icon: "smart/icon/1547483729ogjp5rjrqb_0.png"};
    this.setData({ device_icon: `https://images.tuyacn.com/${device_icon}`, device_name, device_id });
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