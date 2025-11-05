const projectGroups = {
  design: [
    {
      repo: "govix",
      user: "Kaua676",
      title: "Govix – Estratégia de Produto",
      description:
        "Conduzi discovery qualitativo, priorização de oportunidades e desenhei dashboards que traduzem análises de IA em decisões acionáveis para gestores públicos.",
      technologies: ["Discovery", "Dashboard de IA", "Design System"],
      image: "project-2.png",
    },
    {
      repo: "J-A-Digix",
      user: "J-A-Digix",
      title: "NutriVision – Jornada Nutricional",
      description:
        "Mapeei a jornada de nutricionistas, orquestrei testes moderados e prototipei fluxos para agilizar a criação de cardápios escolares de acordo com legislações vigentes.",
      technologies: ["Pesquisa Moderada", "Fluxos de Trabalho", "UI Responsiva"],
      image: "project-3.png",
    },
    {
      repo: "rancho-da-capivara",
      user: "Kaua676",
      title: "Rancho da Capivara – Experiência Omnicanal",
      description:
        "Reestruturei a experiência de reservas do balneário com protótipos validados com visitantes, garantindo consistência entre os pontos de contato digitais e presenciais.",
      technologies: ["Mapa de Jornada", "Prototipação", "Teste A/B"],
      image: "project-1.png",
    },
  ],
  development: [
    {
      repo: "rancho-da-capivara",
      user: "Kaua676",
      title: "Rancho da Capivara – Plataforma de Gestão",
      description:
        "Sistema completo para reservas, controle financeiro e relatórios do Rancho da Capivara, com fluxo integrado para público e administração.",
      technologies: ["HTML", "C#", "JavaScript", "CSS", "PostgreSQL"],
      image: "project-1.png",
    },
    {
      repo: "govix",
      user: "Kaua676",
      title: "Govix – Engine de Dados",
      description:
        "Aplicação que integra dados governamentais e gera insights estratégicos para negócios GovTech, com painéis interativos e recomendações automatizadas.",
      technologies: ["Python", "Flask", "React", "Chart.js"],
      image: "project-2.png",
    },
    {
      repo: "portal-empreendimentos",
      user: "Kaua676",
      title: "Portal Empreendimentos",
      description:
        "Portal municipal para regularização de empresas, oferecendo autenticação segura, emissão de boletos e consultas fiscais acessíveis.",
      technologies: ["PHP", "MySQL", "Dompdf", "PHPMailer"],
      image: "project-4.png",
    },
  ],
};

const createBadge = (tech) => {
  const label = typeof tech === "string" ? tech : tech.label;
  const encodedLabel = encodeURIComponent(label.replace(/\s+/g, "_"));
  const badgeColor =
    typeof tech === "string" ? "informational" : tech.badge || "informational";
  const encodedColor = encodeURIComponent(badgeColor);
  const logoParam = (() => {
    if (typeof tech === "string") {
      return `&logo=${encodeURIComponent(tech.replace(/\s+/g, "").toLowerCase())}`;
    }
    return tech.logo ? `&logo=${encodeURIComponent(tech.logo)}` : "";
  })();
  const logoColorParam = (() => {
    if (typeof tech === "string") {
      return "&logoColor=white";
    }
    if (tech.logoColor === false) {
      return "";
    }
    return `&logoColor=${encodeURIComponent(tech.logoColor || "white")}`;
  })();

  return `<img src="https://img.shields.io/badge/${encodedLabel}-${encodedColor}?style=for-the-badge${logoParam}${logoColorParam}" alt="${label} Badge"/>`;
};

const getProjectUrl = async (project) => {
  if (project.link) {
    return project.link;
  }

  if (!project.repo) {
    return "#";
  }

  try {
    const response = await fetch(
      `https://api.github.com/repos/${project.user || "Kaua676"}/${project.repo}`
    );
    const data = await response.json();
    if (response.ok && data.html_url) {
      return data.html_url;
    }
  } catch (err) {
    console.error(`Erro ao buscar repositório ${project.repo}:`, err);
  }

  return `https://github.com/${project.user || "Kaua676"}/${project.repo}`;
};

window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".projects-tab");
  const groups = document.querySelectorAll(".projects-group");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      if (tab.classList.contains("active")) return;

      tabs.forEach((button) => {
        const isTarget = button === tab;
        button.classList.toggle("active", isTarget);
        button.setAttribute("aria-selected", String(isTarget));
      });

      groups.forEach((group) => {
        const isActive = group.id === tab.dataset.target;
        group.classList.toggle("is-active", isActive);
        if (isActive) {
          group.removeAttribute("hidden");
          group.setAttribute("tabindex", "0");
        } else {
          group.setAttribute("hidden", "");
          group.setAttribute("tabindex", "-1");
        }

        if (isActive && window.projectSwipers) {
          const container = group.querySelector(".slide-container");
          const groupKey = container?.dataset.group;
          const swiperEntry = window.projectSwipers.find(
            (item) => item.group === groupKey
          );
          swiperEntry?.instance.update();
        }
      });
    });
  });

  const loadGroup = async (groupName) => {
    const container = document.querySelector(
      `.card-wrapper[data-group="${groupName}"]`
    );
    if (!container) return;

    for (const project of projectGroups[groupName]) {
      const repoUrl = await getProjectUrl(project);
      const techBadges = project.technologies.map(createBadge).join("");

      const cardHTML = `
        <article class="swiper-slide project-card">
          <figure class="project-media">
            <span class="overlay"></span>
            <img src="./assets/projects/${project.image}" alt="Prévia do projeto ${project.title}" />
          </figure>

          <div class="project-content">
            <header class="project-header">
              <div class="project-techs">${techBadges}</div>
              <h3 class="project-title font-poppins-l">${project.title}</h3>
            </header>
            <p class="project-description font-roboto-s">${project.description}</p>
            <footer>
              <a href="${repoUrl}" target="_blank" rel="noopener noreferrer" class="button project-cta font-poppins-s">
                Ver Mais
              </a>
            </footer>
          </div>
        </article>
      `;

      container.insertAdjacentHTML("beforeend", cardHTML);
    }
  };

  const carregarProjetos = async () => {
    for (const groupName of Object.keys(projectGroups)) {
      await loadGroup(groupName);
    }

    document.dispatchEvent(new Event("projectsLoaded"));
  };

  carregarProjetos();
});
