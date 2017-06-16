setTimeout(function(){
	$("#slide1").css('opacity', '1');
},800);

setInterval(function(){
	$(".button").toggleClass("opacity");
},1000);
//Navigation
$(".mobile_nav").click(function() {
	$(".mobile_nav_menu").animate({right: 0});
})
$(".mobile_close").click(function() {
	$(".mobile_nav_menu").animate({right: -270});
})
