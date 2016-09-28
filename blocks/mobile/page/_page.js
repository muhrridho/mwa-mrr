function showPage(id){
	$(".page__item").not($(id)).addClass("page__item--hidden");
	$(id).removeClass("page__item--hidden");
	
	// Fix an issue on iPhone when orientation is landscape. Header is not displayed properly
	$(window).scrollTop(0);
}

function initPage(){
	$(".js-page--show").click(function(){
		var page = $(this).attr("href");
		showPage(page);
		return false;
	})

	$(".js-show-page__item--default").click(function(){
		showPage(".page__item--default");
		return false;
	})
}