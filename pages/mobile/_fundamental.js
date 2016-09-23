$(document).ready(function(){
	// initPanel();
	$('body').click(function(){
		$(".panel").toggleClass("panel--show");
		$(".app__overlay").toggleClass("app__overlay--show");
	})
})