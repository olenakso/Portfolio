
    
/* слайдер */

   $(function() {
    
       $("#slider1").responsiveSlides({
        auto: true,
        pager: true,
        nav: true,
        speed: 300,
        maxwidth: 1000,
        namespace: "centered-btns"
      });
 
   });

/* прокрутка */
   $('#toTop').on('click', function()  {
    $('html,body').animate({
        scrollTop: 0
    },500);
});

window.onscroll = function up(){
    if (window.pageYOffset>"200"){
        $('#toTop').css("display","block")
}else{
    $('#toTop').hide(500);/* css("display","none") */
}

}


/* mobile menu */


$(".mobile-menu").click(function() {
    $(".mobile-header-menu").toggleClass("show");
}) 


    $(".sub-display").click(function (e) {
        if ($(e.target).closest('li').hasClass('sub-display')) {
            e.stopPropagation();
            e.preventDefault();
        }
        $('.sub-display > .mobile-sub-menu').not($(this).children(".mobile-sub-menu").toggle()).hide();
    });
