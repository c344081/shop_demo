// views/sort/sort.js
var handle = {
    render: function (callerPage) {
        console.log('render sort')
        callerPage.setData({
            currentView: 'sort',
            currentData: data.data
        })
    }
}

module.exports = handle;