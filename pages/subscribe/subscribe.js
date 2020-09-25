const app = getApp();

Page({

  data: {
    flowPath: [
      {img: '', name: '在线预约'},
      {img: '', name: '上门测量'},
      {img: '', name: '签约付款'},
      {img: '', name: '施工验收'}
    ]
  },

  onLoad: function (options) {
    wx.getLocation({
      type: 'wgs84',
      success (res) {
        console.log(res);
      }
    })
  },

  onShow: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})