(function () {
  const grid = document.getElementById("grid");
  const hero = document.querySelector(".hero-section");

  let cols = 0,
    rows = 0,
    cellW = 0,
    cellH = 0,
    lastIdx = -1;
  let resizeRaf = null,
    moveRaf = null;

  function calcularGrade() {
    const largura = hero.clientWidth;
    const altura = hero.clientHeight;

    // Tamanho alvo do quadrado (maior como você pediu)
    const alvo = Math.max(80, Math.min(160, Math.floor(largura / 10)));

    cols = Math.ceil(largura / alvo);
    rows = Math.ceil(altura / alvo);

    cellW = Math.ceil(largura / cols);
    cellH = Math.ceil(altura / rows);

    grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  }

  function gerarGrid() {
    grid.innerHTML = "";
    const total = cols * rows;

    const frag = document.createDocumentFragment();
    for (let i = 0; i < total; i++) {
      const div = document.createElement("div");
      div.className = "square";
      // tamanhos exatos para manter quadrado
      div.style.width = `${cellW}px`;
      div.style.height = `${cellH}px`;
      frag.appendChild(div);
    }
    grid.appendChild(frag);
  }

  function rebuild() {
    calcularGrade();
    gerarGrid();
    lastIdx = -1; // reset hover
  }

  function onResize() {
    if (resizeRaf) return;
    resizeRaf = requestAnimationFrame(() => {
      rebuild();
      resizeRaf = null;
    });
  }

  function onMouseMove(e) {
    if (moveRaf) return;
    moveRaf = requestAnimationFrame(() => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const c = Math.min(cols - 1, Math.max(0, Math.floor(x / cellW)));
      const r = Math.min(rows - 1, Math.max(0, Math.floor(y / cellH)));
      const idx = r * cols + c;

      if (idx !== lastIdx) {
        const prev = grid.children[lastIdx];
        if (prev) prev.classList.remove("is-hovered");
        const curr = grid.children[idx];
        if (curr) curr.classList.add("is-hovered");
        lastIdx = idx;
      }
      moveRaf = null;
    });
  }

  function onMouseLeave() {
    if (lastIdx >= 0) {
      const prev = grid.children[lastIdx];
      if (prev) prev.classList.remove("is-hovered");
      lastIdx = -1;
    }
  }

  window.addEventListener("resize", onResize);
  hero.addEventListener("mousemove", onMouseMove);
  hero.addEventListener("mouseleave", onMouseLeave);

  // inicializa
  rebuild();
})();
