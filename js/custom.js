// smooth-scrolling.js

$(document).ready(function (){
  // Back-to-top
  var height = $('#cover:visible').height();

  $(window).scroll(function () {
      if ($(this).scrollTop() > height) {
          $('.back-to-top').fadeIn();
      } else {
          $('.back-to-top').fadeOut();
      }
    });

  // Smooth-scrolling
  $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });

  // Change background color of the Navbar
  $(window).on('scroll', function (){
    if ($(window).scrollTop()){
      $('nav').addClass('navbar-background');
    }
    else {
      $('nav').removeClass('navbar-background');
    }
  });

  //Sroll reveal
  window.sr = ScrollReveal();
  sr.reveal('#cover-content', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
  })
  sr.reveal('#projects-content', {
    duration: 2000,
    origin: 'bottom'
  })
  sr.reveal('.profile-left', {
    duration: 2000,
    origin: 'left',
    distance: '100px'
  })
  sr.reveal('.profile-right', {
    duration: 2000,
    origin: 'right',
    distance: '100px'
  })
  sr.reveal('#quote', {
    duration: 1000,
    origin: 'left',
    distance: '300px'
  })
  sr.reveal('.blockquote', {
    duration: 2000,
    delay: 1000,
    origin: 'bottom'
  })
  
});


