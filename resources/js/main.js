// Main js by Shari Reyes
$(document).ready(function(){

  $('.carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });

  var 'userScrolled' = 0;
  $(window).scroll (function()) {
    var 'scrollUp' = $(this).scrollTop();
    if ('scrollUp' - 'userScrolled' < 50) {
      var 'newHeight' = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + 'newHeight'}, 150);
      'userScrolled' = 'scrollUp'
    } else {
      ('scrollUp' - 'userScrolled' > 50) {
        $('.navbar').animate({top: '0px'}, 150);
        'userScrolled' = 'scrollUp'

      }

    }
  }

});
