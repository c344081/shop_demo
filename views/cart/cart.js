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

}

_fn = {
    init: function (callerPage) {
        if (callerPage.initedCart) {
            return;
        }
        // mix events
        callerPage.initedCart = true
        utils.mix(callerPage, events)
    }
}

module.exports = handle;
