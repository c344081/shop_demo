// views/home/home.js

var data = require('./data.js'),
    utils = require('../../common/utils/utils.js'),
    modules = require('../modules/modules.js'),
    handle,
    _fn;

handle = {
    render: function(callerPage) {
        console.log('显示首页')
        _fn.init(callerPage)
        callerPage.setData({
            currentData: data.data
        })
    }
}

_fn = {
    init: function(callerPage) {
        if (callerPage.initedHome) {
            return;
        }
        // mix events
        callerPage.initedHome = true
        utils.mix(callerPage, modules.events)
    }
}

module.exports = handle;