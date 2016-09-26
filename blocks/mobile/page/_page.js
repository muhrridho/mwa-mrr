function showPage(id){
	$(".page__item").not($(id)).addClass("page__item--hidden");
	$(id).removeClass("page__item--hidden");
	// $(id).fadeIn(300, function(){
	// })
}

function initPage(){
	// alert();
}