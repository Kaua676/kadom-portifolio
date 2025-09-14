// scripts/scrollreveal.js
(function () {
  const sr = ScrollReveal({
    distance: "12px",
    duration: 700,
    easing: "cubic-bezier(.2,.65,.3,1)",
    interval: 80,
    viewFactor: 0.2,
    reset: false,
    cleanup: true,
    mobile: true,
  });

  // Hero
  sr.reveal(".hero-description", { origin: "left" });
  sr.reveal(".animated-blob", { origin: "right", delay: 200 });

  // About
  sr.reveal(".about-section .subtitle", { origin: "bottom" });
  sr.reveal(".about-section .description", { origin: "bottom", delay: 200 });
  sr.reveal(".about-section .btn-container", { origin: "bottom", delay: 150 });

  // Skills
  sr.reveal(".mySkillsSwiper", { origin: "bottom", interval: 60, scale: 0.98 });

  // Socials
  sr.reveal(".about-section .socials-title", { origin: "bottom" });
  sr.reveal(".about-section .socials", {
    origin: "bottom",
    interval: 60,
  });

  // Training
  sr.reveal(".training-section .subtitle", { origin: "bottom" });
  sr.reveal(".training-section .description", { origin: "bottom", delay: 200 });
  sr.reveal(".training-section .formation", { origin: "bottom", interval: 80 });
  sr.reveal(".courses .courses-title", { origin: "bottom" });
  sr.reveal(".courses .course", { origin: "bottom", interval: 50 });
  sr.reveal(".languages .languages-title", { origin: "bottom" });
  sr.reveal(".languages .language", { origin: "bottom", interval: 50 });

  // Projects
  sr.reveal(".projects-section", { origin: "bottom", interval: 200 });

  // Contact
  sr.reveal(".contact-section .subtitle", { origin: "bottom" });
  sr.reveal(
    ".contact-section .input-group, .contact-section .textarea-group, .contact-section .form-btn",
    {
      origin: "bottom",
      interval: 80,
    }
  );

  // Dividers
  sr.reveal(".divider", { origin: "bottom", distance: "8px", duration: 500 });
})();
