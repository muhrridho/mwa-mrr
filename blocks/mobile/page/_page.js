function showPage(id){
	$(".page__item").not($(id)).addClass("page__item--hidden");
	$(id).removeClass("page__item--hidden");
	// $(id).fadeIn(300, function(){
	// })
}

function initPage(){
	// alert();

	$(".js-show-page__item--default").click(function(){
		showPage(".page__item--default");
		return false;
	})
}