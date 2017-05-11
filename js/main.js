// var stickyNavOffset = $('.sticky-nav-wrapper').offset().top;

// $(window).on('scroll', function () {
// 	var distanceScrolled = $(window).scrollTop();

// 	console.log('The distance from the top of the page to the nav is: ' + stickyNavOffset);
// 	console.log('The distance scrolled is: ' + distanceScrolled);

    
// var backgroundOffset = $('.bread').offset().top;

// $(window).on('scroll', function () {
// 	var distanceScrolled = $(window).scrollTop();

// 	console.log('The distance from the top of the page to the first background is: ' + backgroundOffset);
// 	console.log('The distance scrolled is: ' + distanceScrolled);

//     if (distanceScrolled > backgroundOffset) {
// 		$('.bread').addClass('scrolled');
// 	} else {
// 		$('.bread').removeClass('scrolled');
// 	}

// });

console.log('hello');

$(document).ready(function() {
	$('#fullpage').fullpage({
        anchors:['slide1', 'slide2', 'slide3', 'slide4', 'slide5', 'slide6', 'slide7','slide8']
    });
});






// $(document).scroll(function() {
//   	$('#words').each(function(){
//   	var imagePos = $(this).offset().top;

//   	var topOfWindow = $(document).scrollTop();
//   		if (imagePos < topOfWindow+400) {
//   			$(this).addClass("animated slideInDown");
//   		}
//   	});
// });
