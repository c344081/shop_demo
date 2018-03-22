// views/sort/sort.js
var handle = {
    render: function (callerPage) {
        console.log('render sort')
        callerPage.setData({
            currentData: data.data
        })
    }
}

module.exports = handle;