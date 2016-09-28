function showPage(id){
	$(".page__item").not($(id)).addClass("page__item--hidden");
	$(id).removeClass("page__item--hidden");

	// Fix an issue on iPhone when orientation is landscape. Header is not displayed properly
	$(window).scrollTop(0);
}

function initPage(){
	$(".js-page--show").click(function(e){
		var page = $(this).attr("href");

		// Testing
		var url = "https://htmlpreview.github.io/?https://raw.githubusercontent.com/muhrridho/mwa-mrr/dev/public/index.html";
		var temp = url.replace("https:", "");
		page = page.replace(temp, "");

		console.log(page);
		showPage(page);
		e.preventDefault();
		return false;
	})

	$(".js-show-page__item--default").click(function(){
		showPage(".page__item--default");
		return false;
	})
}