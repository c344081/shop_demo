// pages/details/details.js
var data = require("data.js"),
    serviceCart = require('../../service/cart/cart.js');

Page({

  /**
   * 页面的初始数据
   */
  data: data,
  bannerChange: function(e) {
    var banner = this.data.banner
    for (i = 0;d = banner[i];++i) {
        d.selected = e.detail.current == i
    }
    this.setData(this.data)
  },
  addCart: function(e) {
    var dataset = e.currentTarget.dataset,
        self = this;
    serviceCart.add(dataset.storeId, dataset.skuId, 1, function(res) {
        self.setData({
            cartNum: res.data.num
        })
    })
  },

  onLoad: function() {
      var self = this
      this.setData(data)
      serviceCart.get(function(response) {
        self.setData({
            cartNum: response.data.num
        })
      })
  }
})