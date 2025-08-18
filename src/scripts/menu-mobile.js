(function () {
  const header = document.querySelector(".header-container");
  const toggle = document.getElementById("menuToggle");
  const panel = document.querySelector(".menu-panel");
  const focusables = panel.querySelectorAll("a, button");

  function openMenu() {
    header.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("no-scroll");
    // foco no primeiro link ao abrir
    focusables[0]?.focus();
  }

  function closeMenu() {
    header.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");
  }

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    expanded ? closeMenu() : openMenu();
  });

  // Fecha ao clicar em links
  panel.addEventListener("click", (e) => {
    const isLink = e.target.closest("a, button");
    if (isLink) closeMenu();
  });

  // Fecha com ESC e clique fora
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  document.addEventListener("click", (e) => {
    const clickingInside = header.contains(e.target);
    if (!clickingInside) closeMenu();
  });

  // Reseta se voltar para desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });
})();
