// pages/index/index.js
var home = require('../../views/home/home.js'),
    sort = require('../../views/sort/sort.js'),
    cart = require('../../views/cart/cart.js'),
    mine = require('../../views/mine/mine.js'),
    viewHandles,
    _fn;

viewHandles = {
    home: home,
    sort: sort,
    cart: cart,
    mine: mine
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [{
        text: "首页",
        className: 'home',
        view: 'home'
    }, {
        text: "分类",
        className: 'sort',
        view: 'sort'
    }, {
        text: "购物车",
        className: 'cart',
        view: 'cart'
    }, {
        text: "我的",
        className: 'mine',
        view: 'mine'
    }],
    currentView: 'home',
    currentData: null
  },

  changeTab: function(e) {
    var currentTarget = e.currentTarget,
        view = currentTarget.dataset.view
    if (!view) {
        return
    }
    this.setData({
        currentView: view
    })
    _fn.selectView.call(this, view)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    _fn.selectView.call(this, 'home')
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

_fn = {
    selectView: function(key) {
        let viewHandle = viewHandles[key]
        if (!viewHandle) {
            return;
        }
        viewHandle.render(this)
    }
}