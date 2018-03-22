// views/cart/cart.js
var handle = {
    render: function (callerPage) {
        console.log('render cart')
        callerPage.setData({
            currentData: data.data
        })
    }
}

module.exports = handle;
