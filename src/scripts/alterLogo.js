const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

function applyBrandAssets() {
  const body = document.body;
  const prefersDark = mediaQuery.matches;
  const isDesign = body.classList.contains("theme-design");

  const useDarkAssets = !isDesign && prefersDark;
  const logo = document.getElementById("logo-img");
  const favicon = document.getElementById("favicon");

  if (logo) {
    logo.src = useDarkAssets
      ? "./assets/imgs/logo-dark.svg"
      : "./assets/imgs/logo-light.svg";
  }

  if (favicon) {
    favicon.href = useDarkAssets
      ? "./assets/imgs/favicon-dark.svg"
      : "./assets/imgs/favicon-light.svg";
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", applyBrandAssets);
} else {
  applyBrandAssets();
}

mediaQuery.addEventListener("change", applyBrandAssets);
document.addEventListener("modeChanged", applyBrandAssets);
