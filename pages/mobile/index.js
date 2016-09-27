$(document).ready(function(){
	initSidebar();

	$(".js-header__nav--hamburger").click(function(){
		toggleSidebar();
	})
	$(".js-search__ac-open").click(function(){
		
		showPage("#page-suggestion");

		setTimeout(function() { $(".js-search__ac-trigger").focus(); }, 250);

	})
	$(".js-search__close").click(function(){
		showPage("#page-home");
		return false;
	})
	$('.slider').owlCarousel({
		autoPlay: true,
		autoplayTimeout: 1000,
		singleItem : true,
		transitionStyle : "fade",

	});

	// //  Let's say we want to use $.getScript to load our scripts for some reason
	// var scripts = [
	// 	'http://stephband.info/jquery.event.move/js/jquery.event.move.js',
	// 	'http://stephband.info/jquery.event.swipe/js/jquery.event.swipe.js'
	// ];

	// $.getScript(scripts[0]);

	// //  Once our script is loaded, we can initSwipe to add swipe support
	// $.getScript(scripts[1], function() {
	// 	$('.slider').unslider('initSwipe');
	// });
})