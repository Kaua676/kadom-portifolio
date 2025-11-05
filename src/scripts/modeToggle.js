(() => {
  const textContentByMode = {
    design: {
      heroRole: "Designer de Produto Júnior",
      heroDescription:
        "Investigo necessidades reais, desenho jornadas claras e prototipagens colaborativas para transformar visões em experiências digitais consistentes.",
      aboutDescription:
        "A tecnologia sempre fez parte da minha trajetória, mas foi no design de produto que encontrei a forma ideal de conectar pessoas, negócios e código. Atuo como Designer de Produto Júnior, conduzindo pesquisas, mapeando jornadas e articulando soluções junto a times multidisciplinares. Aqui compartilho as ferramentas que utilizo para transformar descobertas em experiências digitais consistentes.",
      professionalIntro:
        "Experiências em produto e desenvolvimento que combinam discovery contínuo, colaboração com engenharia e entregas mensuráveis para o negócio.",
      trainingDescription:
        "Minha base combina desenvolvimento de software, engenharia de processos e especializações em UX/UI. O aprendizado contínuo mantém minha prática alinhada às necessidades das pessoas e do negócio.",
      projectsIntro:
        "Uma seleção de projetos de design de produto e desenvolvimento que demonstram minha atuação ponta a ponta — do discovery à entrega técnica.",
      meta: {
        title: "Kauã Vicente Domingos | Designer de Produto & Desenvolvedor",
        description:
          "Portfólio híbrido de Kauã Vicente Domingos, Designer de Produto Júnior com background em desenvolvimento full stack. Conheça projetos, experiências e formações em UX/UI, pesquisa e tecnologia.",
        ogTitle: "Kadom | Portfólio de Produto e Tecnologia",
        ogDescription:
          "Portfólio híbrido de Kauã Vicente Domingos. Designer de Produto Júnior com histórico em desenvolvimento full stack.",
      },
    },
    developer: {
      heroRole: "Desenvolvedor Full Stack",
      heroDescription:
        "Cada projeto é uma oportunidade de combinar estética com funcionalidade, entregando resultados que fazem a diferença.",
      aboutDescription:
        "Desde cedo sempre gostei de entender como as coisas funcionam e transformar ideias em soluções. Hoje sigo esse caminho na tecnologia, explorando do front-end ao back-end e desenvolvendo projetos que unem lógica e criatividade. Nesta seção compartilho as tecnologias que fazem parte da minha rotina e os canais onde você pode se conectar comigo.",
      professionalIntro:
        "Uma trajetória técnica focada em entregar software robusto, escalável e alinhado aos objetivos das equipes e clientes.",
      trainingDescription:
        "Acredito no aprendizado contínuo como forma de evolução profissional. Aqui estão minhas formações e cursos que ampliaram meus conhecimentos em desenvolvimento.",
      projectsIntro:
        "Aplicações, APIs e interfaces desenvolvidas com foco em performance, segurança e manutenção contínua.",
      meta: {
        title: "Kauã Vicente Domingos | Desenvolvedor Full Stack | Portfólio Kadom",
        description:
          "Portfólio de Kauã Vicente Domingos, desenvolvedor full stack apaixonado por criar soluções criativas em front-end e back-end. Veja projetos, formação e contato.",
        ogTitle: "Kadom | Portfólio de Kauã Vicente Domingos",
        ogDescription:
          "Portfólio de Kauã Vicente Domingos. Desenvolvedor Full Stack com projetos em front-end e back-end.",
      },
    },
  };

  const formationsByMode = {
    design: [
      {
        type: "Pós-graduação",
        course: "Engenharia de Software",
        academy: "Uniderp · 2024 - cursando",
      },
      {
        type: "Especialização",
        course: "UX/UI Design para Produtos Digitais",
        academy: "Alura, How Bootcamps e cursos independentes",
      },
      {
        type: "Tecnólogo",
        course: "Análise e Desenvolvimento de Sistemas",
        academy: "Insted · 2021 - 2023",
      },
    ],
    developer: [
      {
        type: "Tecnólogo",
        course: "Análise e Desenvolvimento de Sistemas",
        academy: "Insted",
      },
      {
        type: "Pós-graduação",
        course: "Engenharia de Software",
        academy: "Uniderp",
      },
    ],
  };

  const coursesByMode = {
    design: [
      {
        title: "Pesquisa de Usuários e Testes Moderados",
        hours: "24h",
        certificate: "./assets/public/certificates/pesquisa-usuarios.pdf",
      },
      {
        title: "UX Strategy & Product Discovery",
        hours: "20h",
        certificate: "./assets/public/certificates/ux-strategy.pdf",
      },
      {
        title: "Design Systems na Prática",
        hours: "18h",
        certificate: "./assets/public/certificates/design-systems.pdf",
      },
      {
        title: "Interface Avançada no Figma",
        hours: "16h",
        certificate: "./assets/public/certificates/figma-avancado.pdf",
      },
      {
        title: "Prototipação de Alta Fidelidade",
        hours: "12h",
        certificate: "./assets/public/certificates/prototipacao.pdf",
      },
      {
        title: "Colaboração Produto + Engenharia",
        hours: "10h",
        certificate: "./assets/public/certificates/colaboracao.pdf",
      },
    ],
    developer: [
      {
        title: "HTML e CSS para Iniciantes",
        hours: "46h",
        certificate: "./assets/public/certificates/html-css.pdf",
      },
      {
        title: "UI Design Avançado",
        hours: "15h",
        certificate: "./assets/public/certificates/ui-design-avancado.pdf",
      },
      {
        title: "UX Design Heurísticas",
        hours: "15h",
        certificate: "./assets/public/certificates/ux-heuristicas.pdf",
      },
      {
        title: "React Completo",
        hours: "15h",
        certificate: "./assets/public/certificates/react-completo.pdf",
      },
      {
        title: "UX UI Design FIGMA + IA",
        hours: "20h",
        certificate: "./assets/public/certificates/ux-figma-ia.pdf",
      },
      {
        title: "Desenvolvimento Web Completo",
        hours: "120h",
        certificate: "./assets/public/certificates/web-completo.pdf",
      },
      {
        title: "Linux Fundamentos",
        hours: "40h",
        certificate: "./assets/public/certificates/linux-fundamentos.pdf",
      },
      {
        title: "Cloud Fundamentals, Administration and Solution Architect",
        hours: "80h",
        certificate: "./assets/public/certificates/cloud-fundamentals.pdf",
      },
    ],
  };

  const experiencesByMode = {
    design: [
      {
        role: "Designer de Produto Júnior",
        company: "Govix · Remoto",
        period: "2024 — atual",
        description:
          "Lidero processos de discovery e priorização junto ao time executivo, traduzindo dados públicos em fluxos e dashboards que guiam decisões de negócio.",
        highlights: [
          "Planejamento e condução de entrevistas com PMs e especialistas GovTech",
          "Definição de métricas de sucesso para novos recursos da plataforma",
          "Criação de design system com tokens compartilhados com a engenharia",
        ],
      },
      {
        role: "Product Designer Freelancer",
        company: "Rancho da Capivara · Campo Grande/MS",
        period: "2023 — 2024",
        description:
          "Redesenho da experiência de reservas e operação do balneário, alinhando necessidades dos visitantes e da equipe interna.",
        highlights: [
          "Mapeamento de jornadas e blueprint de serviços",
          "Prototipação de fluxos responsivos e validação com usuários",
          "Entrega de assets e handoff estruturado para desenvolvimento",
        ],
      },
      {
        role: "Designer & Desenvolvedor Colaborador",
        company: "Projetos independentes",
        period: "2021 — 2023",
        description:
          "Atuação em squads multidisciplinares explorando soluções de acessibilidade, automação e interfaces data-driven.",
        highlights: [
          "Facilitação de workshops de ideação e priorização",
          "Documentação de design decisions e acompanhamento de métricas",
          "Integração entre protótipos e entregas técnicas",
        ],
      },
    ],
    developer: [
      {
        role: "Desenvolvedor Full Stack",
        company: "Rancho da Capivara",
        period: "2023 — 2024",
        description:
          "Construção de plataforma de gestão com foco em reservas, controle financeiro e relatórios personalizados.",
        highlights: [
          "Desenvolvimento de APIs e integrações com gateways de pagamento",
          "Implantação de painel administrativo responsivo",
          "Automação de relatórios e exportações para equipes internas",
        ],
      },
      {
        role: "Desenvolvedor Full Stack",
        company: "Govix",
        period: "2022 — 2023",
        description:
          "Aplicação web para análise de transferências públicas com visualizações inteligentes e recomendações.",
        highlights: [
          "Integração de dados governamentais com pipelines em Python",
          "Implementação de dashboards com React e Chart.js",
          "Estruturação de autenticação e controle de acesso",
        ],
      },
      {
        role: "Desenvolvedor Web",
        company: "Portal Empreendimentos",
        period: "2021 — 2022",
        description:
          "Sistema municipal para consulta e regularização de dados empresariais, com foco em acessibilidade.",
        highlights: [
          "Modelagem de banco de dados e rotinas em PHP",
          "Integração de notificações e geração de boletos",
          "Melhoria de performance e monitoramento contínuo",
        ],
      },
    ],
  };

  const body = document.body;
  const textTargets = document.querySelectorAll("[data-content-key]");
  const formationsContainer = document.querySelector('[data-content-key="formations"]');
  const coursesContainer = document.querySelector('[data-content-key="courses"]');
  const timelineContainer = document.querySelector('[data-content-key="professionalTimeline"]');
  const modeButtons = document.querySelectorAll(".mode-switch__button");

  let currentMode = "design";

  function updateMetaTags(mode) {
    const meta = textContentByMode[mode].meta;
    document.title = meta.title;

    const descriptionMeta = document.querySelector('meta[name="description"]');
    const ogTitleMeta = document.querySelector('meta[property="og:title"]');
    const ogDescriptionMeta = document.querySelector('meta[property="og:description"]');
    const twitterTitleMeta = document.querySelector('meta[name="twitter:title"]');
    const twitterDescriptionMeta = document.querySelector('meta[name="twitter:description"]');

    if (descriptionMeta) descriptionMeta.setAttribute("content", meta.description);
    if (ogTitleMeta) ogTitleMeta.setAttribute("content", meta.ogTitle);
    if (ogDescriptionMeta) ogDescriptionMeta.setAttribute("content", meta.ogDescription);
    if (twitterTitleMeta) twitterTitleMeta.setAttribute("content", meta.ogTitle);
    if (twitterDescriptionMeta) twitterDescriptionMeta.setAttribute("content", meta.description);
  }

  function renderFormations(mode) {
    if (!formationsContainer) return;
    formationsContainer.innerHTML = "";

    formationsByMode[mode].forEach((formation) => {
      const li = document.createElement("li");
      li.className = "formation";
      li.innerHTML = `
        <span class="formation-type">${formation.type}</span>
        <h3 class="formation-course">${formation.course}</h3>
        <span class="formation-academy">${formation.academy}</span>
      `;
      formationsContainer.appendChild(li);
    });
  }

  function renderCourses(mode) {
    if (!coursesContainer) return;
    coursesContainer.innerHTML = "";

    coursesByMode[mode].forEach((course) => {
      const li = document.createElement("li");
      li.className = "course";
      li.tabIndex = 0;
      li.dataset.certificate = course.certificate;
      li.innerHTML = `
        <span class="course-title">${course.title}</span>
        <span class="course-hours">${course.hours}</span>
      `;
      coursesContainer.appendChild(li);
    });
  }

  function renderExperiences(mode) {
    if (!timelineContainer) return;
    timelineContainer.innerHTML = "";

    experiencesByMode[mode].forEach((experience) => {
      const article = document.createElement("article");
      article.className = "experience-card";
      article.innerHTML = `
        <header class="experience-header">
          <span class="experience-period">${experience.period}</span>
          <h3 class="experience-role font-poppins-m">${experience.role}</h3>
          <p class="experience-company font-roboto-s">${experience.company}</p>
        </header>
        <p class="experience-description font-roboto-s">${experience.description}</p>
        <ul class="experience-highlights font-roboto-s">
          ${experience.highlights
            .map((item) => `<li><i class="fa-solid fa-circle"></i><span>${item}</span></li>`)
            .join("")}
        </ul>
      `;
      timelineContainer.appendChild(article);
    });
  }

  function bindCourseInteractions() {
    coursesContainer?.addEventListener("click", (event) => {
      const target = event.target.closest(".course");
      if (!target) return;
      const certificate = target.dataset.certificate;
      if (certificate) {
        window.open(certificate, "_blank", "noopener");
      }
    });

    coursesContainer?.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const target = event.target.closest(".course");
      if (!target) return;
      event.preventDefault();
      const certificate = target.dataset.certificate;
      if (certificate) {
        window.open(certificate, "_blank", "noopener");
      }
    });
  }

  function updateTextContent(mode) {
    textTargets.forEach((element) => {
      const key = element.getAttribute("data-content-key");
      if (!key) return;

      const value = textContentByMode[mode][key];
      if (typeof value === "string") {
        element.innerHTML = value;
      }
    });
  }

  function updateModeButtons(mode) {
    modeButtons.forEach((button) => {
      const isActive = button.dataset.mode === mode;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function applyMode(mode) {
    if (mode === currentMode) return;
    currentMode = mode;

    const isDesign = mode === "design";
    body.classList.toggle("theme-design", isDesign);
    body.classList.toggle("theme-developer", !isDesign);

    updateModeButtons(mode);
    updateTextContent(mode);
    renderFormations(mode);
    renderCourses(mode);
    renderExperiences(mode);
    updateMetaTags(mode);

    document.dispatchEvent(new CustomEvent("modeChanged", { detail: { mode } }));
  }

  function initialize() {
    body.classList.add("theme-design");
    body.classList.remove("theme-developer");

    bindCourseInteractions();
    updateModeButtons(currentMode);
    updateTextContent(currentMode);
    renderFormations(currentMode);
    renderCourses(currentMode);
    renderExperiences(currentMode);
    updateMetaTags(currentMode);

    modeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const mode = button.dataset.mode;
        if (mode) {
          applyMode(mode);
        }
      });
    });

    window.getCurrentMode = () => currentMode;
    window.setPortfolioMode = applyMode;

    document.dispatchEvent(new CustomEvent("modeChanged", { detail: { mode: currentMode } }));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    initialize();
  }
})();
