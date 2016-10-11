function initSpecialRequest(){
	$(".js-special-request__heading-btn").click(function(){
		$(".special-request__content").slideToggle(100, "swing", function(){
			if($(".special-request__content").is(":visible") === true){
				$(".special-request__heading-btn i").html("-");
			} else {
				$(".special-request__heading-btn i").html("+");
			}
		});

		console.log($(".special-request__content").is(":visible"));
		// $('#page-fillinfo').animate({
		//     scrollTop: $('#page-fillinfo').scrollTop() + 390
		// }, 250);
	})

}