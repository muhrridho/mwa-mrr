var panelWidth;

function togglePanel(){
	$(".panel").hasClass("panel--show") ? hidePanel() : showPanel();
}
function showPanel(){
	$(".panel")
		.addClass("panel--show")
		.css('left', 0);
	$(".app__overlay").addClass("app__overlay--show");
}
function hidePanel(){
	$(".panel")
		.removeClass("panel--show")
		.css('left', -1 * panelWidth);

	$(".app__overlay").removeClass("app__overlay--show");
}
function isPanelOpen(){
	return $(".panel").hasClass("panel--show");
}

function initPanel(){
	var isDraggable = false;
	var isTouchOnly;
	var distance = 0;
	var mouseX = 0;
	var element = null;

	panelWidth = $(".panel").width();

	// $(".page__item").append('<div class="panel__handler js-panel__handler"></div>');

	$(".app__overlay").click(function(){
		hidePanel();
	})

	$("h1").click(function(){
		togglePanel();
	})
}