const config = require("../config");

const host = config.iSDevelop ? config.DEV_BASE_URL : config.BASE_URL;

export function requestAjaxGet(url, data, success, err) {
  wx.request({
    url: host + url,
    data: data,
    method: "GET",
    header: {
      'content-type': 'onapplication/js' // 默认值
    },
    success(res) {
      success(res)
    },
    fail(err) {
      err(err)
    }
  })
}

export function requestAjaxPost(url, data={}, success, err) {
  wx.request({
    url: host + url,
    data: data,
    method: "POST",
    header: {
      'content-type': 'application/x-www-form-urlencoded' // 默认值
    },
    success(res) {
      success(res)
    },
    fail(err) {
      err(err)
    }
  })
}