// Skills Carousel
window.addEventListener("DOMContentLoaded", () => {
  new Swiper(".mySkillsSwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    grid: { rows: 2, fill: "row" },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: { prevEl: "#btn-left", nextEl: "#btn-right" },
    breakpoints: {
      0: { slidesPerView: 1, grid: { rows: 2 } },
      481: { slidesPerView: 2, grid: { rows: 2 } },
      1025: { slidesPerView: 3, grid: { rows: 2 } },
    },
  });
});

// Projects Carousel
document.addEventListener("projectsLoaded", () => {
  new Swiper(".slide-content", {
    loop: false,
    grabCursor: true,
    spaceBetween: 25,
    slidesPerView: 3,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.08,
        centeredSlides: true,
        spaceBetween: 16,
        navigation: false,
      },
      520: {
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 20,
      },
      1025: {
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 25,
      },
    },
  });
});
