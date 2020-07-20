/*-----------------------------------------------------------------------------------

  Template Name: Simply Construction HTML Template.
  Template URI: #
  Description: Simply Construction is a unique website template designed in HTML with a simple & beautiful look. There is an excellent solution for creating clean, wonderful and trending material design corporate, corporate any other purposes websites.
  Author: DevItems
  Version: 1.0

-----------------------------------------------------------------------------------*/

/*-------------------------------
[  Table of contents  ]
---------------------------------
  01. jQuery MeanMenu
  02. wow js active
  04. Sticky Header
  05. ScrollUp
  08. CounterUp
  16. ScrollReveal Js Init
  17. Magnific Popup




/*--------------------------------
[ End table content ]
-----------------------------------*/

const appVue = new Vue({
  el: '#root',
  data: {
    local: "vi",
    facts: {
      "SẢN PHẨM": 200,
      "KHÁCH HÀNG": 300
    },
    blog: {
      latest: [
        {
          id: "",
          image: "images/blog/blog-img/1.jpg",
          title: "Lorem ipsum dolor sit amet, cotur adipiscing elit, sed do eiusmod"
        },
        {
          id: "",
          image: "images/blog/blog-img/2.jpg",
          title: "Lorem ipsum dolor sit amet, cotur adipiscing elit, sed do eiusmod"
        },
        {
          id: "",
          image: "images/blog/blog-img/3.jpg",
          title: "Lorem ipsum dolor sit amet, cotur adipiscing elit, sed do eiusmod"
        }
      ],
      allBlogs: [
        {
          id: "",
          image: "images/blog/blog-img/3.jpg",
          title: "Lorem ipsum dolor sit amet, cotur adipiscing elit, sed do eiusmod"
        }
      ]
    },
    product: {
      latest: [
        {
          id: "",
          image: "images/lst-project-3/2.jpg",
          name: "Máy xúc doosan",
          code: "12345",
          origin: "Hàn Quốc"
        },
        {
          id: "",
          image: "images/lst-project-3/3.jpg",
          name: "Máy xúc doosan",
          code: "12345",
          origin: "Hàn Quốc"
        },
        {
          id: "",
          image: "images/lst-project-3/4.jpg",
          name: "Máy xúc doosan",
          code: "12345",
          origin: "Hàn Quốc"
        },
        {
          id: "",
          image: "images/lst-project-3/5.jpg",
          name: "Máy xúc doosan",
          code: "12345",
          origin: "Hàn Quốc"
        }
      ],
      allProducts: [
        {
          id: "",
          image: "images/lst-project-3/2.jpg",
          name: "Máy xúc doosan",
          code: "12345",
          origin: "Hàn Quốc"
        },
        {
          id: "",
          image: "images/lst-project-3/3.jpg",
          name: "Máy xúc doosan",
          code: "12345",
          origin: "Hàn Quốc"
        },
      ]
    },
    instagram: [
      "images/blog/sm-img/1.jpg",
      "images/blog/sm-img/2.jpg",
      "images/blog/sm-img/3.jpg",
      "images/blog/sm-img/4.jpg",
      "images/blog/sm-img/5.jpg",
      "images/blog/sm-img/6.jpg"
    ]
  },
  methods: {
    ilang(reference) {
      return ilang(reference, this.local)
    }
  },
  mounted() {
    new WOW().init();
  }
})

/*-------------------------------------------
  01. jQuery MeanMenu
--------------------------------------------- */
    
$('.mobile-menu nav').meanmenu({
    meanMenuContainer: '.mobile-menu-area',
    meanScreenWidth: "991",
    meanRevealPosition: "right",
});

/*-------------------------------------------
  04. Sticky Header
--------------------------------------------- */ 

  $(window).on('scroll',function() {    
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
    $("#sticky-header-with-topbar").removeClass("scroll-header");
    }else{
    $("#sticky-header-with-topbar").addClass("scroll-header");
    }
  });


/*--------------------------
  05. ScrollUp
---------------------------- */

  $.scrollUp({
    scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
  });

/*-----------------------------
  08. CounterUp
-----------------------------*/

  $('.count').counterUp({
    delay: 60,
    time: 3000
  });

/*-----------------------------------------------
  15. Home Slider
-------------------------------------------------*/

  if ($('.slider__activation__wrap').length) {
    $('.slider__activation__wrap').owlCarousel({
      loop: true,
      margin:0,
      nav:true,
      autoplay: false,
      navText: [ '<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>' ],
      autoplayTimeout: 10000,
      items:1,
      dots: false,
      lazyLoad: true,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:1
        }
      }
    });
  }

/*-----------------------------------
  16. ScrollReveal Js Init
-------------------------------------- */

  window.sr = ScrollReveal({ duration: 800 , reset: false });
    sr.reveal('.foo');
    sr.reveal('.bar');

/*--------------------------------
  17. Magnific Popup
----------------------------------*/

$('.video-popup').magnificPopup({
  type: 'iframe',
  mainClass: 'mfp-fade',
  removalDelay: 160,
  preloader: false,
  zoom: {
      enabled: true,
  }
});

$('.image-popup').magnificPopup({
  type: 'image',
  mainClass: 'mfp-fade',
  removalDelay: 100,
  gallery:{
      enabled:true, 
  }
});




