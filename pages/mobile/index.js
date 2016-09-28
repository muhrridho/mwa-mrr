$(document).ready(function(){
	initSidebar();
	initPage();

	$(".js-header__nav--hamburger").click(function(){
		toggleSidebar();
	})
	$(".js-search__ac--open").click(function(){
		showPage("#page-suggestion");
		setTimeout(function() { $(".js-search__ac-trigger").focus(); }, 150);

	})
	$(".js-search__datepicker--open").click(function(){
		$(this).blur();
		showPage("#page-datepicker");

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