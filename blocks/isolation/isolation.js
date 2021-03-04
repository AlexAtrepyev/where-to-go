let isolation__title = document.querySelector('.isolation__title')
let isolation__play = document.querySelector('.isolation__play')
let isolation__poster = document.querySelector('.isolation__poster')

isolation__play.addEventListener('mouseover', function() {
  isolation__title.style.display = 'none';
  isolation__play.style.display = 'none';
  isolation__poster.style.display = 'none';
});
