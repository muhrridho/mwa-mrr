var sidebarWidth;

function toggleSidebar(){
	$(".sidebar").hasClass("sidebar--open") ? hideSidebar() : showSidebar();
}
function showSidebar(){
	$(".sidebar").addClass("sidebar--open")
	$(".app__overlay").addClass("app__overlay--show app__overlay--sidebar-open");
	$(".page").addClass("page--sidebar-open");
	$("html, body").css("overflow", "hidden");
}
function hideSidebar(){
	$(".sidebar").removeClass("sidebar--open")
	$(".app__overlay").removeClass("app__overlay--show app__overlay--sidebar-open");
	$(".page").removeClass("page--sidebar-open");
	$("html, body").css("overflow", "auto");
}
function isSidebarOpen(){
	return $(".sidebar").hasClass("sidebar--open");
}

function initSidebar(){
	sidebarWidth = $(".sidebar").width();

	$(".app__overlay").click(function(){
		hideSidebar();
	})

}