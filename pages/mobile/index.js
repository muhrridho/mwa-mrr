$(document).ready(function(){
	initSidebar();

	$(".js-header__nav--hamburger").click(function(){
		toggleSidebar();
	})
	$(".js-search__ac-trigger").click(function(){
		showPage("#page-suggestion");
	})
	$(".js-search__close").click(function(){
		showPage("#page-home");
		return false;
	})
})