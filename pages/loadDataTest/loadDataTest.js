const app = getApp();
const listUrl = app.globalData.domain + "/testWechat/list";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageNum: 1,       // 设置页码，默认是1  
    isFirstLoad: true,   // 用于判断List数组是不是空数组，默认true，空的数组  
    hasMore: false,    // “加载更多” 
    resData: {},     // 业务数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadData()
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
    // 显示导航栏loading  
    wx.showNavigationBarLoading();
    // 调用接口加载数据  
    this.loadData();
    // 隐藏导航栏loading  
    wx.hideNavigationBarLoading();
    // 当处理完数据刷新后，wx.stopPullDownRefresh可以停止当前页面的下拉刷新  
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let that = this;
    if (that.data.hasMore) {
      that.setData({
        pageNum: that.data.pageNum + 1,  // 每次触发上拉事件，把pageNum+1  
        isFirstLoad: false                // 触发到上拉事件，把isFirstLoad设为为false  
      });

      that.loadData();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  updateData(data) {
    this.setData({
      resData: data
    });
  },

  loadData: function () {
    let that = this;
    wx.request({
      url: listUrl,
      data: { userId: 4, pageNo: that.data.pageNum },
      header: { 'Content-type': 'application/x-www-form-urlencoded' },
      dataType: 'json',
      method: 'POST',
      success: function (res) {
        console.log(res.data.jsonData);
        if(res.data.jsonData.totalPage > 1){
          that.setData({
            hasMore:true
          });
        }
        that.updateData(res.data.jsonData);
      }

    })
  }

})

