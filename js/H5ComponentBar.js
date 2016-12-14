/**
 * Created by luo on 2016/12/4.
 */

/*柱图表组件对象*/
var H5ComponentBar = function (name, cfg) {
    var component = new H5ComponentBase(name, cfg);
    $.each(cfg.data, function (idx, items) {
        console.log(items);

        var line = $('<div class="line">');
        var name = $('<div class="name">');
        var rate = $('<div class="rate">');
        var per = $('<div class="per">');

        var width = items[1]*100 + '%';

        if(items[2]){
            var bgStyle='style="background-color:'+items[2]+'"';
        }
        rate.html('<div class="bg" '+bgStyle+'></div>')
        rate.css('width',width);

        name.text(items[0]);
        per.text(width);
        line.append(name).append(rate).append(per);

        component.append(line);
    })
    return component;
};