$(document).ready(function() {
	$(".header").css("height", $(window).height());

	//-- Popup initialization --
	$(".popup").magnificPopup({type:'image'});
	$(".popup_content").magnificPopup({
		type: 'inline',
		midClick: 'click'
	});


	//-- Mixitup initialization for Projects
	//-- (always before categories activation)
	$("#portfolio_grid").mixItUp();

	//-- Projects categories activation --
	$(".s-projects li").click(function() {
		$(".s-projects li").removeClass("active");
		$(this).addClass("active");
	});

});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	margin: 30,
  	items: 3,
  	loop: true,							
		smartSpeed: 700,				
		nav: true,							
		navText: ['<i class="fas fa-chevron-circle-left"></i>', '<i class="fas fa-chevron-circle-right"></i>'],
		responsiveClass: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			992: {		
				items: 2
			},
			1100: {		
				items: 3
			}
		}
  });
});

//-- Preloader --
$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
});

//-- Hamburger animation via "is-active" class --
$(".hamburger").click(function() {
	$(".hamburger").toggleClass("is-active");
});

//-- Hamburger menu animation --
$(".topline_menu ul a").click(function() {
	$(".topline_menu").fadeOut(600);
	$(".hamburger").toggleClass("is-active");
	$(".top_form").css("opacity", "1");
	$(".topline_menu li a").removeClass("fadeInUp animated");
}).append("<span>");

//-- add/remove opacity to top_form --
$(".hamburger").click(function() {
	if($(".topline_menu").is(":visible")) {
		$(".top_form").css("opacity", "1");
		$(".topline_menu").fadeOut(600);
	} else {
		$(".top_form").css("opacity", ".1");
		$(".topline_menu").fadeIn(600);
		$(".topline_menu li a").addClass("fadeInUp animated");
	}
});
