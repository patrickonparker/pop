(function ($) {
  $(function () {

    $('.button-collapse').sideNav();
    $('.modal').modal();
    $('.carousel').carousel({
      dist: -400,
      shift: 300,
      indicators: true,
      interval: 8000,
    });
    $('.parallax').parallax();
    $('select').material_select();

  }); // end of document ready
})(jQuery); // end of jQuery name space
