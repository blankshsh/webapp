$(function() {
    var h5 = new H5();

    h5.whenAddPage = function() {
        this.addComponent('slide_up', {
            bg: "./imgs/footer.png",
            css: {
                left: 0,
                bottom: "-20px",
                width: "100%",
                height: "20px",
                zIndex: 999,
                opacity: 0,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
            },
            animateIn: {
                opacity: 1,
                bottom: 0,
            },
            animateOut: {
                opacity: 0,
                bottom: "-20px",
            },
            dealy: 500,
        })
    }


    h5
        // .addPage()
        // .addComponent("animation", {
        //     type: 'animation',
        //     center: true,
        // })
        .addPage('face')
        .addComponent("logo", {
            width: 395,
            height: 130,
            center: true,
            css: {
                "background": "url(./imgs/face_logo.png)",
                "background-size": "100%",
                "background-repeat": "no-repeat",
                opacity: 0,
            },
            animateIn: {
                top: 100,
                opacity: 1
            },
            animateOut: {
                top: 0,
                opacity: 0
            },
        })
        .addComponent("slogan", {
            center: true,
            width: 365,
            height: 99,
            css: {
                "background": "url(./imgs/face_slogan.png)",
                "background-size": "100%",
                "background-repeat": "no-repeat",
                opacity: 0,
                top: 180,
            },
            animateIn: {
                // left: "50%",
                opacity: 1
            },
            animateOut: {
                // left: 0,
                opacity: 0
            },
            delay: 500,
        })
        .addComponent('face_img_left', {
            width: 370,
            height: 493,
            css: {
                "background": "url(./imgs/face_img_left.png)",
                "background-size": "100%",
                "background-repeat": "no-repeat",
                opacity: 0,
                left: -50,
                bottom: -50,
            },
            animateIn: {
                // left: "50%",
                opacity: 1,
                left: 0,
                bottom: 0,
            },
            animateOut: {
                // left: 0,
                opacity: 0,
                left: -50,
                bottom: -50,
            },
            delay: 1000,
        })
        .addComponent('face_img_right', {
            width: 276,
            height: 449,
            css: {
                "background": "url(./imgs/face_img_right.png)",
                "background-size": "100%",
                "background-repeat": "no-repeat",
                opacity: 0,
                right: -50,
                bottom: -50,
            },
            animateIn: {
                // left: "50%",
                opacity: 1,
                right: 0,
                bottom: 0,
            },
            animateOut: {
                // left: 0,
                opacity: 0,
                right: -50,
                bottom: -50,
            },
            delay: 1000,
        })
        .addPage()
        .addComponent("caption", {
            text: '核心理念'
        })
        .addComponent("text", {
            width: 600,
            height: 60,
            center: true,
            text: 'IT教育网=只学有用的',
            css: {
                opacity: 0,
                textAlign: "center",
                color: "red",
                fontSize: '26px'
            },
            animateIn: {
                opacity: 1,
                top: 120,
            },
            animateOut: {
                opacity: 0,
                top: 240,
            },
        })
        .addComponent("description", {
            width: 521,
            height: 335,
            center: true,
            text: 'IT教育网=只学有用的',
            bg: './imgs/description_bg.gif',
            css: {
                //background: '../imgs/description_bg.gif',
                backgroundSize: "100%",
                backgroundRepeat: 'no-repeat',
                opacity: 0,
                padding: "15px 10px 10px 10px",
                textAlign: "center",
                color: "#fff",
                fontSize: '15px',
                lineHeight: "18px",
                textAlign: "justify",
                top: 240,
                boxSizing: "border-box",
            },
            text: "2013年，iT学院教育blbal2013年，iT学院教育blbal2013年，iT学院教育blbal2013年，iT学院教育blbal2013年，iT学院教育blbal2013年，iT学院教育blbal2013年，iT学院教育blbal",
            animateIn: {
                opacity: 1,
                top: 190,
            },
            animateOut: {
                opacity: 0,
                top: 240,
            },
            delay: 1000,
        })
        .addComponent("pepole", {
            center: true,
            width: 515,
            height: 305,
            bg: "./imgs/p1_people.png",
            css: {
                backgroundSize: "100%",
                bottom: 0,
                opacity: 0,
            },
            animateIn: {
                opacity: 1,
                bottom: 40,
            },
            animateOut: {
                opacity: 0,
                bottom: 0,
            },
            delay: 500,
        })
        .addPage()
        .addComponent("caption", { //polyline
            text: "课程分布方向"
        })
        .addComponent("polyline", {
            type: 'Polyline',
            width: 550,
            height: 600,
            center: true,
            vertical: true,
            css: {
                bottom: 0,
                opacity: 0,
            },
            data: [
                ['js', .4, "#df0d00"],
                ['HTML/CSS', .2, "#000"],
                ['CSS3', .2],
                ['HTML5', .22],
                ['JQuery', .23],
                ['bootstrap', .34],
            ],
            css: {
                top: "30%",
                opacity: 0,
                marginTop: "-150px",
            },
            animateIn: {
                top: "50%",
                opacity: 1,
                marginTop: "-150px",
            },
            animateOut: {
                top: "30%",
                opacity: 0,
                marginTop: "-150px",
            },
        })
        .addComponent("msg", {
            text: '前端开发课程占到40%',
            css: {
                opacity: 0,
                top: 140,
                textAlign: 'center',
                width: "100%",
                color: "#ff7676",
            },
            animateIn: {
                opacity: 1
            },
            animateOut: {
                opacity: 0
            },

        })
        .addPage()
        .addComponent("caption", { //pie
            text: "移动开发课程资源"
        })
        .addComponent("pie", {
            type: 'Pie',
            vertical: true,
            center: true,
            width: 400,
            height: 400,
            css: {
                bottom: 0,
                opacity: 0,
            },
            data: [
                ['Android', .4, "#ff7676"],
                ['IOS', .3],
                ['Cocos2d-x', .2],
                ['Unity-3D', .1],
            ],
            css: {
                top: 100,
                opacity: 0,
            },
            animateIn: {
                top: 200,
                opacity: 1,
            },
            animateOut: {
                opacity: 0,
                top: 100
            },
        })
        .addComponent("msg", {
            text: '移动课程Android占到40%',
            css: {
                opacity: 0,
                bottom: "20%",
                textAlign: 'center',
                width: "100%",
                color: "#ff7676",
            },
            animateIn: {
                opacity: 1
            },
            animateOut: {
                opacity: 0
            },

        })
        .addPage()
        .addComponent("caption", { //bar
            text: "课程分布方向"
        })
        .addComponent('Bar', {
            type: 'Bar',
            width: 530,
            height: 600,
            css: {
                bottom: 0,
                opacity: 0,
            },
            data: [
                ['javascript', .4, "#df0d00"],
                ['HTML/CSS', .2, "#c0c0c0"],
                ['CSS3', .2],
                ['HTML5', .22],
                ['JQuery', .23],
                ['bootstrap', .34],
            ],
            css: {
                top: 100,
                opacity: 0,
            },
            animateIn: {
                top: 200,
                opacity: 1,
            },
            animateOut: {
                opacity: 0,
                top: 100
            },
            center: true,
        })
        .addComponent("msg", {
            text: 'Javascript占到40%',
            css: {
                opacity: 0,
                bottom: "20%",
                textAlign: 'center',
                width: "100%",
                color: "#ff7676",
            },
            animateIn: {
                opacity: 1
            },
            animateOut: {
                opacity: 0
            },

        })
        .addPage()
        .addComponent("caption", { //radar
            text: "后端开发课程"
        })
        .addComponent("Radar", {
            type: 'Radar',
            width: 400,
            height: 400,
            css: {
                bottom: 0,
                opacity: 0,
            },
            data: [
                ['js', .2, "#df0d00"],
                ['HTML/CSS', .3, "#000"],
                ['CSS3', .4],
                ['HTML5', .5],
                ['JQuery', .6],
            ],
            css: {
                top: 100,
                opacity: 0,
            },
            animateIn: {
                top: 200,
                opacity: 1,
            },
            animateOut: {
                opacity: 0,
                top: 100
            },
            center: true,
        })
        .addComponent("msg", {
            text: 'JQuery占到60%',
            css: {
                opacity: 0,
                bottom: "20%",
                textAlign: 'center',
                width: "100%",
                color: "#ff7676",
            },
            animateIn: {
                opacity: 1
            },
            animateOut: {
                opacity: 0
            },

        })
        .addPage()
        .addComponent("caption", { //ring
            text: "报名人数过万"
        })
        .addComponent('Ring_all', {
            type: 'Ring',
            width: 400,
            height: 400,
            center: true,
            data: ['总课程', .7, '#ff7676'],
            css: {
                top: 70,
                opacity: 0
            },
            animateIn: {
                opacity: 1,
                top: 120,
            },
            animateOut: {
                opacity: 0,
                top: 70,
            },

        })
        .addComponent("msg", {
            text: '不同课程报名人数超过一万占比',
            css: {
                opacity: 0,
                top: 330,
                textAlign: 'center',
                width: "100%",
                color: "#ff7676",
                fontSize: "20px",
            },
            animateIn: {
                opacity: 1
            },
            animateOut: {
                opacity: 0
            },
            delay: 1500,
        })
        .addComponent('Ring_s', {
            type: 'Ring',
            width: 180,
            height: 180,
            data: ['前端开发', .43, '#ff7676'],

            css: {
                left: "50%",
                bottom: 120,
                opacity: 0,
                marginLeft: "-135px",
            },
            animateIn: {
                opacity: 1,
                bottom: 160,
            },
            animateOut: {
                opacity: 0,
                bottom: 120,
            },
        })
        .addComponent('Ring_s', {
            type: 'Ring',
            width: 180,
            height: 180,
            data: ['后端开发', .27, '#ff7676'],
            center: true,
            css: {
                left: "50%",
                bottom: 120,
                opacity: 0,

            },
            animateIn: {
                opacity: 1,
                bottom: 160,
            },
            animateOut: {
                opacity: 0,
                bottom: 120,
            },
        })
        .addComponent('Ring_s', {
            type: 'Ring',
            width: 180,
            height: 180,
            data: ['移动开发', .22, '#ff7676'],
            css: {
                left: "50%",
                bottom: 120,
                opacity: 0,
                marginLeft: "45px",
            },
            animateIn: {
                opacity: 1,
                bottom: 160,
            },
            animateOut: {
                opacity: 0,
                bottom: 120,
            },
        })
        .addComponent('Ring_s', {
            type: 'Ring',
            width: 180,
            height: 180,
            data: ['数据处理', .4, '#ff7676'],
            css: {
                left: "50%",
                bottom: 20,
                marginLeft: "-90px",
                opacity: 0,
            },
            animateIn: {
                opacity: 1,
                bottom: 60,
            },
            animateOut: {
                opacity: 0,
                bottom: 20,
            },
        })
        .addComponent('Ring_s', {
            type: 'Ring',
            width: 180,
            height: 180,
            data: ['图像处理', .3, '#ff7676'],
            css: {
                left: "50%",
                bottom: 20,
                opacity: 0,
            },
            animateIn: {
                opacity: 1,
                bottom: 60,
            },
            animateOut: {
                opacity: 0,
                bottom: 20,
            },
        })

    .addPage()
        .addComponent("caption", { //point
            text: "课程难度分布"
        })
        .addComponent("Point", { //point
            type: 'Point',
            width: 300,
            height: 300,
            css: {
                bottom: 0,
                opacity: 0,
            },
            data: [
                ['中级', .4, '#FF7676'],
                ['初级', .2, '#ffa3a4', -50, -90],
                ['高级', .3, '#99c1ff', 60, -150],
            ],
            animateIn: {
                bottom: "40%",
                opacity: 1,
            },
            animateOut: {
                bottom: 0,
                opacity: 0,
            },
            center: true,
        })





    .addPage('tail')
        .addComponent("tail_logo", {
            center: true,
            width: 395,
            height: 129,
            bg: "./imgs/tail_logo.png",
            css: {
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                bottom: 0,
                opacity: 0,
            },
            animateIn: {
                opacity: 1,
                top: 210,
            },
            animateOut: {
                opacity: 0,
                top: 240,
            },
        })
        .addComponent("tail_slogan", {
            center: true,
            width: 314,
            height: 46,
            bg: "./imgs/tail_slogan.png",
            css: {
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                top: 280,
                left: "0%",
                opacity: 0,
            },
            animateIn: {
                opacity: 1,
                left: "50%",
            },
            animateOut: {
                opacity: 0,
                left: "0%",
            },
            delay: 500,
        })
        .addComponent("tail_slogan", {
            width: 128,
            height: 120,
            bg: "./imgs/tail_share.png",
            css: {
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                top: 110,
                opacity: 0,
                right: 110,
            },
            animateIn: {
                opacity: 1,
                top: 10,
                right: 10,
            },
            animateOut: {
                opacity: 0,
                top: 110,
                right: 110,
            },
            delay: 1000,
        })
        .addComponent("back", {
            center: true,
            width: 52,
            height: 50,
            bg: "./imgs/tail_back.png",
            css: {
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
            },
            onclick: function() {
                $.fn.fullpage.moveTo(1);
            }
        })

    .loader(["./imgs/footer.png", "./imgs/face_logo.png", "./imgs/face_slogan.png", "./imgs/face_img_left.png", "./imgs/face_img_right.png", "./imgs/description_bg.gif", "./imgs/p1_people.png", "./imgs/tail_logo.png", "./imgs/tail_back.png", "./imgs/tail_share.png"], ["./imgs/tail_slogan.png"]);

})
