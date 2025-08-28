var swiperAbout = new Swiper(".mySkillsSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  grid: { rows: 2, fill: "row" },
  pagination: { el: ".swiper-pagination", clickable: true },
  navigation: { prevEl: "#btn-left", nextEl: "#btn-right" },
  breakpoints: {
    0: { slidesPerView: 1 },
    481: { slidesPerView: 2 },
    1025: { slidesPerView: 3 },
  },
});

var swiperProjects = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
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
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
