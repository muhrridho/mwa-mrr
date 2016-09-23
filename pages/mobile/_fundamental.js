$(document).ready(function(){
	// initPanel();
	$("h1").click(function(){
		$(".panel").toggleClass("panel--show");
		$(".app__overlay").toggleClass("app__overlay--show");
	})
})