// views/mine/mine.js
var handle = {
    render: function (callerPage) {
        console.log('render mine')
        callerPage.setData({
            currentData: data.data
        })
    }
}

module.exports = handle;