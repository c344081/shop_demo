// pages/checkout/checkout.js
var res = require('./data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {},

  onShow: function() {
    this.data = res;
    this.setData(this.data)
  },

  changeShipment: function(e) {
    var list = [],
        self = this,
        type = this.data.shipment.type,
        i, t;
    for (i = 0; t = type[i]; ++i) {
        list.push(t.text)
    }
    wx.showActionSheet({
        itemList: list,
        success: function(res) {
            if (res.cancel) {
                return;
            }
            for (i = 0; t = type[i]; ++i) {
                t.selected = res.tapIndex == i ? true : false;
            }
            self.setData({
                'shipment.type': type
            })
        }
    })
  },
  changeTime: function(e) {
      var list = [],
          self = this,
          time = this.data.shipment.time,
          i, t;
      for (i = 0; t = time[i]; ++i) {
          list.push(t.text)
      }
      wx.showActionSheet({
          itemList: list,
          success: function(res) {
              if (res.cancel) {
                  return;
              }
              for (i = 0; t = time[i]; ++i) {
                  t.selected = res.tapIndex == i ? true : false
              }
              self.setData({
                  'shipment.time': time
              })
          }
      })
  },
  submit: function(e) {
    // 请求后台获取订单号
    var orderId = '123'
    this.orderId = orderId;
    wx.navigateTo({
        url: '../cashier/cashier?orderId=' + orderId,
    })
  },
  saveRemarks: function(e) {
      console.log(e)
      var value = e.detail.value;
      this.setData({
          'remarks.text': value.trim()
      });
  }
})