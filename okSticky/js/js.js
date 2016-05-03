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

    if (navigator.userAgent.search("Firefox") >= 0) {
        position = navigator.userAgent.search("Firefox") + 8;
        browser = "Firefox";
        version = navigator.userAgent.substring(position);
    };

    return {
      browser: browser,
      version: version
    };

  };

  function _setSticky(elem, top){

    var topStart = _getCoords(elem).top;
    var stickyClone = elem.cloneNode(true);
    stickyClone.className = elem.className + ' sticky-clone';
    stickyClone.style.top = top + 'px';

    mainWrap.insertBefore(stickyClone, mainWrap.firstChild);

    var top_offset = _getCoords(elem).top;

    function _setPosition(){

      var scrollTop = mainWrap.scrollTop;
      
      if (scrollTop + top  > top_offset) {
          stickyClone.style.display = 'block';
      } else {
          stickyClone.style.display = 'none';
      };

    };

    function _setWidth(){
      stickyClone.style.width = mainWrap.clientWidth + 'px';
    };

    _setWidth();

    mainWrap.addEventListener ? mainWrap.addEventListener( "scroll" , _setPosition) : mainWrap.attachEvent( "onscroll" , _setPosition);

    window.addEventListener ? window.addEventListener( "resize" , _setWidth) : window.attachEvent( "onresize" , _setWidth);
    
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