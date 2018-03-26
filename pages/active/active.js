// pages/active/active.js
var data = require("data.js"),
    serviceCart = require('../../service/cart/cart.js');

Page({

  /**
   * 页面的初始数据
   */
  data: data.data,
  modulesAddCart: function(e) {
      var dataset = e.currentTarget.dataset,
          self = this;

      serviceCart.add(dataset.skuId, dataset.storeId, 1, function (data) {
          // 模拟添加
          wx.showToast({
              title: '添加成功',
              icon: 'success',
              duration: 1000
          });
      });
  }
})