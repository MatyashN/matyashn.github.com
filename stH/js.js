

    var el = document.getElementById('header');
    var top_offset = _getCoords(el).top;
    
    el.style.top = '';

    function _getPosition(elem){
        var scrollTop = scrollBox.scrollTop;
        if (scrollTop  > top_offset) {
            elem.style.top = scrollTop - top_offset  + "px";
        } else {
            elem.style.top = '';
        }
    }

  




    scrollBox.addEventListener('scroll', function(){_getPosition(el)}, false)

    function _getCoords(elem) {
        if (!elem) elem = document.documentElement;

        var box = elem.getBoundingClientRect();

        var body = document.body;
        var docEl = document.documentElement;

        var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
        var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

        var clientTop = docEl.clientTop || body.clientTop || 0;
        var clientLeft = docEl.clientLeft || body.clientLeft || 0;

        var top = box.top + scrollTop - clientTop;
        var left = box.left + scrollLeft - clientLeft;

        return {
            top: top,
            left: left,
            scrollTop: scrollTop - clientTop,
            scrollLeft: scrollLeft - clientLeft
        };
    };


