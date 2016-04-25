$(function(){
  simpleCart({
    checkout: {
      type: "PayPal",
      email: "karol.iwanicki@gmail.com",
    },
    option1:'value',
    option2:'value2',
    currency: "PLN"
  });
  simpleCart({
       shippingFlatRate: 10
  });

  // sticky menu

    var stickyNavTop = $('.top_nav').offset().top;
     var stickyNav = function(){
     var scrollTop = $(window).scrollTop();

     if (scrollTop > stickyNavTop) {
        $('.top_nav').addClass('sticky');
     } else {
        $('.top_nav').removeClass('sticky');
      }
     };
     stickyNav();

     $(window).scroll(function() {
        stickyNav();
   });






 });
//
//
// // slider top
//
// $(".rslides").responsiveSlides();
//
//
// });
// // // test
// // $('#button').on('click', function(){
// //   $('.hidden').fadeIn('slow');
// // });
// //
// //
// // $('.fadein img:gt(0)').hide();
// // setInterval(function(){
// //   $('.fadein :first-child').fadeOut()
// //      .next('img').fadeIn()
// //      .end().appendTo('.fadein');},
// //   3000);
// //
// //   $('.fadein').find('img').on('click', function(){
// //     $('.hidden').fadeOut('fast');
// //   })
// //
// //   // test
