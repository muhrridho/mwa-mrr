$(document).ready(function(){
	// initPanel();
	$(document).click(function(){
		$(".panel").toggleClass("panel--show");
		$(".app__overlay").toggleClass("app__overlay--show");
	})
})