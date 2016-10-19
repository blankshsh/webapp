var H5_loading = function(images, firstPage) {
    var id = this.id; //获取H5函数中的id
    $(".h5").hide();
    if (this._images === undefined) { //第一次进入
        this._images = (images || []).length;
        this._loaded = 0;
        //把当前图片存储在window中，用来进行图片的加载之后的回调
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
        //修改数值 并干掉小数部分
        $('#rate').text(((this._loaded / this._images * 100) >> 0) + '%');
        //如果载入的资源还是小于图片内容的话 直接return
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
    }, 5500)
    if (firstPage) {
        $.fn.fullpage.moveTo(firstPage);
    }

}
