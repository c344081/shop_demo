// views/modules/modules.js
var serviceCart = require('../../service/cart/cart.js'),
    handle;

handle = {
    events: {
        modulesSliderChange: function(e) {
            var currentTarget = e.currentTarget,
                index = currentTarget.dataset.moduleindex,
                slider = this.data.currentData.modules[index],
                i, item,
                key;
            for (i = 0; item = slider.data[i]; ++i) {
                item.selected = i == e.detail.current ? true : false;
            }
            this.setData(this.data)
        },
        modulesAddCart: function(e) {
            var dataset = e.currentTarget.dataset,
                self = this;
            serviceCart.add(dataset.skuId, dataset.storeId, 1, function(data) {
                self.setData({
                    'cart.num': self.data.cart.num + 1
                })
            })
        }
    }
}

module.exports = handle;