;(function(){

	var browser, version, end, position;

	if (navigator.userAgent.search("MSIE") >= 0){
	    position = navigator.userAgent.search("MSIE") + 5;
	    end = navigator.userAgent.search("; Windows");
	    browser = "MSIE";
	    version = navigator.userAgent.substring(position,end);
	}
	else if (navigator.userAgent.search("Chrome") >= 0){
	    position = navigator.userAgent.search("Chrome") + 7;
	    end = navigator.userAgent.search(" Safari");
	    browser = "Chrome";
	    version = navigator.userAgent.substring(position,end);
	}
	else if (navigator.userAgent.search("Firefox") >= 0){
	    position = navigator.userAgent.search("Firefox") + 8;
	    browser = "Firefox";
	    version = navigator.userAgent.substring(position);
	}
	else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0){
	    position = navigator.userAgent.search("Version") + 8;
	    end = navigator.userAgent.search(" Safari");
	    browser = "Safari";
	    version = navigator.userAgent.substring(position,end);
	}
	else if (navigator.userAgent.search("Opera") >= 0){
	    position = navigator.userAgent.search("Version") + 8;
	    browser = "Opera";
	    version = navigator.userAgent.substring(position);
	}

// ##### Firefox #####

	if ( browser == "Firefox" && version >= 44 ){

		$(".sticky").addClass('ff')

	} else {

			var elem, cloneEl, startPos, $window, elemHeight;

			elem = $(".sticky");
			cloneEl = $(".sticky").clone();
			cloneEl.addClass('sticky-clone');
			$('body').prepend(cloneEl);
			cloneEl.hide();

			startPos = elem.offset().top;
			$window = $(window);

			$(window).scroll(function(){
				info.innerHTML = $window.scrollTop();
				if ($window.scrollTop() > startPos){
					cloneEl.show();
				} else {
					cloneEl.hide();
				}
			});

			window.addEventListener('touchend', function(event){
				if ($window.scrollTop() < 0) {
						$window.scrollTop(0)
				}
			}, false)

			setTimeout(function(){
						$(window).scrollTop(1);
			},0)

	}

})();