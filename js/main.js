$(document).ready(function(){

	var hamburger = $(".menu-icon"),
		link = $(".page-nav a");

	hamburger.on("click", function(){
		$(this).toggleClass("active");
	});

	link.on("click", function(){
		link.removeClass("active");
		$(this).addClass("active");
		hamburger.removeClass("active");
	})

	smoothScroll();

});


function smoothScroll(){
	$(".page-nav a").click(function(e){
		e.preventDefault();
		var target = $(this).data("target");
		
		$("html body").animate({
			scrollTop: $("#" + target).offset().top}, 1000);
	});
}	