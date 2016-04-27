var watch = (function(){
var counter = 0;
	return function(obj, prop){

		var newValue, oldValue;
		oldValue = obj[prop];
		
		var event = new CustomEvent('changeProp', {});
		
		function _watch(){
			// console.log(counter++ + ' 	\t' + window.pageYOffset)
			window.dispatchEvent(event)
			newValue = obj[prop];
			if (newValue === oldValue) {
				return false
			}
			else {
				window.dispatchEvent(event)
				oldValue = newValue;
				info.innerHTML = newValue;
				return true
			};
		};

		setInterval(_watch, 250)
	};
})();

var sticky = (function(){

	function _sticky (selectors, top) {

		var elements = document.querySelectorAll(selectors);
		if (!top) top = 0;

		watch(window, 'pageYOffset');

		Array.prototype.forEach.call(elements, function(elem, i, arr){
			var topStart = _getCoords(elem).top;

			var setPosition = function(){
				if (_getCoords(elem).scrollTop + top >= topStart) {
					elem.style.position = 'fixed';
					elem.style.top = top + 'px';
				} else {
					elem.style.position = 'absolute';
					elem.style.top = topStart + 'px';
				}
			}

			window.addEventListener ? window.addEventListener( "changeProp" , setPosition) : window.attachEvent( "scroll" , setPosition);

		})
	}



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

	return _sticky
})();

