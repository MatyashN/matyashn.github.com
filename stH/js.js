
    var el = document.getElementById('header');
    var top_offset = _getCoords(el).top;
        
    el.style.top = '';

    function _getPosition(elem){
        var scrollTop = _getCoords(elem).scrollTop;
        if (scrollTop - ( startPoint - endPoint ) > top_offset) {
            elem.style.top = scrollTop - top_offset - ( startPoint - endPoint ) - 15 + "px";
        } else {
            elem.style.top = '';
        }
    }

    var startTouchMove, nowPoint, startPoint, endPoint;
    
    startPoint = 0;
    endPoint = 0;

    function touchStartHandler(event, elem){
        
        if (_getCoords().scrollTop < 0){
            startPoint = _getCoords().scrollTop;
            window.scrollTo(0,1)
        } 
        
 
    };

    function touchEndHandler(event){

        if (_getCoords().scrollTop < 0) {
            endPoint = _getCoords().scrollTop;
            window.scrollTo(0,1)
        }

    };




    window.addEventListener('scroll', function(){_getPosition(el)}, false)
    window.removeEventListener('touchstart', touchStartHandler, false)
    window.addEventListener('touchend', touchEndHandler, false)

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


