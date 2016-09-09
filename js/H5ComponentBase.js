/* 基本图文组件对象 */
var H5ComponentBase = function(name, cfg) {
    var cfg = cfg || {};
    var name = name || {};
    //console.log(name);
    var id = ('h5_c_' + Math.random()).replace('.', '_');
    //var cls = ' h5_component_name_' + name+' h5_component_' + cfg.type;
    var mytype = 'h5_component_' + cfg.type;
    var myname = ' h5_component_name_' + name;
    //console.log(cls);
    //console.log(cls02);
    var component = $('<div class="h5_component ' + mytype + myname + ' " id="' + id + '">');
    //console.log(component);
    cfg.text && component.text(cfg.text);
    cfg.width && component.width(cfg.width / 2);
    cfg.height && component.height(cfg.height / 2);
    cfg.bg && component.css('background', 'url(' + cfg.bg + ')');
    cfg.css && component.css(cfg.css);

    if (cfg.center === true) {
        component.css({
            marginLeft: (cfg.width / 4 * -1) + 'px',
            left: '50%'
        })
    }
    if (cfg.vertical === true) {
        component.css({
            margintop: (cfg.height / 4 * -1) + 'px',
            top: '50%'
        })
    }
    component.on("onLoad", function() {
        setTimeout(function() {
            component.addClass(mytype + '_load').removeClass(mytype + '_leave');
            cfg.animateIn && component.animate(cfg.animateIn);
        }, cfg.delay || 0)
        return false;
    })
    component.on("onLeave", function() {
        setTimeout(function() {
            component.addClass(mytype + '_leave').removeClass(mytype + '_load');
            cfg.animateOut && component.animate(cfg.animateOut);
        }, cfg.delay || 0)
        return false;
    })
    if (typeof cfg.onclick === "function") {
        component.on('click', cfg.onclick)
    }

    return component;
}
