/* 饼图组件对象 */
var H5ComponentRing = function(name, cfg) {
    var component = new H5ComponentBase(name, cfg);


    //绘制一个底层图
    var w = cfg.width;
    var h = cfg.height;
    var r = w / 2;
    var cns = document.createElement('canvas');
    var ctx = cns.getContext('2d');
    var sAngel = 1.5 * Math.PI; //设置开始的角度在12点
    var eAngel = 0; //结束角度
    var aAngel = Math.PI * 2; //100%的圆结束的角度
    cns.width = ctx.width = w;
    cns.height = ctx.height = h;
    $(cns).css("z-index", 1);
    component.append(cns);
    //加入内容区
    var cns = document.createElement('canvas');
    var ctx = cns.getContext('2d');
    cns.width = ctx.width = w;
    cns.height = ctx.height = h;
    $(cns).css("z-index", 3);
    component.append(cns);
    ctx.fillStyle = "#FFF";
    ctx.strokeStyle = "#FFF";

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(r, r);
    ctx.arc(r, r, r / 4 * 3, 0, aAngel);
    ctx.fill();
    ctx.stroke();
    //加入数据文本
    var text = $('<div class="text">');
    text.text(cfg.data[0]);
    var per = $('<div class="per">');
    per.text(cfg.data[1] * 100 + '%');
    text.append(per);
    text.css('opacity', 0);
    component.append(text);


    //插入数据图
    var cns = document.createElement('canvas');
    var ctx = cns.getContext('2d');
    cns.width = ctx.width = w;
    cns.height = ctx.height = h;
    $(cns).css("z-index", 1);
    component.append(cns);
    ctx.fillStyle = "#ff7676";
    ctx.strokeStyle = "#ff7676";
    ctx.lineWidth = 1;
    var draw = function(per) {
        ctx.clearRect(0, 0, w, h);
        ctx.beginPath();
        ctx.moveTo(r, r);
        if (per <= 0) {

        } else {
            ctx.arc(r, r, r, sAngel, sAngel + 2 * Math.PI * cfg.data[1] * per);
        }
        ctx.fill();
        ctx.stroke();
        if (per <= 0) {
            component.find('.text').css("opacity", 0);
        }
        if (per >= 1) {
            component.find('.text').css("opacity", 1);
        }

    }
    draw(0);

    component.on("onLoad", function() {
        var s = 0;
        for (var i = 0; i < 100; i++) {
            setTimeout(function() {
                s += .01;
                draw(s);
            }, i * 10 + 500)
        }
    });
    component.on("onLeave", function() {
        var s = 1;
        for (var i = 0; i < 100; i++) {
            setTimeout(function() {
                s -= .01;
                draw(s);
            }, i * 10)
        }
    })



    return component;
}
