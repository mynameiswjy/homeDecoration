
const app = getApp();

Page({
  data: {
    menuList: [{
        img: '',
        name: 'VR实景'
      },{
        img: '',
        name: '空间规划'
      },{
        img: '',
        name: '精准方案'
      },{
        img: '',
        name: '私人订制'
      },{
        img: '',
        name: '预算报价'
      },{
        img: '',
        name: '监理质检'
      }],
    currentIdx: 0
  },

  onLoad: function (options) {

  },


  onShow: function () {

  },

  swiperChange(e) {
    const index = e.detail.current;
    this.setData({
      currentIdx: index
    })
  },

  onShareAppMessage: function () {

  }
})