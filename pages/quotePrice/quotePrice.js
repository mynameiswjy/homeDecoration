const config = require('../../app.config');
const app = getApp();

Page({
  data: {
    navHeight: 64,
    baseUrl: config.baseUrl,
    dataSource: [{
      img: config.baseUrl + '/fitment/quotePrice/source_one.png',
      value: '十年装修行业数据积累'
    },{
      img: config.baseUrl + '/fitment/quotePrice/source_two.png',
      value: '累计服务用户100万+'
    },{
      img: config.baseUrl + '/fitment/quotePrice/source_three.png',
      value: '大数据分析，智能算法'
    },{
      img: config.baseUrl + '/fitment/quotePrice/source_four.png',
      value: '最快10秒估算装修报价'
    }]
  },

  onLoad: function (options) {

  },

  onShow: function () {

  },

  navHeight(e) {
    this.setData({
      navHeight: e.detail.navHeight
    })
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