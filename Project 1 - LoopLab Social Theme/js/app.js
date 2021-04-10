// get Current Year
$('#year').text(new Date().getFullYear());

// Scroll Spy
$('body').scrollspy({ target: '#main-nav' });

// Smooth Scrolling
$('#main-nav a').on('click', function (e) {
   if (this.hash !== '') {
      // prevent default functionality
      e.preventDefault();

      const hash = this.hash;

      $('html , body').animate({ scrollTop: $(hash).offset().top }, 700, function () {
         // adding hash to url after scroll
         window.location.hash = hash;
      });
   }
});
