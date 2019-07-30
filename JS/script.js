//Background image change
$(document).ready(function () {
  $('#slides').superslides({
    animation: 'fade',
    play: 5000,
    pagination: false
  });

  // Typing heading
  var typingElement = document.querySelector('.typed');
  var typed = new Typed(typingElement, {
    strings: ['Junior Front-End Developer'],
    typeSpeed: 70,
    startDelay: 500,
    showCursor: false
  });

  //Carouses
  $('.owl-carousel').owlCarousel({
    loop: true,
    items: 4,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      938: {
        items: 4
      }
    }
  });


  // Easy PieChart


  var skillTopOffset = $('.skill-section').offset().top;


  $(window).scroll(function () {
    if (window.pageYOffset > skillTopOffset - $(window).height() + 200) {
      $('.chart').easyPieChart({
        easing: 'easyInOut',
        barColor: '#fff',
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function (from, to, percent) {
          $(this.el).find('.percent').text(Math.round(percent))
        }
      })
    }
  });
})


