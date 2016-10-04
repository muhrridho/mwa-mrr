function showOverlay(){
	$(".app__overlay").addClass("app__overlay--show");
	$("html, body").css("overflow", "hidden");
}
function hideOverlay(){
	$(".app__overlay").removeClass("app__overlay--show");
	$("html, body").css("overflow", "auto");
}
$(document).ready(function(){
	initPage();
})