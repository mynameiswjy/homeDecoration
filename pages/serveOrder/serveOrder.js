// pages/serveOrder/serveOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navIdx: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onShow: function () {

  },

  navBtn(e) {
    const {idx} = e.currentTarget.dataset;
    this.setData({
      navIdx: idx
    })
  },

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