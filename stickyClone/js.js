;(function(){
	var elem, cloneEl, startPos, $window;

	elem = $(".sticky");
	cloneEl = $(".sticky").clone();
	cloneEl.addClass('sticky-clone');
	$('body').prepend(cloneEl);
	cloneEl.hide();

	startPos = elem.offset().top;

	$window = $(window);

	$(window).scroll(function(){
		if ($window.scrollTop() > startPos){
			cloneEl.show();
		} else {
			cloneEl.hide();
		}
	});

	$window.scrollTop(1);

})();