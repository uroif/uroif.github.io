// Add slideDown animation to Bootstrap dropdown when expanding
$(".dropdown").on("show.bs.dropdown", function() {
  $(this)
    .find(".dropdown-menu")
    .first()
    .stop(true, true)
    .slideDown(300);
});

// Add slideUp animation to Bootstrap dropdown when collapsing
$(".dropdown").on("hide.bs.dropdown", function() {
  $(this)
    .find(".dropdown-menu")
    .first()
    .stop(true, true)
    .slideUp(300);
});

// Add slideshow for items last section
$(document).ready(function() {
  $(".wrap-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: true
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      }
    ]
  });
});

// Click image to show in modal
$('document').ready(function(){
  $('.modal-img-m2,.modal-img-m3').hide()
});
$('.modal-img-s').click(function(){
  $('.modal-img-m').hide();
  $('.modal-img-m'+$(this).attr('target')).show();
});

// Keep navigation when scroll down
$(document).scroll(function(e) {
  var scrollTop = $(document).scrollTop();
  if (scrollTop > 720) {
    $(".back2top").animate({ right: "20px", bottom: "25px", opacity: "1" }, 30);
  } else if (scrollTop > 0) {
    $(".navbar").animate({ height: "45px" }, 30);
    $(".navbar-brand").animate({ "font-size": "1.5rem" }, 30);
    $(".hotline-r").animate({ "font-size": "1.1rem" }, 30);
    $(".back2top").animate({ right: "20px", bottom: "20px", opacity: "0", cursor: "none" }, 200);
  } else {
    $(".navbar").animate({ height: "70px" }, 200);
    $(".navbar-brand").animate({ "font-size": "1.8rem" }, 200);
    $(".hotline-r").animate({ "font-size": "1.2rem" }, 200);
  }
});

// $(document).ready(function() {
//   var item_1 = "#slider-1 .carousel-item";
//   var item_inner_1 = "#slider-1 .carousel-inner";
//   classes = GetUnique(item_1);
//   setcss(classes, item_1, item_inner_1);
// });

// Div fadein when scroll in first time
wow = new WOW({
  duration:     0.5,
  boxClass:     'wow',
  animateClass: 'animated',
  offset:       0,
  mobile:       true,
  live:         true
})
wow.init();

// Animation when click in back2top
$('.back2top').each(function(){
  $(this).click(function(){ 
      $('html,body').animate({ scrollTop: 0 }, 'slow');
      return false; 
  });
});