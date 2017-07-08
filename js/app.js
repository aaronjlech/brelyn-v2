var hamburger = $("#hamburger");
var mobileMenu = $('#mobile-menu')
hamburger.click(function(){

   $(this).toggleClass('rotate-menu');
   mobileMenu.slideToggle();
})

$('.name-link').click(function(){

    hamburger.toggleClass('rotate-menu');
    mobileMenu.slideToggle();
})

$('#work_view-more').click(function(){
    $('.work_grid_item').toggleClass('hide');
    $(this).hide();
})




