
    jQuery(document).ready(function($) {

        setTimeout(function(){
            window.scrollTo(0, 1);
        }, 0);

        var element = $('#header');
        var top_offset = $('#wrapper').offset().top;

        $(window).scroll(function(){
            var scroll_top = $(window).scrollTop();

            if (scroll_top > top_offset) {
                element.css('top', scroll_top - top_offset)
            } else {
                element.css('top', '')
            }
        })
    });
