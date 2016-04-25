$(function(){
  // // sticky menu
  //
  //   var stickyNavTop = $('.top_nav').offset().top;
  //    var stickyNav = function(){
  //    var scrollTop = $(window).scrollTop();
  //
  //    if (scrollTop > stickyNavTop) {
  //       $('.top_nav').addClass('sticky');
  //    } else {
  //       $('.top_nav').removeClass('sticky');
  //     }
  //    };
  //    stickyNav();
  //
  //    $(window).scroll(function() {
  //       stickyNav();
  //  });
//   $(function() {
//     $("#menu").click(function(e) {
//         $(".top_nav").toggleClass("menuOpen");
//         e.preventDefault();
//     });
// });


  $('.size_chart').on('click', function(){
    if($('.sizes').hasClass('hidden')){
      $('.sizes').removeClass('hidden')
      .stop()
      .fadeIn();
    }else{
      $('.sizes').addClass('hidden')
      .stop()
      .fadeOut();
    }
  });

  $('.delivery_info').on('click', function(){
    if($('.delivery').hasClass('hidden')){
      $('.delivery').removeClass('hidden')
      .stop()
      .fadeIn();
    }else{
      $('.delivery').addClass('hidden')
      .stop()
      .fadeOut();
    }
  });
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

  simpleCart({
    cartColumns: [
        // {view:'image' , attr:"thumb", label: false},
        { attr: "name" , label: "Name" },
        { view: "decrement" , label: false } ,
        { attr: "quantity" , label: "Qty" } ,
        { view: "increment" , label: false  } ,
        { attr: "size", label: "Size" } ,
        // { attr: "price" ,label: "Price", view: 'price:' } ,
        { attr: "total" , label: "SubTotal", view: 'currency' } ,
        { view: "remove" , text: "Remove" , label: false },
    ],
    cartStyle: "table"
});
simpleCart.shipping = function(){
  if( $("#shippingSelect").val() == "PP_pobranie" ){return 10.99;}
  if( $("#shippingSelect").val() == "PP_online" ){return 8.99;}
  if( $("#shippingSelect").val() == "dpd_Pobranie" ){return 19.99;}
  if( $("#shippingSelect").val() == "dpd_online" ){return 12.99;}
};






});
// // test
// $('#button').on('click', function(){
//   $('.hidden').fadeIn('slow');
// });
//
//
// $('.fadein img:gt(0)').hide();
// setInterval(function(){
//   $('.fadein :first-child').fadeOut()
//      .next('img').fadeIn()
//      .end().appendTo('.fadein');},
//   3000);
//
//   $('.fadein').find('img').on('click', function(){
//     $('.hidden').fadeOut('fast');
//   })
//
//   // test
