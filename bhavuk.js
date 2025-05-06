let current = 0;
const images = document.querySelectorAll('#slider img');

function showNextImage() {
  images[current].classList.remove('active');
  current = (current + 1) % images.length;
  images[current].classList.add('active');
}
