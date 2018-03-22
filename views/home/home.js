// views/home/home.js
var data = require('./data.js')

var handle = {
    render: function(callerPage) {
        console.log('render home')
        callerPage.setData({
            currentData: data.data
        })
    }
}

module.exports = handle;