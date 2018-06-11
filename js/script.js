 $(document).ready(function () {
     $('.menu__button').click(function () {

         $('.menu').addClass("menu-mobile_visible", 200, "easeOutSine");
         $('.menu-mobile_wrapper').addClass("wrapper-mobile_bg", 250, "easeOutSine");

     });
     $('.home').click(function () {
         $('.menu').removeClass("wrapper-mobile_bg");
         $('.menu').removeClass("menu-mobile_visible", 200, "easeOutSine");


     });

     $('.menu-mobile_closing').click(function () {
         $('.menu-mobile_wrapper').removeClass("wrapper-mobile_bg");
         $('.menu-mobile_wrapper').removeClass("menu-mobile_visible", 200, "easeOutSine");

     });

 });