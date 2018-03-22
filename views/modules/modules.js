// views/modules/modules.js
var handle = {
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
        }
    }
}

module.exports = handle;