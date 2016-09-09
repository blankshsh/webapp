/* 散点图表组件对象 */
var H5ComponentPoint = function(name, cfg) {
    var component = new H5ComponentBase(name, cfg);
    var base = cfg.data[0][1];
    $.each(cfg.data, function(idx, item) {
        var point = $("<div class='point point_" + idx + "'>")
            // point.text(item[0]);
        var name = $('<div class="name">' + item[0] + "</div>");
        var rate = $('<div class="per">' + (item[1] * 100) + "%</div>");
        var wrpbox = $('<div class="wrpbox">');
        name.append(rate);
        point.append(name);
        point.append(wrpbox);
        

        var perbox = (item[1] / base * 100);
        var per = (item[1] / base * 100) + "%";
        wrpbox.width("100%").height("100%");
        point.width(per).height(per);
        if (item[2]) {
            wrpbox.css({
                backgroundColor: item[2],
                // position: 'absolute',
                // left: "50%",
                // top: "50%",
                // marginLeft: perbox / 2 * -1,
                // marginTop: "per/2*-1",
            })
            point.css({
                backgroundColor: item[2],
                position: 'absolute',
                left: "50%",
                top: "50%",
                marginLeft: perbox / 2 * -1,
                marginTop: "per/2*-1",
            })
        }
        if (item[3] !== undefined && item[4]) {
            point.css('left', item[3]).css("top", item[4]);
            //wrpbox.css('left', item[3]).css("top", item[4]);
        }
        component.append(point);

    })
    return component;
}
