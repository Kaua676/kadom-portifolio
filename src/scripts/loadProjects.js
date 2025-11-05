const projectCategories = {
  design: [
    {
      title: "Govix Insights",
      description:
        "Evolução da plataforma Govix com foco em discovery contínuo, definição de métricas norteadoras e protótipos navegáveis para novos dashboards.",
      badges: ["Discovery contínuo", "Design System", "Figma", "Pesquisa"],
      image: "project-2.png",
      url: "./assets/public/cases/govix-insights.pdf",
      ctaLabel: "Ver Protótipo",
    },
    {
      title: "Rancho da Capivara Experience",
      description:
        "Reposicionamento da jornada de reservas e operação do balneário, com blueprint de serviço, testes moderados e prototipagem responsiva.",
      badges: ["Blueprint de serviço", "UX Research", "Prototipagem", "Design Ops"],
      image: "project-1.png",
      url: "./assets/public/cases/rancho-experience.pdf",
      ctaLabel: "Ver Fluxo",
    },
    {
      title: "Portal Empreendimentos 2.0",
      description:
        "Redesenho centrado no cidadão para acesso a serviços municipais com guidelines de acessibilidade WCAG e handoff colaborativo com engenharia.",
      badges: ["WCAG", "Design Tokens", "Workshops", "Prototipagem"],
      image: "project-4.png",
      url: "./assets/public/cases/portal-empreendimentos.pdf",
      ctaLabel: "Ver Caso",
    },
  ],
  development: [
    {
      repo: "rancho-da-capivara",
      user: "Kaua676",
      title: "Rancho da Capivara",
      description:
        "Plataforma web de gestão e presença digital para o Balneário Rancho da Capivara, centralizando reservas, cadastro de visitantes, controle de vendas e relatórios, além de permitir agendamento online pelo público",
      badges: ["HTML", "C#", "JavaScript", "CSS", "PostgreSQL"],
      image: "project-1.png",
      ctaLabel: "Ver Código",
    },
    {
      repo: "govix",
      user: "Kaua676",
      title: "Govix",
      description:
        "Govix é uma aplicação web que analisa transferências públicas e fornece insights estratégicos para empresas que atuam no setor GovTech. A plataforma integra dados governamentais com visualizações inteligentes, mapa de calor e um painel de recomendações baseadas em IA.",
      badges: ["Python", "Flask", "React", "Chart.js"],
      image: "project-2.png",
      ctaLabel: "Ver Repositório",
    },
    {
      repo: "J-A-Digix",
      user: "J-A-Digix",
      title: "NutriVision",
      description:
        "O NutriVision é uma plataforma completa para análise nutricional de cardápios escolares. A solução é dividida em três módulos principais: API de formatação de cardápios, base de dados nutricional e interface web interativa.",
      badges: ["React", "Python", "SQLite", "Pandas"],
      image: "project-3.png",
      ctaLabel: "Ver Projeto",
    },
    {
      repo: "portal-empreendimentos",
      user: "Kaua676",
      title: "Portal Empreendimentos",
      description:
        "Aplicação web que permite a cidadãos, empresas e contadores consultar, regularizar e acompanhar dados empresariais junto ao município. O sistema reúne autenticação segura, consultas fiscais, geração de boletos e recursos de acessibilidade.",
      badges: ["PHP", "MySQL", "Dompdf", "PHPMailer"],
      image: "project-4.png",
      ctaLabel: "Ver Sistema",
    },
  ],
};

let currentCategory = "design";

async function resolveProjectLink(project) {
  if (project._resolvedUrl) {
    return project._resolvedUrl;
  }

  if (project.repo && project.user) {
    try {
      const response = await fetch(
        `https://api.github.com/repos/${project.user}/${project.repo}`
      );
      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }
      const data = await response.json();
      const url =
        data.html_url || `https://github.com/${project.user}/${project.repo}`;
      project._resolvedUrl = url;
      return url;
    } catch (error) {
      console.error(`Erro ao carregar projeto ${project.repo}:`, error);
      const fallback = `https://github.com/${project.user}/${project.repo}`;
      project._resolvedUrl = fallback;
      return fallback;
    }
  }

  const url = project.url || "#";
  project._resolvedUrl = url;
  return url;
}

function createBadgeMarkup(badges = []) {
  return badges
    .map((badge) => `<span class="project-badge">${badge}</span>`)
    .join("");
}

async function renderProjects(category) {
  const container = document.querySelector(".card-wrapper");
  if (!container) return;

  container.dataset.category = category;
  container.innerHTML = "";

  const projects = projectCategories[category];
  for (const project of projects) {
    const projectUrl = await resolveProjectLink(project);
    const cardHTML = `
      <article class="swiper-slide project-card">
        <figure class="project-media">
          <span class="overlay"></span>
          <img src="./assets/projects/${project.image}" alt="Prévia do projeto ${project.title}" />
        </figure>

        <div class="project-content">
          <header class="project-header">
            <div class="project-techs">${createBadgeMarkup(project.badges)}</div>
            <h3 class="project-title font-poppins-l">${project.title}</h3>
          </header>
          <p class="project-description font-roboto-s">${project.description}</p>
          <footer>
            <a href="${projectUrl}" target="_blank" class="button project-cta font-poppins-s" rel="noopener">
              ${project.ctaLabel || "Ver mais"}
            </a>
          </footer>
        </div>
      </article>
    `;

    container.insertAdjacentHTML("beforeend", cardHTML);
  }

  document.dispatchEvent(
    new CustomEvent("projectsLoaded", { detail: { category } })
  );
}

function updateActiveFilter(category) {
  const buttons = document.querySelectorAll(".projects-filter");
  buttons.forEach((button) => {
    const isActive = button.dataset.projectFilter === category;
    button.setAttribute("aria-selected", String(isActive));
  });

  const slideContainer = document.querySelector(".slide-container");
  if (slideContainer) {
    slideContainer.setAttribute("data-active-category", category);
  }
}

function handleFilterClick(event) {
  const button = event.target.closest(".projects-filter");
  if (!button) return;

  const category = button.dataset.projectFilter;
  if (!category || category === currentCategory) return;

  currentCategory = category;
  updateActiveFilter(category);
  renderProjects(category);
}

function handleModeChange(event) {
  const mode = event.detail?.mode;
  if (!mode) return;

  const category = mode === "developer" ? "development" : "design";
  if (category === currentCategory) return;

  currentCategory = category;
  updateActiveFilter(category);
  renderProjects(category);
}

window.addEventListener("DOMContentLoaded", () => {
  const initialMode = typeof window.getCurrentMode === "function"
    ? window.getCurrentMode()
    : "design";

  currentCategory = initialMode === "developer" ? "development" : "design";
  updateActiveFilter(currentCategory);
  renderProjects(currentCategory);

  document
    .querySelector(".projects-filters")
    ?.addEventListener("click", handleFilterClick);

  document.addEventListener("modeChanged", handleModeChange);
});
