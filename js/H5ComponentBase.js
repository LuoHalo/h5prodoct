/**
 * Created by luo on 2016/11/29.
 */

/*基本图像对象*/
var H5ComponentBase = function (name, cfg) {
    var cfg = cfg || {};
    var id = ('h5_c' + Math.random()).replace('.', '_');

    //把当前的组类型添加到样式中进行标记
    var cls = ' h5_component_' + cfg.type;
    var component = $('<div class="h5_component ' + cls + ' h5_component_name_' + name + '" id="' + id + '">');

    //如果cfg有text , 写进component
    cfg.text && component.text((cfg.text));
    cfg.width && component.width((cfg.width / 2));
    cfg.height && component.height((cfg.height / 2));

    cfg.css && component.css(cfg.css);
    cfg.bg && component.css('backgroundImage', 'url(' + cfg.bg + ')');

    if (cfg.center === true) {
        component.css({
            marginLeft: (cfg.width / 4 * -1) + 'px',
            left: '50%'
        });
    }
    //很多自定义函数
    if(typeof cfg.onclick === 'function'){
        component.on('click',cfg.onclick);
    }
    component.on('onLoad', function () {
        setTimeout(function () {
            component.addClass(cls + '_load').removeClass(cls + '_leave');
            cfg.animateIn && component.animate(cfg.animateIn, 1000);
        }, cfg.delay || 0);
        return false;
    });
    component.on('onLeave', function () {
        setTimeout(function () {
            component.addClass(cls + '_leave').removeClass(cls + '_load');
            cfg.animateOut && component.animate(cfg.animateOut, 1000);
        }, cfg.delay || 0);
        return false;
    });

    return component;
};