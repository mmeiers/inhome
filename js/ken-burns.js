$(".slide-image").each(function(){
	var bg = $(this).data("bg");
	var pos = $(this).data("kenburn-start");
	
	$(this).css({
		"background-image":"url("+bg+")",
		"transform-origin": pos
	});
});

$(".kenburn-slider").flexslider({
	slideshow: true,
	slideshowSpeed : 7000,
	animationSpeed : 1000,
	controlNav: false,
});