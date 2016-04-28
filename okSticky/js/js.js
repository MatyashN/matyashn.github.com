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
    } else if (navigator.userAgent.search("AppleWebKit") >= 0 && navigator.userAgent.search("CriOS") >= 0 && /iPad|iPhone|iPod/.test(navigator.platform)) {
        browser = "iosChrome";
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
    }

    return {
      browser: browser,
      version: version
    };

  };

  function _setSticky(elem, top){
    var topStart = _getCoords(elem).top;

    var stickyClone = elem.cloneNode(true);

    stickyClone.className = elem.className + ' sticky-clone';

    stickyClone.style.position = 'fixed';
    stickyClone.style.top = top + 'px';
    stickyClone.style.display = 'none';

    document.body.insertBefore(stickyClone, document.body.firstChild);

    alert(navigator.userAgent);

    if( _getInfoBrowser().browser == 'iosChrome' ){

      // document.documentElement.style.overflow = 'hidden';
      // document.documentElement.style.height = '100%';

      // document.body.style.position = 'fixed';
      // document.body.style.overflow = 'scroll';
      // document.body.style.height = '100%';
      // document.body.style.position = 'fixed';
      if (top == 0) {
        stickyClone.className = stickyClone.className + ' iosSticky'
      };

    };


    function setPosition(){
      
      if (_getCoords(elem).scrollTop + top >= topStart) {
        stickyClone.style.display = 'block';
        elem.style.opacity = '0';
      } else {
        stickyClone.style.display = 'none';
        elem.style.opacity = '1';
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