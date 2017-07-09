var hamburger = $("#hamburger");
var mobileMenu = $('#mobile-menu')
hamburger.click(function(){

   $(this).toggleClass('rotate-menu');
   mobileMenu.slideToggle();
})

$('.name-link').click(function(e){
   var offsetVal = 0;
   var attr = $(this).attr('href');
    hamburger.toggleClass('rotate-menu');
    mobileMenu.slideToggle();

    e.preventDefault();

    $("body, html").animate({
        scrollTop: $( attr ).offset().top -90
    }, 400);

})

$('#work_view-more').click(function(){

    $('.work_grid_item').removeClass('hide');
    $(this).hide();
})
