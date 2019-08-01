// Preloader

$(window).on('load', function(){
  $('.preloader .inner-preloader').fadeOut(600, function(){
    $('.preloader ').fadeOut(750);
  })

  $('.items').isotope({
    filter: '*',
    animationOptions:{
      duration: 1500,
      easing: 'linear',
      queue: false
    }
  })
})


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
  var statsTopOffSet = $('.stats-section').offset().top;
  var countFinish = false;

// Functionality for circles
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

    if (!countFinish && window.pageYOffset > statsTopOffSet - $(window).height() + 200){
      $('.counter').each(function(){
        var element = $(this);
        var endVal = Number.parseInt(element.text());
    
        element.countup(endVal);

      })
      countFinish = true;
    }
  });

$('[data-fancybox]').fancybox();


// Changing active class in portfolio section
$('#filters a').click(function(){
    $('#filters .current').removeClass('current');
    $(this).addClass('current');

    var selector = $(this).attr('data-filter');

    $('.items').isotope({
      filter: selector,
      animationOptions:{
        duration: 1500,
        easing: 'linear',
        queue: false
      }
    });

    return false;

});

// Smooth Scrolling
$('#navigation li a').click(function(e){
  e.preventDefault();

  var element = $(this).attr('href');
  var position = $(element).offset().top;
  $('html, body').animate({
    scrollTop: position - 50
  }, "slow")
});

// Sticky navigation
const nav = $('#navigation');
const navTop = nav.offset().top;

$(window).on('scroll', stickyNavigation);

function stickyNavigation(){
  var body = $('body');

  if($(window).scrollTop() >= navTop){
    body.css("padding-top", nav.outerHeight() + 'px');
    body.addClass('fixedNav')
  }else{
    body.removeClass('fixedNav');
    body.css("padding-top", 0);
  }
}
})
 

