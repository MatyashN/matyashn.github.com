;(function(){

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

  function _getInfoBrowser(){

    var browser, version, end, position;

    if (navigator.userAgent.search("MSIE") >= 0) {
      position = navigator.userAgent.search("MSIE") + 5;
      end = navigator.userAgent.search("; Windows");
      browser = "MSIE";
      version = navigator.userAgent.substring(position,end);
    } else if (navigator.userAgent.search("Chrome") >= 0) {
        position = navigator.userAgent.search("Chrome") + 7;
        end = navigator.userAgent.search(" Safari");
        browser = "Chrome";
        version = navigator.userAgent.substring(position,end);
    } else if (navigator.userAgent.search("Firefox") >= 0) {
        position = navigator.userAgent.search("Firefox") + 8;
        browser = "Firefox";
        version = navigator.userAgent.substring(position);
    } else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
        position = navigator.userAgent.search("Version") + 8;
        end = navigator.userAgent.search(" Safari");
        browser = "Safari";
        version = navigator.userAgent.substring(position,end);
    } else if (navigator.userAgent.search("Opera") >= 0) {
        position = navigator.userAgent.search("Version") + 8;
        browser = "Opera";
        version = navigator.userAgent.substring(position);
    };

    return {
      browser: browser,
      version: version
    };

  };

  function _setSticky(elem, top){
    var topStart = _getCoords(elem).top;

    function setPosition(){
      if (_getCoords(elem).scrollTop + top >= topStart) {
        elem.style.position = 'fixed';
        elem.style.top = top + 'px';
      } else {
        elem.style.position = '';
        elem.style.top = '';
      };
    };
    
    window.addEventListener ? window.addEventListener( "scroll" , setPosition) : window.attachEvent( "scroll" , setPosition);

  };

  function _stickyForFF(elem, top){
    elem.className = 'sticky ff';
    elem.style.top =  top + 'px';
  };

  Object.prototype.sticky = function(top){
    var elements = this;
    if (!top) top = 0;

    if (elements.length) {
      Array.prototype.forEach.call(elements, function(elem, item, arr){
        (_getInfoBrowser().browser == 'Firefox' && _getInfoBrowser().version >= 44) ? _stickyForFF(elem, top) : _setSticky(elem, top)
      });
    } else {
        (_getInfoBrowser().browser == 'Firefox' && _getInfoBrowser().version >= 44) ? _stickyForFF(elements, top) : _setSticky(elements, top)
    };

  };

})();