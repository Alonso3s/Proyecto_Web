const slides = document.getElementById("slideContainer");
const totalSlides = slides.children.length;
let index = 0;

function showSlide(i) {
  index = (i + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

document.getElementById("prevBtn").onclick = () => showSlide(index - 1);
document.getElementById("nextBtn").onclick = () => showSlide(index + 1);

// Cambio automático cada 4 segundos
setInterval(() => {
  showSlide(index + 1);
}, 4000);
