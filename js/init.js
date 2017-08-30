$(document).ready(function () {
  var carousel_interval = 10000;
  $('.modal').modal();
  $('.parallax').parallax();
  $('.carousel').carousel({
    dist: -400,
    shift: 300,
    indicators: true,
  });

  function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
  }
  autoplay()
}); // end of document ready
