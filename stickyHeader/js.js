var sticky = (function(){

	function _sticky(selector, top){
		
		var elements = document.querySelectorAll('.header');
		if (!top) top = 0;

		Array.prototype.forEach.call( elements,function(elem, i, arrEl){

			var topStart = _getCoords(elem).top;
			var startScroll = _getCoords().scrollTop;
			var startTouchMove = 0;
			var startPoint = {};
			var nowPoint;
			var eventToucMove = 0;

			function scrollHandler(event){

				if (_getCoords(elem).scrollTop + top >= topStart) {
					elem.style.position = 'fixed';
					elem.style.top = top + 'px';
				} else {
					elem.style.position = 'absolute';
					elem.style.top = topStart + 'px';
				};

			};

			function touchStartHandler(event){
				
				window.removeEventListener('scroll', scrollHandler, false);
				window.addEventListener('touchmove', touchMoveHandler, false);

				startTouchMove = _getCoords().scrollTop;
				startPoint.x = event.changedTouches[0].clientX;
				startPoint.y = event.changedTouches[0].clientY;

			};

			function touchMoveHandler(event){
				
				nowPoint = event.changedTouches[0];
				
				info.innerHTML = 'Начальная точка скролла: ' + startTouchMove;
				info1.innerHTML = 'Величина "touchMove": ' + (nowPoint.clientY - startPoint.y);
				info2.innerHTML = 'Начальная позиция элемента: ' + topStart;
				info3.innerHTML = 'счетчик "touchMove": ' + eventToucMove++;

				if ( startTouchMove - (nowPoint.clientY - startPoint.y) + top >= topStart) {
					elem.style.position = 'fixed';
					elem.style.top = top + 'px';
				} else {
					elem.style.position = 'absolute';
					elem.style.top = topStart + 'px';
				};
				
			};

			function touchEndHandler(event){

				window.removeEventListener('touchmove', touchMoveHandler, false)
				window.addEventListener('scroll', scrollHandler, false)

			};

			window.addEventListener('scroll', scrollHandler, false);
			window.addEventListener('touchstart', touchStartHandler, false);
			window.addEventListener('touchend', touchEndHandler, false);

		});
	};

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

	return _sticky;

})();