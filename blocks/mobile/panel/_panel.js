var panelWidth;

function togglePanel(){
	$(".panel").hasClass("panel--show") ? hidePanel() : showPanel();
}
function showPanel(){
	$(".panel")
		.addClass("panel--show")
		.css('margin-left', panelWidth);
	$(".app__overlay").addClass("app__overlay--show");
}
function hidePanel(){
	$(".panel")
		.removeClass("panel--show")
		.css('margin-left', 0);

	$(".app__overlay").removeClass("app__overlay--show");
}
function isPanelOpen(){
	return $(".page").hasClass("page--show-panel");
}

function initPanel(){
	var isDraggable = false;
	var isTouchOnly;
	var distance = 0;
	var mouseX = 0;
	var element = null;

	panelWidth = $(".panel").width();
	//$(".page").css('transform', 'translate3d(0, 0, 0)');

	$(".page__item").append('<div class="panel__handler js-panel__handler"></div>');
	// $(".page__item").append('<div class="panel__overlay"></div>');
	// $("body").append('<div class="panel__overlay"></div>');

	// $(".js-panel__handler, .panel, .panel__overlay")
	// .on("touchstart", function(ev) {
	// 	var e = ev.originalEvent;
	// 	isDraggable = true;
	// 	isTouchOnly = true;

	// 	distance = 0;
	// 	element = $(this);

	// 	// Check whick element are touched & and calculate based on it
	// 	mouseX = $(this).hasClass("panel") ? panelWidth - e.touches[0].pageX : 
	// 		$(this).hasClass("panel__overlay") ? panelWidth - e.touches[0].pageX : 0;

	// 	// Disable css transitions
	// 	$('.page').addClass("page--notransition");
	// })
	// .on("touchmove", function(ev) {
	// 	var e = ev.originalEvent;
	// 	if(isDraggable === false) return;
	// 	distance = mouseX + e.touches[0].pageX;
	// 	isTouchOnly = false;

	// 	$(".test-fixed").html(distance);

	// 	// Set maximum & minimum page would slide
	// 	if(distance >= 0 && distance <= panelWidth){
	// 		// $(".page").css('transform', 'translate3d('+distance+'px, 0, 0)');
	// 		// $(".panel").css('left', (-1 * panelWidth) + distance);
	// 		$(".panel").css('margin-left', distance);
	// 		$(".panel").addClass('panel--notransitions');

	// 		// Set overlay opacity
	// 		$(".app__overlay").addClass("app__overlay--show");
	// 		$(".app__overlay").fadeTo(0, distance/panelWidth);
	// 	}

	// 	$("#status").html("distance:" + distance);
	// })
	// $(document).on("touchend", function(ev) {
	// 	var e = ev.originalEvent;
		
	// 	if (!isDraggable) return;
	// 	isDraggable = false;

	// 	// Enable css transitions
	// 	$(".panel").removeClass('panel--notransitions');

	// 	// if($('.panel').hasClass("panel--show")){
	// 	// 	// Set the distance back to "normal" if element touched is not js-panel__handler
	// 	// 	if(!element.hasClass('js-panel__handler')) distance = panelWidth - distance;

	// 	// 	// Fixes problem when only touch (not dragging) panel will closes the panel.
	// 	// 	if(!element.hasClass("panel__overlay") && isTouchOnly) return;

	// 	// 	distance > panelWidth/6 ? hidePanel() : showPanel();
	// 	// } else {
	// 	// 	distance < panelWidth/6 ? hidePanel() : showPanel();
	// 	// }

	// 	$("#status").html("mouse up");
	// })

	$(".panel__overlay").click(function(){
		hidePanel();
		console.log("triggers");
	})

	$("h1").click(function(){
		togglePanel();
	})
}