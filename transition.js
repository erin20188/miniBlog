/**
 * Created by 麦兜 on 2018/3/24.
 */
var box = $('.box');
$('#menu-toggle').on('click', function () {
    if (box.hasClass('hidden')) {
        box.removeClass('hidden');
        requestAnimationFrame(function(){
            box.removeClass('visuallyhidden');
        });
    } else {
        box.addClass('visuallyhidden');
        box.one('transitionend', function(e) {
            box.addClass('hidden');
        });
    }
});
