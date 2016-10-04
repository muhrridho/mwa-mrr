function showPopup(id){
	showOverlay();
	$(".popup--show").removeClass("popup--is-show");
	$(".app__overlay").on("click.popup", function(){
		hidePopup();;
	})
	$(id)
		.css({
			top: ($(window).height() / 2) - $(id).outerHeight()/2,
			left: ($(window).width() / 2) - $(id).outerWidth()/2
		})
		.addClass("popup--is-show");
}
function hidePopup() {
	hideOverlay();
	$(".app__overlay").off("click.popup");
	$(".popup").removeClass("popup--is-show");
}

function initPopup() {
	$(".js-popup--show").click(function(e){
		var id = $(this).attr("test-href");
		showPopup(id);
		e.preventDefault();
		return false;
	})
	$(".js-popup--hide").click(function(e){
		hidePopup();
		e.preventDefault();
		return false;
	})
}