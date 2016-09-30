$(document).ready(function(){
	initSidebar();

	$(".js-header__nav--hamburger").click(function(){
		toggleSidebar();
	})
	$(".js-search__ac--open").click(function(){
		showPage("#page-suggestion");
		setTimeout(function() { 
			$(".js-search__ac-trigger").focus(); 
		}, 150);

	})
	$(".js-search__datepicker--open").click(function(){
		showPage("#page-datepicker");
		// Fix an issue on iPhone. Header is not displayed properly
		$(this).blur();
	})

	$(".js-destination__link--domestic").click(function(){
		showPage("#page-domestic");
		return false;
	})
	$(".js-destination__link--international").click(function(){
		showPage("#page-international");
		return false;	
	})

	$('.slider').owlCarousel({
		autoPlay: true,
		autoplayTimeout: 1000,
		singleItem : true,
		transitionStyle : "fade",

	});
})