/* 柱图组件对象 */
var H5ComponentPolyline = function(name, cfg) {
    var component = new H5ComponentBase(name, cfg);

    //网格线
    var w = cfg.width;
    var h = cfg.height;
    //插入画布 （网格线背景）
    var cns = document.createElement('canvas');
    var ctx = cns.getContext('2d');
    cns.width = ctx.width = w;
    cns.height = ctx.height = h;
    component.append(cns);
    //水平网格线  10份
    var step = 10;
    ctx.beginPath(); //开启画笔
    ctx.lineWidth = 1; //画笔宽度
    ctx.strokeStyle = "#AAAAAA"; //画笔颜色

    window.ctx = ctx; //暴露画笔
    for (var i = 0; i < step + 1; i++) {
        var y = (h / step) * i;
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
    }
    //垂直线根据项目来分
    step = cfg.data.length + 1;
    var text_w = w / step + 1;
    for (var i = 0; i < step + 1; i++) {
        var x = (w / step) * i;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        if (cfg.data[i]) {
            var text = $('<div class="text"></div>');
            text.text(cfg.data[i][0]);
            text.css("width", text_w / 2).css('left', x / 2 + text_w / 4);
            component.append(text);
        }

    }
    ctx.stroke(); //收笔

    //绘制折线数据
    var cns = document.createElement('canvas');
    var ctx = cns.getContext('2d');
    cns.width = ctx.width = w;
    cns.height = ctx.height = h;
    component.append(cns);
    var draw = function(per) {
		ctx.clearRect(0, 0, w, h); //清空画布
        ctx.beginPath(); //开启画笔
        ctx.lineWidth = 3; //画笔宽度
        ctx.strokeStyle = "#FF8878"; //画笔颜色

        var datainner = cfg.data;
        var x = 0,
            y = 0,
            row_w = (w / (cfg.data.length + 1));

        //ctx.moveTo(10, 10);
        //ctx.arc(10, 10, 5, 0, 2 * Math.PI);//test园

        //画点
        for (i in datainner) {
            var item = datainner[i];
            x = row_w * i + row_w;
            y = h - (item[1] * h * per);
            ctx.moveTo(x, y);
            ctx.arc(x, y, 5, 0, 2 * Math.PI);
            // console.log(item);
        }
        //画连接线
        ctx.moveTo(row_w, h - (datainner[0][1] * h * per));
        for (i in datainner) {
            var item = datainner[i];
            x = row_w * i + row_w;
            y = h - (item[1] * h * per);
            ctx.lineTo(x, y);
        }

        ctx.stroke(); //收线

        ctx.strokeStyle = "rgba(255,188,188,0.2)";
        ctx.lineTo(x, h);
        ctx.lineTo(row_w, h);
        ctx.fillStyle = "rgba(255,188,188,0.2)";
        ctx.fill();
        ctx.font="15px 微软雅黑";
        //写数据
        for (i in datainner) {
            var item = datainner[i];
            x = row_w * i + row_w;
            y = h - (item[1] * h * per);
            ctx.fillStyle = item[2] ? item[2] : '#C0C0C0';
            ctx.fillText(((item[1] * 100) >> 0) + '%', x - 10, y - 10);
            // console.log(item);
        }
    }
    component.on("onLoad", function() {
        var s = 0;
        for (var i = 0; i < 100; i++) {
            setTimeout(function() {
                s += .01;
                draw(s);
            }, i * 10+500)
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
