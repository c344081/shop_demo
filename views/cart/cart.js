// views/cart/cart.js
var res = require('./data.js'),
    utils = require('../../common/utils/utils.js'),
    handle,
    events,
    _fn;

handle = {
    render: function (callerPage) {
        console.log('render cart')
        _fn.init(callerPage)
        callerPage.setData({
            currentView: 'cart',
            currentData: res.data
        })
    }
}

events = {
    cartClickProxy: function(e) {
        var target = e.target;
        if (target.dataset &&
         target.dataset.eventType &&
         _fn[target.dataset.eventType]) {
            _fn[target.dataset.eventType].call(this, e)
        }
    }
}

_fn = {
    init: function (callerPage) {
        if (callerPage.initedCart) {
            return;
        }
        // mix events
        callerPage.initedCart = true
        utils.mix(callerPage, events)
    },

    minus: function(e) {
        var index = e.currentTarget.dataset.shopIndex,
            shop = this.data.currentData.shops[index],
            pIndex = e.target.dataset.pIndex,
            self = this,
            num;
        num = shop.items[pIndex].num * 1 - 1;
        if (num < 1) {
            wx.showModal({
                title: '提示',
                content: '确定删除?',
                success: function(res) {
                    if (!res.confirm) {
                        return;
                    }
                    // 删除当前商品
                    shop.items.splice(pIndex, 1)
                    if (shop.items.length <= 0) { // 清空
                        self.data.currentData.shop.splice(index, 1)
                    }
                    self.setData(self.data)
                }
            })
            return;
        }
        shop.items[pIndex].num = num
        this.setData(this.data)
    },

    plus: function(e) {
        var index = e.currentTarget.dataset.shopIndex,
            shop = this.data.currentData.shops[index],
            pIndex = e.target.dataset.pIndex,
            num;
        num = shop.items[pIndex].num * 1 + 1;
        if (num > 99) { //最多99件
            wx.showModal({
                title: '提示',
                content: '最多购买99件',
                showCancel: false
            })
            return;
        }
        shop.items[pIndex].num = num;
        this.setData(this.data)
    },

    buy: function(e) {
        var index = e.currentTarget.dataset.shopIndex,
            shop = this.data.currentData.shops[index],
            id = shop.id;

        wx.navigateTo({
            url: '../checkout/checkout?orderId=xxx'
        });
    },
    select: function(e) {
        var index = e.currentTarget.dataset.shopIndex,
            shop = this.data.currentData.shops[index],
            pIndex = e.target.dataset.pIndex,
            item = shop.items[pIndex],
            selectedAll = true,
            i, p;
            item.selected = !item.selected;
            for (i = 0; p = shop.items[i]; ++i) {
                if (p.selected == false) {
                    selectedAll = false;
                    break; 
                }
            }
            shop.selected = selectedAll;
            this.setData(this.data)
    },
    selectAll: function(e) {
        var index = e.currentTarget.dataset.shopIndex,
            shop = this.data.currentData.shops[index],
            pIndex = e.target.dataset.pIndex,
            i, p;
        shop.selected = !shop.selected;
        for (i = 0; p = shop.items[i]; ++i) {
            p.selected = shop.selected;
        }
        this.setData(this.data)
    }
}

module.exports = handle;
