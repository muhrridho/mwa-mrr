$(document).ready(function(){
	initSidebar();
	initPage();

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

	$('.slider').owlCarousel({
		autoPlay: true,
		autoplayTimeout: 1000,
		singleItem : true,
		transitionStyle : "fade",

	});
})