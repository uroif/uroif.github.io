// Add slideDown animation to Bootstrap dropdown when expanding.
$(".dropdown").on("show.bs.dropdown", function() {
  $(this)
    .find(".dropdown-menu")
    .first()
    .stop(true, true)
    .slideDown(300);
});

// Add slideUp animation to Bootstrap dropdown when collapsing.
$(".dropdown").on("hide.bs.dropdown", function() {
  $(this)
    .find(".dropdown-menu")
    .first()
    .stop(true, true)
    .slideUp(300);
});

// Add slideshow for items last section
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

// Slider for modal
$('.modal-slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  autoplay: true,
  asNavFor: '.modal-slider-nav',
});
$('.modal-slider-nav').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: '.modal-slider-for',
  dots: false,
  centerMode: true,
  autoplay: true,
  focusOnSelect: true
});

// Keep navigation when scroll down
$(document).scroll(function(e) {
  var scrollTop = $(document).scrollTop();
  if (scrollTop > 0) {
    console.log(scrollTop);
    $(".navbar").animate({ height: "55px" }, 30);
    $(".navbar-brand").animate({ "font-size": "1.5rem" }, 30);
    $(".hotline-r").animate({ "font-size": "1.1rem" }, 30);
    $(".back2top").animate({ right: "20px", bottom: "25px", opacity: "1" }, 30);
  } else {
    $(".navbar").animate({ height: "70px" }, 200);
    $(".navbar-brand").animate({ "font-size": "1.8rem" }, 200);
    $(".hotline-r").animate({ "font-size": "1.2rem" }, 200);
    $(".back2top").animate(
      { right: "20px", bottom: "20px", opacity: "0", cursor: "none" },
      200
    );
  }
});

$(document).ready(function() {
  var item_1 = "#slider-1 .carousel-item";
  var item_inner_1 = "#slider-1 .carousel-inner";
  classes = GetUnique(item_1);
  setcss(classes, item_1, item_inner_1);
});
