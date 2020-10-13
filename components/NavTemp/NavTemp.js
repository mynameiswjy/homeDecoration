let app = getApp()
var util = require('../../utils/util.js')

Component({
  properties: {
    subjectTitle: {
      type: String,
      value: '万题库'
    },
    memberInfo: {
      type: Object,
      value: null
    },
    IsSearch: {
      type: Boolean,
      value: false
    }
  },
  options: {
    // addGlobalClass: true,
  },
  data: {
    headHeight: 0,
    avatar: ''
  },

  attached() {
    this.getSystemInfo()
  },

  pageLifetimes: {
    show(){
      this.setData({
        avatar: app.globalData.userData.Avatar,
        memberLatinos: app.globalData.memberLatinos
      })
      if (!app.globalData.userData.Avatar) {
        app.checkContextWithShareOptions({}, () => {
          this.setData({
            avatar: app.globalData.userData.Avatar
          })
        })
      }
    }
  },

  methods: {
    getUserAvatar() {
      this.triggerEvent('getUserAvatar')
    },
    reqUserAvatar(e) {
      console.log(e);
    },

    clickMain() {
      wx.navigateTo({
        url: `/pages/mine/mine`,
        success() {
          wx.setStorage({
            key: 'IsOpenTopRemind',
            data: true
          })
        }
      })
      /*this.triggerEvent('navHeight', {
        navHeight
      })*/
    },

    searchBtn() {
      wx.navigateTo({
        url: `/packageNewsFlash/pages/newsFlashSearch/newsFlashSearch`
      })
    },

    getSystemInfo() {
      const ios = this.data.ios;
      let systemInfo = wx.getSystemInfoSync();
      let rect;
      try {
        rect = wx.getMenuButtonBoundingClientRect ? wx.getMenuButtonBoundingClientRect() : null; //胶囊按钮位置信息
        if (rect === null) {
          throw 'getMenuButtonBoundingClientRect error';
        }
        //取值为0的情况  有可能width不为0 top为0的情况
        if (!rect.width || !rect.top || !rect.left || !rect.height) {
          throw 'getMenuButtonBoundingClientRect error';
        }
      } catch (error) {
        let gap = ''; //胶囊按钮上下间距 使导航内容居中
        let width = 96; //胶囊的宽度
        if (systemInfo.platform === 'android') {
          gap = 8;
          width = 96;
        } else if (systemInfo.platform === 'devtools') {
          if (ios) {
            gap = 5.5; //开发工具中ios手机
          } else {
            gap = 7.5; //开发工具中android和其他手机
          }
        } else {
          gap = 4;
          width = 88;
        }
        if (!systemInfo.statusBarHeight) {
          //开启wifi的情况下修复statusBarHeight值获取不到
          systemInfo.statusBarHeight = systemInfo.screenHeight - systemInfo.windowHeight - 20;
        }
        rect = {
          //获取不到胶囊信息就自定义重置一个
          bottom: systemInfo.statusBarHeight + gap + 32,
          height: 32,
          left: systemInfo.windowWidth - width - 10,
          right: systemInfo.windowWidth - 10,
          top: systemInfo.statusBarHeight + gap,
          width: width
        };
      }
      if (!systemInfo.statusBarHeight) {
        systemInfo.statusBarHeight = systemInfo.screenHeight - systemInfo.windowHeight - 20;
      }
      let navBarHeight = (function() { //导航栏高度 没有状态栏高度
        let gap = rect.top - systemInfo.statusBarHeight; //动态计算每台手机状态栏到胶囊按钮间距
        return 2 * gap + rect.height;
      })();
      const navBarExtendHeight = ios ? 4 : 0;// ios 状态栏总是少那么一点点 所以手动加点^_^
      let navHeight = navBarHeight + systemInfo.statusBarHeight + navBarExtendHeight;
      this.triggerEvent('navHeight', {
        navHeight
      })
      this.setData({
        headHeight: navHeight,
        menuBottom: rect.top - systemInfo.statusBarHeight + navBarExtendHeight
      })
    }
  }
})