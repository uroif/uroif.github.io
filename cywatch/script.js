// SlideDown animation to Bootstrap dropdown when expanding
$(".dropdown").on("show.bs.dropdown", function() {
  $(this)
    .find(".dropdown-menu")
    .first()
    .stop(true, true)
    .slideDown(300);
});

// SlideUp animation to Bootstrap dropdown when collapsing
$(".dropdown").on("hide.bs.dropdown", function() {
  $(this)
    .find(".dropdown-menu")
    .first()
    .stop(true, true)
    .slideUp(300);
});

// Hover item to Bootstrap dropdown
$('ul.navbar-nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(300);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(300);
});

// Slideshow for promotions
$(".promotion").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
  fade: true,
  easing: 'linear',
  nextArrow: '<i class="fa fa-chevron-circle-right"></i>',
  prevArrow: '<i class="fa fa-chevron-circle-left"></i>',
  pauseOnFocus: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {

      }
    }
  ]
});

// Slideshow for items
$(document).ready(function() {
  $(".wrap-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    pauseOnFocus: true,
    nextArrow: '<i class="fa fa-angle-right"></i>',
    prevArrow: '<i class="fa fa-angle-left"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          dots: true
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      }
    ]
  });
});

// Click image to show in modal
$("document").ready(function() {
  $(".modal-img-m2,.modal-img-m3").hide();
});
$(".modal-img-s").click(function() {
  $(".modal-img-m").hide();
  $(".modal-img-m" + $(this).attr("target")).show();
});

// Keep navigation when scroll down
$(document).scroll(function(e) {
  var scrollTop = $(document).scrollTop();
  if (scrollTop > 720) {
    $(".back2top").animate({ right: "20px", bottom: "25px", opacity: "1" }, 30);
  } else if (scrollTop > 0) {
    $("header").animate(
      { "box-shadow": "0px 2px 15px 0px rgba(0,0,0,0.5)" },
      0
    );
    // $(".navbar-brand").animate({ "font-size": "1.5rem" }, 30);
    $("header").animate({ "background-color": "red" }, 30);
    $(".back2top").animate(
      { right: "20px", bottom: "20px", opacity: "0", cursor: "none" },
      200
    );
  } else {
    $("header").animate({ "box-shadow": "0px 2px 15px 0px rgba(0,0,0,0)" }, 0);
    // $(".navbar-brand").animate({ "font-size": "1.8rem" }, 200);
    $("header").animate({ "background-color": "#FFFFFF" }, 30);
  }
});

// Div fadein when scroll in first time
wow = new WOW({
  duration: 0.5,
  boxClass: "wow",
  animateClass: "animated",
  offset: 0,
  mobile: true,
  live: true
});
wow.init();

// Animation when click in back2top
$(".back2top").each(function() {
  $(this).click(function() {
    $("html,body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});
