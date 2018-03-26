// pages/status/status.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  back: function(e) {
    wx.navigateBack({
        delta: 1
    })
  },
  goOrderList: function(e) {
    wx.showModal({
        title: '提示',
        content: '订单',
        showCancel: false
    })
  }
})