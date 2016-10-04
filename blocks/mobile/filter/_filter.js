function initMoreButton(){
	$('.js-filter__more-btn').click(function(){
		$(this).parent().find('.filter__group--is-hideable').toggleClass('filter__group--is-show');
		$(this).find('span').toggle();
	})	
}
function initSlider(){
	var connectSlider = document.getElementById('js-filter__price-slider');

	noUiSlider.create(connectSlider, {
		start: [0, 15000000],
		step: 15000000 / 5,
		connect: false,
		range: {
			'min': 0,
			'max': 15000000
		}
	});
	var connectBar = document.createElement('div');
	var connectBase = connectSlider.querySelector('.noUi-base');

	connectBar.className += 'connect';
	connectBase.appendChild(connectBar);
	connectSlider.noUiSlider.on('update', function (values, handle, a, b, handlePositions) {
		var offset = handlePositions[handle];
		var value = parseInt(values[handle]);
		if (handle === 0) {
			// if (currencyPriceFormat) {
			//     $("#price-start").val(currencyPriceFormat(value));
			// } else {
			//     $("#price-end").val("Rp " + value);
			// }
		} else if (handle === 1) {
			offset = 100 - offset;
			// if (currencyPriceFormat) {
			//     $("#price-start").val(currencyPriceFormat(value));
			// } else {
			//     $("#price-end").val("Rp " + value);
			// }
		}
		connectBar.style[handle ? 'right' : 'left'] = offset + '%';
	});
	connectSlider.noUiSlider.on('end', function(values){
		// $("#filter-pf").val(parseInt(values[0])).trigger('input');
		// $("#filter-pt").val(parseInt(values[1])).trigger('input');
	})
}