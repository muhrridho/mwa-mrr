var panelWidth;

function togglePanel(){
	isPanelOpen() ? hidePanel() : showPanel();
}
function showPanel(){
	$(".page").css('transform', 'translate3d('+ panelWidth +'px, 0, 0)');
	$(".panel__overlay").fadeTo(0, 1).show();

	$('.page').addClass("page--show-panel");
	$(".panel__overlay").addClass("panel__overlay--is-active")
}
function hidePanel(){
	$(".page").css('transform', 'translate3d(0px, 0, 0)');
	$(".panel__overlay").fadeTo(0, 0).hide();

	$('.page').removeClass("page--show-panel");
	$(".panel__overlay").removeClass("panel__overlay--is-active")
}
function isPanelOpen(){
	return $(".page").hasClass("page--show-panel");
}

function initPanel(){
	var isDraggable = false;
	var distance = 0;
	var mouseX = 0;
	panelWidth = $(".panel").width();
	//$(".page").css('transform', 'translate3d(0, 0, 0)');

	$(".page__item").append('<div class="panel__handler js-panel__handler"></div>');
	$(".page__item").append('<div class="panel__overlay"></div>');
	// $("body").append('<div class="panel__overlay"></div>');

	$(".js-panel__handler, .panel")
	.on("touchstart", function(ev) {
		var e = ev.originalEvent;
		isDraggable = true;
		distance = 0;

		// Check whick element are touched
		mouseX = $(this).hasClass("panel") ? panelWidth - e.touches[0].pageX : 0;

		// Disable css transitions
		$('.page').addClass("page--notransition");
	})
	.on("touchmove", function(ev) {
		var e = ev.originalEvent;
		if(isDraggable === false) return;
		distance = e.touches[0].pageX + mouseX;

		// Set maximum & minimum page would slide
		if(distance >= 0 && distance <= panelWidth){
			$(".page").css('transform', 'translate3d('+distance+'px, 0, 0)');

			// Set overlay opacity
			$(".panel__overlay").fadeTo(0, distance/panelWidth);
		}

		$("#status").html("distance:" + distance);
	})
	$(document).on("touchend", function(ev) {
		var e = ev.originalEvent;
		
		if (!isDraggable) return;
		isDraggable = false;

		// Enable css transitions
		$('.page').removeClass("page--notransition");

		if($('.page').hasClass("page--show-panel")){
			distance > panelWidth/6 ? hidePanel() : showPanel();

		} else {
			distance < panelWidth/6 ? hidePanel() : showPanel();
		}

		$("#status").html("mouse up");
	})

	$(".panel__overlay").click(function(){
		hidePanel();
		console.log("triggers");
	})

	$("h1").click(function(){
		togglePanel();
	})
}