var H5_loading = function(images, firstPage) {
    var id = this.id;
    $(".h5").hide();
    if (this._images === undefined) { //第一次进入
        this._images = (images || []).length;
        this._loaded = 0;
        window[id] = this;
        for (s in images) {
            var item = images[s];
            var img = new Image;
            img.onload = function() {
                window[id].loader();
            }
            img.src = item;
        }
        $('#rate').text('0%');
        return this;
    } else {
        this._loaded++;
        $('#rate').text(((this._loaded / this._images * 100) >> 0) + '%');
        if (this._loaded < this._images) {
            return this;
        }
    }
    window[id] = null;
    var bounce1 = $('<div class="double-bounce1">'),
        bounce2 = $('<div class="double-bounce2">'),
        bounce3 = $('<div class="double-bounce3">');
    var loadbox = $('.loading');
    loadbox.prepend(bounce3).prepend(bounce2).prepend(bounce1);
    
    this.el.fullpage({
        onLeave: function(index, nextIndex, direction) {
            $(this).find(".h5_component").trigger('onLeave');
        },
        afterLoad: function(anchorLink, index) {
            $(this).find(".h5_component").trigger('onLoad');
        }
    });
    this.page[0].find(".h5_component").trigger('onLoad');
    setTimeout(function() {
        $(".loading").hide();
        $(".h5").show();
        //this.el.show();
    }, 5000)
    
    if (firstPage) {
        $.fn.fullpage.moveTo(firstPage);
    }
}
