


try {
        var el = $('#header');
        var top_offset = $('#wrapper').offset().top;
    } catch (e) { }

    $(window).load(function(e){
        try {
            el.css('top', '');
            top_offset = $('#wrapper').offset().top;
        } catch (e) { }
        $(window).scroll(function () {
            var scroll_top = $(window).scrollTop();

            if (scroll_top > top_offset) {
                el.css('top', scroll_top - top_offset);
            }
            else {
                el.css('top', '');
            }
        });
    });


    // for iphone SETTING THE HEIGHT OF THE FEATURE'S MAIN IMAGE SO THE STICKY CAN DETECT THE BOTTOM AND IT WILL STICK TO IT DEPENDING ON THE SCREEN SIZE AND OREINTATION ------------------------------

    detectOrientation();
    window.onorientationchange = detectOrientation;
    function detectOrientation() {

        function dett() {
            var el = $('#header'),
              top_offset = $('#wrapper').offset().top;
            $(window).scroll(function () {
                var scroll_top = $(window).scrollTop();

                if (scroll_top > top_offset) {
                    el.css('top', scroll_top - top_offset);
                }
                else {
                    el.css('top', '');
                }
            });
        }


        if (typeof window.onorientationchange != 'undefined') {
            var orientation = detectOrientation;
            if (orientation == 0) {
                $(".inv_main_image img").height(200);
                $(function () {
                    dett();
                });

            }
            else if (orientation == 90) {
                $(".inv_main_image img").height(280);
                $(function () {
                    dett();
                })
            }

            else if (orientation == -90) {
                $(".inv_main_image img").height(280);
                var el = $('#header'),
                top_offset = $('#wrapper').offset().top;

                $(function () {
                    dett();
                })
            }
            else if (orientation == 180) {
                $(".inv_main_image img").height(200);
            }
        }
    }


    // for Android - SETTING THE HEIGHT OF THE FEATURE'S MAIN IMAGE SO THE STICKY CAN DETECT THE BOTTOM AND IT WILL STICK TO IT DEPENDING ON THE SCREEN SIZE AND OREINTATION ------------------------------



    var isAndroid = navigator.userAgent.toLowerCase().indexOf("android");

    if (isAndroid > -1) {


        detectOrientation2();
        window.onorientationchange = detectOrientation2;
        function detectOrientation2() {

            function dett() {
                var el = $('#header'),
                  top_offset = $('#wrapper').offset().top;
                $(window).scroll(function () {
                    var scroll_top = $(window).scrollTop();

                    if (scroll_top > top_offset) {
                        el.css('top', scroll_top - top_offset);
                    }
                    else {
                        el.css('top', '');
                    }
                });
            }


            if (typeof window.onorientationchange != 'undefined') {
                var orientation = detectOrientation2;
                if (orientation == 0) {
                    $('.ui-body-a .ui-link img').width(104);
                    $('.ui-body-a .ui-link img').height('auto');
                    $(".arrowCont").css({ top: '50px' });
                    $(".inv_main_image img").height(220);

                    $(function () {
                        dett();
                    });

                }
                else if (orientation == 90) {
                    $(".arrowCont").css({ top: '100px' });
                    $(".inv_main_image img").height(380);

                    $(function () {
                        dett();
                    })
                }

                else if (orientation == -90) {
                    $(".arrowCont").css({ top: '100px' });
                    $(".inv_main_image img").height(380);
                    var el = $('#header'),
                    top_offset = $('#wrapper').offset().top;

                    $(function () {
                        dett();
                    })
                }
                else if (orientation == 180) {
                    $('.ui-body-a .ui-link img').width(104);
                    $('.ui-body-a .ui-link img').height('auto');
                    $(".inv_main_image").height(220);
                }
            }
        }


    }