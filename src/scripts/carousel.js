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
  const swipers = [];

  document.querySelectorAll(".projects-group .slide-container").forEach((container) => {
    const slideContent = container.querySelector(".slide-content");
    const pagination = container.querySelector(".swiper-pagination");
    const nextEl = container.querySelector(".swiper-button-next");
    const prevEl = container.querySelector(".swiper-button-prev");

    if (!slideContent || !pagination) return;

    const swiper = new Swiper(slideContent, {
      loop: false,
      grabCursor: true,
      watchOverflow: true,
      spaceBetween: 25,
      slidesPerView: 3,
      pagination: {
        el: pagination,
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl,
        prevEl,
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

    swipers.push({
      group: container.dataset.group,
      instance: swiper,
    });
  });

  window.projectSwipers = swipers;
});
