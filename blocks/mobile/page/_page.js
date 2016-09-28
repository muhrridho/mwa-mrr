function showPage(id){
	$(".page__item").not($(id)).addClass("page__item--hidden");
	$(id).removeClass("page__item--hidden");
	// Fix an issue on iPhone when orientation is landscape. Header is not displayed properly
	$(window).scrollTop(0);
}

function initPage(){
	// alert();

	$(".js-show-page__item--default").click(function(){
		showPage(".page__item--default");
		return false;
	})
}