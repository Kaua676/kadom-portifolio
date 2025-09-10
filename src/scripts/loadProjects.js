const projects = [
  {
    repo: "rancho-da-capivara",
    user: "Kaua676",
    title: "Rancho da Capivara",
    description:
      "Plataforma web de gestão e presença digital para o Balneário Rancho da Capivara, centralizando reservas, cadastro de visitantes, controle de vendas e relatórios, além de permitir agendamento online pelo público",
    technologies: ["HTML", "C#", "JavaScript", "CSS", "POSTGRESQL"],
    image: "project-1.png",
  },
  {
    repo: "govix",
    user: "Kaua676",
    title: "Govix",
    description:
      "Govix é uma aplicação web que analisa transferências públicas e fornece insights estratégicos para empresas que atuam no setor GovTech. A plataforma integra dados governamentais com visualizações inteligentes, mapa de calor e um painel de recomendações baseadas em IA.",
    technologies: ["Python", "Flask", "React", "Chart.js"],
    image: "project-2.png",
  },
  {
    repo: "J-A-Digix",
    user: "",
    title: "NutriVision",
    description:
      "O NutriVision é uma plataforma completa para análise nutricional de cardápios escolares. A solução é dividida em três módulos principais: API de formatação de cardápios, base de dados nutricional e interface web interativa.",
    technologies: ["React", "Python", "SQLite", "Pandas"],
    image: "project-3.png",
  },
  {
    repo: "portal-empreendimentos",
    user: "Kaua676",
    title: "Portal Empreendimentos",
    description:
      "Aplicação web que permite a cidadãos, empresas e contadores consultar, regularizar e acompanhar dados empresariais junto ao município. O sistema reúne autenticação segura, consultas fiscais, geração de boletos e recursos de acessibilidade.",
    technologies: ["PHP", "MySQL", "Dompdf", "PHPMailer"],
    image: "project-4.png",
  },
];

window.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".card-wrapper");

  const carregarProjetos = async () => {
    for (const project of projects) {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${project.user}/${project.repo}`
        );
        const data = await response.json();
        const repoUrl =
          data.html_url || `https://github.com/${project.user}/${project.repo}`;

        const techBadges = project.technologies
          .map((tech) => {
            const badgeTech = encodeURIComponent(tech);
            return `<img src="https://img.shields.io/badge/${badgeTech}-informational?style=for-the-badge&logo=${badgeTech.toLowerCase()}&logoColor=white" alt="${tech} Badge"/>`;
          })
          .join("");

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
                <a href="${repoUrl}" target="_blank" class="button project-cta font-poppins-s">
                  Ver Mais
                </a>
              </footer>
            </div>
          </article>
        `;

        container.insertAdjacentHTML("beforeend", cardHTML);
      } catch (err) {
        console.error(`Erro ao carregar projeto ${project.repo}:`, err);
      }
    }

    document.dispatchEvent(new Event("projectsLoaded"));
  };

  carregarProjetos();
});
