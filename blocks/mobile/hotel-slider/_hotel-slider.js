function initHotelSlider(){
	$('.hotel-slider').owlCarousel({
		autoPlay: true,
		autoplayTimeout: 1000,
		navigation : true,
		navigationText: [
			'<i class="hotel-slider__nav hotel-slider__nav--prev bli-left-arrow"></i>', 
			'<i class="hotel-slider__nav hotel-slider__nav--next bli-right-arrow"></i>'
		],
		pagination: false,
		singleItem : true,
		transitionStyle : "fade",
	});
}