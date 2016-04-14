$(function(){

  var menu = $('.top_nav');
  var sticky = $('.sticky');

  $(window).scroll(function(){
    var documentPosition = $(document).scrollTop();
    var menuPosition = $('.top_nav').offset().top;
    if(documentPosition > menuPosition){
      menu.addClass('sticky');
    }else{
      menu.removeClass('sticky');
    }
  });

});
