function updateThemeAssets(e) {
  const isDark = e.matches;

  const img = document.getElementById("logo-img");
  img.src = isDark ? "./src/assets/imgs/logo-dark.svg" : "./src/assets/imgs/logo-light.svg";

  const favicon = document.getElementById("favicon");
  favicon.href = isDark ? "./src/assets/imgs/favicon-dark.svg" : "./src/assets/imgs/favicon-light.svg";
}

const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
updateThemeAssets(mediaQuery);
mediaQuery.addEventListener("change", updateThemeAssets);
