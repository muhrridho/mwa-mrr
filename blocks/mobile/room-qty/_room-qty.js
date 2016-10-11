function initRoomQty() {
	$(".js-room-qty__open").click(function(){
		showRoomQty();
	})
	$(".js-room-qty__close").click(function(){
		hideRoomQty();
	})
}
function showRoomQty(){
	$(".room-qty__overlay").addClass("room-qty__overlay--is-show");
	$(".room-qty__select").addClass("room-qty__select--is-show");
	$(".app__page").css("overflow-y", "hidden");
}
function hideRoomQty(){
	$(".room-qty__overlay").removeClass("room-qty__overlay--is-show");
	$(".room-qty__select").removeClass("room-qty__select--is-show");
	$(".app__page").css("overflow-y", "auto");
}