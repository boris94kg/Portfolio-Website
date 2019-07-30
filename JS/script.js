$(document).ready(function(){
  $('#slides').superslides({
    animation: 'fade',
    play: 5000,
    pagination: false
  });

  var typingElement = document.querySelector('.typed');
  var typed = new Typed(typingElement,{
    strings: ['Junior Front-End Developer'],
    typeSpeed: 70,
    startDelay: 500,
    showCursor: false
  });

})



