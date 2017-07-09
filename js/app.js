var hamburger = $("#hamburger");
var mobileMenu = $('#mobile-menu')
hamburger.click(function(){

   $(this).toggleClass('rotate-menu');
   mobileMenu.slideToggle();
})

$('.name-link').click(function(e){
   var offsetVal = -50;
   var attr = $(this).attr('href');
   if(attr === '#about-mobile') {
      console.log('wath');
      offsetVal =  -60;
   }
    hamburger.toggleClass('rotate-menu');
    mobileMenu.slideToggle();

    e.preventDefault();

    $("body, html").animate({
        scrollTop: $( attr ).offset().top + offsetVal
    }, 800);

})

$('#work_view-more').click(function(){

    $('.work_grid_item').removeClass('hide');
    $(this).hide();
})
