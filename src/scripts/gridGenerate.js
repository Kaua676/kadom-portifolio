function gerarGrid() {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  const largura = window.innerWidth;
  const altura = window.innerHeight;

  let colunas, linhas;

  if (largura >= 1920) {
    colunas = 10;
    linhas = 6;
  } else if (largura >= 1440) {
    colunas = 10;
    linhas = 8;
  } else if (largura >= 1024) {
    colunas = 8;
    linhas = 7;
  } else if (largura >= 768) {
    colunas = 6;
    linhas = 7;
  } else {
    colunas = 4;
    linhas = 8;
  }

  const larguraQuadrado = largura / colunas;
  const alturaQuadrado = altura / linhas;

  grid.style.gridTemplateColumns = `repeat(${colunas}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${linhas}, 1fr)`;

  const total = colunas * linhas;
  for (let i = 0; i < total; i++) {
    const div = document.createElement("div");
    div.className = "square";
    div.style.width = `${larguraQuadrado}px`;
    div.style.height = `${alturaQuadrado}px`;
    grid.appendChild(div);
  }
}

window.addEventListener("resize", gerarGrid);
window.addEventListener("load", gerarGrid);
