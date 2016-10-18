/* 内容管理对象 */

var H5 = function() {
    this.id = ('h5_' + Math.random()).replace(".", "_");
    this.el = $('<div class="h5" id="' + this.id + '">');
    this.page = [];
    $("body").append(this.el);

    /**
     * 新增一个页
     * name  组件的名称 会加入到classname中
     * text  业内的默认文本
     * return H5 对象 可以重复使用H5对象支持的方法
     */
    this.addPage = function(name, text) {
        var page = $("<div class='h5_page section'>");
        if (name != undefined) {
            page.addClass('h5_page_' + name);
        }
        if (text != undefined) {
            page.text(text);
        }
        this.el.append(page);
        this.page.push(page);
        if (typeof this.whenAddPage === 'function') {
            this.whenAddPage();
        }
        return this;
    }
    this.addComponent = function(name, cfg) {
        var cfg = cfg || {};
        cfg = $.extend({
            type: 'base'
        }, cfg);
        var component;
        var page = this.page.slice(-1)[0];
        switch (cfg.type) {
            case "animation":
                component = new H5ComponentAnimation(name, cfg);
                break;
            case "base":
                component = new H5ComponentBase(name, cfg);
                break;
            case "Polyline":
                component = new H5ComponentPolyline(name, cfg);
                break;
            case "Pie":
                component = new H5ComponentPie(name, cfg);
                break;
            case "Point":
                component = new H5ComponentPoint(name, cfg);
                break;
            case "Radar":
                component = new H5ComponentRadar(name, cfg);
                break;
            case "Bar":
                component = new H5ComponentBar(name, cfg);
                break;
            case "Ring":
                component = new H5ComponentRing(name, cfg);
                break;

            default:
        }
        page.append(component);
        return this;
    }
    this.loader = function(firstPage) {
        this.el.fullpage({
            onLeave: function(index, nextIndex, direction) {
                $(this).find(".h5_component").trigger('onLeave');
            },
            afterLoad: function(anchorLink, index) {
                $(this).find(".h5_component").trigger('onLoad');
            }
        });
        this.page[0].find(".h5_component").trigger('onLoad');
        this.el.show();
        if (firstPage) {
            $.fn.fullpage.moveTo(firstPage);
        }
    }
    this.loader = typeof H5_loading == 'function' ? H5_loading : this.loader;
    return this;
}
