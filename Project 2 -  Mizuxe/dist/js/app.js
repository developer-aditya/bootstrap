// get Current Year
$('#year').text(new Date().getFullYear());
var count = 0;

// Arrow Movement
document.querySelector('.accordion').addEventListener('mouseup', function (e) {
   const classListVar = e.target.classList;
   if (classListVar.contains('mb-0')) {
      if (classListVar.contains('collapsed')) {
         e.target.firstElementChild.style = 'transform: rotate(0deg);';
         console.log('yes');
      } else {
         e.target.firstElementChild.style = 'transform: rotate(180deg);';
      }
   }
});
