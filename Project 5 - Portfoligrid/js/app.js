// get Current Year
$('#year').text(new Date().getFullYear());

// Collapsing Module
$('.icons').click(function () {
   $('.collapse').collapse('hide');
});

// Light Box
$(document).on('click', '[data-toggle="lightbox"]', function (event) {
   event.preventDefault();
   $(this).ekkoLightbox({
      alwaysShowNavOnTouchDevice: false,
      wrapAround: false,
   });
});
