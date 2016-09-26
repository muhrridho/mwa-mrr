var panelWidth;

function togglePanel(){
	$(".panel").hasClass("panel--show") ? hidePanel() : showPanel();
}
function showPanel(){
	$(".panel").addClass("panel--show")
	$(".app__overlay").addClass("app__overlay--show");
}
function hidePanel(){
	$(".panel").removeClass("panel--show")
	$(".app__overlay").removeClass("app__overlay--show");
}
function isPanelOpen(){
	return $(".panel").hasClass("panel--show");
}

function initPanel(){
	panelWidth = $(".panel").width();

	$(".app__overlay").click(function(){
		hidePanel();
	})

}