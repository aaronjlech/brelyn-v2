var hamburger = $("#hamburger");
var mobileMenu = $('#mobile-menu')
hamburger.click(function(){
   var windowWidth = $(window).width();
   if(windowWidth > 760) {
      $('#menu').animate({width: 'toggle'}, 350);
      $(this).toggleClass('rotate-menu');

   } else {
      $(this).toggleClass('rotate-menu');
      mobileMenu.slideToggle();
   }

})

$('.name-link').click(function(e){
   var offsetVal = -50;
   var menuType = $(this).data().name;
   var attr = $(this).attr('href');
   if(menuType === 'mobile'){
      mobileMenu.slideToggle();
      hamburger.toggleClass('rotate-menu');

   }
   if(attr === '#about-mobile') {
      console.log('wath');
      offsetVal =  -60;
   }
    e.preventDefault();

    $("body, html").animate({
        scrollTop: $( attr ).offset().top + offsetVal
    }, 800);

})



$('#work_view-more').click(function(){
    $('.work_grid_item').removeClass('hide');
    $(this).hide();
})
