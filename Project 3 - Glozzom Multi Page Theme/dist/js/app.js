// get Current Year
$('#year').text(new Date().getFullYear());

$('.carousel').carousel({
   interval: 3500,
   keyboard: true,
});

document.addEventListener('DOMContentLoaded', function () {
   autoPlayYouTubeModal();
});

//FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
function autoPlayYouTubeModal() {
   var trigger = $('body').find('[data-toggle="modal"]');
   trigger.click(function () {
      var theModal = $(this).data('target'),
         videoSRC = $(this).attr('data-theVideo'),
         videoSRCauto = videoSRC + '?autoplay=1';
      $(theModal + ' iframe').attr('src', videoSRCauto);

      $(theModal + ' a').click(function () {
         window.open(
            videoSRC.replace('embed', 'watch'),
            '_blank' // <- This is what makes it open in a new window.
         );
      });

      $(theModal + ' button.stop').click(function () {
         $(theModal + ' iframe').attr('src', videoSRC);
      });
   });
}

$(document).on('click', '[data-toggle="lightbox"]', function (event) {
   event.preventDefault();
   $(this).ekkoLightbox({
      alwaysShowNavOnTouchDevice: false,
      wrapAround: false,
   });
});

// SLICK INIT
$('.slick-slider').slick({
   infinite: true,
   slideToShow: 1,
   slideToScroll: 1,
});
