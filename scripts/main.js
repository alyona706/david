;(function($){
	'use strict';
	$(window).on('load', function() {
		$('.what__slider').slick({
			dots: true,
			prevArrow: $('.arrow__prev'),
			nextArrow: $('.arrow__next'),
			slidesToShow: 1,
			slidesToScroll: 1,
	});
});
})(jQuery);