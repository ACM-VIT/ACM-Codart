// var prev_scroll=0;
// var cur_rotate=0;
// var dart=$("#dartboard");
// function scrolled(){
// 	console.log("s");
// 	var cur_scroll=$(document).scrollTop();
// 	if(cur_scroll>prev_scroll+5){
// 		//user is scrolling down
// 		cur_rotate+=20;
// 		var degree=cur_rotate;
// 		dart.css({
// 			'-webkit-transform': 'rotate(' + degree + 'deg)',
// 			'-moz-transform': 'rotate(' + degree + 'deg)',
// 			'-ms-transform': 'rotate(' + degree + 'deg)',
// 			'-o-transform': 'rotate(' + degree + 'deg)',
// 			'transform': 'rotate(' + degree + 'deg)',
// 			'zoom': 1
// 		});
// 	}
// 	if(cur_scroll<prev_scroll-5){
// 		//user is scrolling down
// 		cur_rotate-=20;
// 		var degree=cur_rotate;
// 		dart.css({
// 			'-webkit-transform': 'rotate(' + degree + 'deg)',
// 			'-moz-transform': 'rotate(' + degree + 'deg)',
// 			'-ms-transform': 'rotate(' + degree + 'deg)',
// 			'-o-transform': 'rotate(' + degree + 'deg)',
// 			'transform': 'rotate(' + degree + 'deg)',
// 			'zoom': 1
// 		});
// 	}
// 	prev_scroll=cur_scroll;
// }

// var see_rotate=setInterval(scrolled,100);
var theta;
$(window).scroll(function() {
	theta = $(window).scrollTop() / 60 ;
	$('#dartboard').css({ transform: 'rotate(' + theta + 'rad)' });
});
$("#dartboard").click(function(){
	theta+=2*3.15;
	$(this).css({ transform: 'rotate(' + theta + 'rad)' });
});

$(window).scroll(function() {
	theta = $(window).scrollTop() / 60 ;
	$('#dartboard1').css({ transform: 'rotate(' + theta + 'rad)' });
});
$("#dartboard1").click(function(){
	theta+=2*3.15;
	$(this).css({ transform: 'rotate(' + theta + 'rad)' });
});