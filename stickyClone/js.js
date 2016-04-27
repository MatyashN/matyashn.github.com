;(function(){
	var elem, cloneEl, startPos, $window, elemHeight;

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

	setTimeout(function(){
				$(window).scrollTop(1);
			},0)

})();