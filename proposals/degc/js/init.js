(function ($) {
  $(function () {
    $('.modal').modal();
    var carousel_interval = 10000;
    $('.carousel').carousel({
      dist: -400,
      shift: 300,
      indicators: true,
    });
    setInterval(function () {
      $('.carousel').carousel('next');
    }, carousel_interval);
    $('.parallax').parallax();
    $('.carousel').carousel('next');
  }); // end of document ready
})(jQuery); // end of jQuery name space
