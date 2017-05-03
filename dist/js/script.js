$(document).ready(function() {
  $('#js--mobile-menu').on('click', function() {
    $('.nav--ul').toggle();
  });
  $('.nav--li-snittrosor').on('click', function() {
    $('#changeContent').load('pages/snittrosor.html');
  });
  console.log($(window).width() < 768);
  if ($(window).width() < 768) {
    $('#js--open-under-menu').on('click', function() {
      $('.nav--ul-under-menu').toggle();
    });
  } else {
    $('#js--open-under-menu').hover(function() {
      $('.nav--ul-under-menu').toggle();
    });
  }
  $(window).resize(function() {
    console.log($(window).width());
    console.log($(window).width() < 1024);
    if ($(window).width() < 768) {
      $('#js--open-under-menu').on('click', function() {
        $('.nav--ul-under-menu').toggle();
      });
    } else {
      $('#js--open-under-menu').hover(function() {
        $('.nav--ul-under-menu').toggle();
      });
    }
  });
  $('#js--box--path-red').hover(function() {
    $('.box--text-red').slideToggle();
  });
  $('#js--box--path-yellow').hover(function() {
    $('.box--text-yellow').slideToggle();
  });
  $('#js--box--path-pink').hover(function() {
    $('.box--text-pink').slideToggle();
  });
  $('#js--box--path-white').hover(function() {
    $('.box--text-white').slideToggle();
  });
});
