//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    resData: {},
    res:{
      pageNo:1,
      pageSize:10,
      records:[1,2,3]
    }
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  changeMotto: function () {
    let _records = this.data.resData.records;
    if(undefined == _records){
      _records = [];
    }
    let _res = this.data.res;
    this.setData({
      resData:_records.concat(_res),
      motto: _res.records + "哈哈，我变了",

    })
  },
  jumpNewPage: function () {
    wx.navigateTo({
      url: '../learn/learn?content=测试param传递',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
    // wx.redirectTo({
    //   url: '../learn/learn',
    // })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    // console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
