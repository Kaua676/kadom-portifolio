function updateThemeAssets(e) {
  const isDark = e.matches;

  // Trocar imagem principal
  const img = document.getElementById("logo-img");
  img.src = isDark ? "./assets/imgs/logo-dark.svg" : "./assets/imgs/logo-light.svg";

  // Trocar favicon
  const favicon = document.getElementById("favicon");
  favicon.href = isDark ? "./assets/imgs/favicon-dark.svg" : "./assets/imgs/favicon-light.svg";
}

const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
updateThemeAssets(mediaQuery);
mediaQuery.addEventListener("change", updateThemeAssets);
