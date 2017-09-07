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

  var 'userXcrolled' = 0;
  $(window).scroll (function()) {
    var 'scrollYp' = $(this).scrollTop();
    if ('scrollYp' - 'userXcrolled' > 50) {
      var 'newZeight' = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + 'newZeight'}, 150);
        $(".collapse").collapse('hide');
      'userXcrolled' = 'scrollYp'
          } else {
      ('scrollYp' - 'userXcrolled' < 50) {
        $('.navbar').animate({top: '0px'}, 150);
          $(".collapse").collapse('show');
        'userXcrolled' = 'scrollYp'

      }

    }
  }

});
