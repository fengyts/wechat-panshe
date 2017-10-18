

var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    templateData: {
      name: "template name test 测试",
      msg: "this is a template 测试"
    },
    item: {
      index: 0,
      msg1: 'this is a template',
      time: '2017-09-18'
    },
    time: util.formatTime(new Date())
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var _itemT = this.data.item;
    // _itemT.time = util.formatTime(new Date());
    this.setData({
      content: options.content,
      // item:_itemT
      ['item.time']:'test modify'
    });
    // console.log(options.content);
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