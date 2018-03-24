// pages/cashier/cashier.js
var res = require('./data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {},

  onShow: function() {
    // 每次进入都要请求一次
    this.setData(res);
  },

  changePayment: function(e) {
    var paymentIndex = e.currentTarget.dataset.paymentIndex,
        payment = this.data.payment,
        i, p;
    for (i = 0; p = payment[i]; ++i) {
        p.selected = paymentIndex == i ? true : false;
    }
    this.setData({
        'payment': payment
    });
  },

  pay: function(e) {
      wx.navigateBack({
          delta: 1
      })
  }
})