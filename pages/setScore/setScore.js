const app = getApp();

Page({

  data: {
    selectIdx: 5
  },

  onLoad: function (options) {

  },

  onShow: function () {

  },

  iconChange(e) {
    const {idx} = e.currentTarget.dataset;
    this.setData({
      selectIdx: idx
    })
  },

  onShareAppMessage: function () {

  }
})