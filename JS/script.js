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

})



//Carouses
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})