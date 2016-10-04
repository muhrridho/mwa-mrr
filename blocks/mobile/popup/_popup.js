function showPopup(id){
	$(id).css({
		top: ($(window).height() / 2) - $(id).outerHeight()/2,
		left: ($(window).width() / 2) - $(id).outerWidth()/2
	})
}

function initPopup() {
	$(".js-popup--show").click(function(){
		var id = $(this).attr("test-href");
		showPage(id);
	})
}