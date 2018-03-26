// views/mine/mine.js
var utils = require('../../common/utils/utils.js'),
    handle,
    events,
    _fn;

handle = {
    render: function (callerPage) {
        console.log('render mine')
        _fn.init(callerPage)
        callerPage.setData({
            currentView: 'mine'
        })
    }
}

events = {
    mineCallPhone: function(e) {
        var phone = e.currentTarget.dataset.phone;
        wx.makePhoneCall({
            phoneNumber: phone
        })
    }
}

_fn = {
    init: function(callerPage) {
        if (callerPage.initedMine) {
            return;
        }
        callerPage.initedMine = true
        utils.mix(callerPage, events)
    }
}

module.exports = handle;