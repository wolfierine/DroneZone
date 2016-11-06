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


	$(document).on("scroll", function(){
		var
		icon_list = $(".icon-list"), 
		icon_list_poz = icon_list.offset().top - $(window).height()/2,
		wScroll = $(document).scrollTop();
		// console.log(icon_list_poz + " and " + wScroll);
		if(wScroll>icon_list_poz){
			icon_list.addClass("active");
		}else{
			icon_list.removeClass("active");
		}
	});



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