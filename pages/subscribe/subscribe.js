const app = getApp();

Page({

  data: {
    flowPath: [
      {img: 'https://www.mengniuhealth.cn/fitment/icon/subscribe_1.png', name: '在线预约'},
      {img: 'https://www.mengniuhealth.cn/fitment/icon/subscribe_2.png', name: '上门测量'},
      {img: 'https://www.mengniuhealth.cn/fitment/icon/subscribe_3.png', name: '签约付款'},
      {img: 'https://www.mengniuhealth.cn/fitment/icon/subscribe_4.png', name: '施工验收'}
    ],
    exhibitionList: [
      {img: 'https://www.mengniuhealth.cn/fitment/icon/kitchen_icon.png', name: '厨卫翻新', width: 146},
      {img: 'https://www.mengniuhealth.cn/fitment/icon/wall_icon.png', name: '墙面翻新', width: 146},
      {img: 'https://www.mengniuhealth.cn/fitment/icon/bedroom_icon.png', name: '卧室翻新', width: 99},
      {img: 'https://www.mengniuhealth.cn/fitment/icon/balcony_icon.png', name: '阳台翻新', width: 134},
      {img: 'https://www.mengniuhealth.cn/fitment/icon/video_icon.png', name: '电视背景墙', width: 132, isBorBottom: true},
      {img: 'https://www.mengniuhealth.cn/fitment/icon/more_icon.png', name: '更多局部改装', width: 81, isBorBottom: true}
    ],
    isOpenHb: false
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

  closeHb() {
    this.setData({
      isOpenHb: false
    })
  },

  stop() {
    return
  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})