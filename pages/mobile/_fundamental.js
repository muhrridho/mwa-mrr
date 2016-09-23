$(document).ready(function(){
	// initPanel();
	$("p").click(function(){
		$(".panel").toggleClass("panel--show");
		$(".app__overlay").toggleClass("app__overlay--show");
	})
})