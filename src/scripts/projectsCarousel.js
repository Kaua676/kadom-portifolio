var swiper = new Swiper(".slide-content", {
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
    950: {
      slidesPerView: 3,
      centeredSlides: false,
      spaceBetween: 25,
    },
  },
});
