const carouselInner = document.querySelector(".carousel-inner");
const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");
const slides = document.querySelectorAll(".technologies-list");
let currentIndex = 0;

function updateCarousel() {
  const slideWidth = carouselInner.clientWidth;
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

btnRight.addEventListener("click", () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

btnLeft.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});
