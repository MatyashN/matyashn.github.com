;(function(){
	var elem, cloneEl, startPos, $window, elemHeight;

	elem = $(".sticky");
	cloneEl = $(".sticky").clone();
	cloneEl.addClass('sticky-clone');
	$('body').prepend(cloneEl);
	cloneEl.hide();

	startPos = elem.offset().top;
	elemHeight = parseFloat(elem.css('height'));
	$window = $(window);

	$(window).scroll(function(){
		if ($window.scrollTop() - elemHeight > startPos){
			cloneEl.show('fast');
		} else {
			cloneEl.hide('fast');
		}
	});

	setTimeout(function(){
				$(window).scrollTop(1);
			},0)

})();