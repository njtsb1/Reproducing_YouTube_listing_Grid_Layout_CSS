(function () {
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const langSelect = document.getElementById('langSelect');

  // Translations
  const translations = {
    "en-US": {
      brand: "YouGrid",
      "nav.home": "Home",
      "nav.shorts": "Shorts",
      "nav.subs": "Subscriptions",
      "nav.library": "Library",
      "video1.title": "How to start programming with what you have",
      "video1.channel": "Dev Beginner",
      "video1.stats": "67K views • 4 years ago",
      "video2.title": "Diversity in technology first steps",
      "video2.channel": "Tech Talks",
      "video2.stats": "66K views • 8 months ago",
      "video3.title": "Roblox programming course",
      "video3.channel": "Game Dev",
      "video3.stats": "64K views • 3 years ago",
      "video4.title": "Business Model Canvas guide",
      "video4.channel": "Business School",
      "video4.stats": "59K views • 6 years ago",
      "video5.title": "The future of education with AI",
      "video5.channel": "EduTech",
      "video5.stats": "47K views • 1 month ago",
      "video6.title": "Hired season 2 trailer",
      "video6.channel": "Channel X",
      "video6.stats": "40K views • 4 years ago",
      footer: "© 2026 YouGrid Demo. All rights reserved."
    },
    "pt-BR": {
      brand: "YouGrid",
      "nav.home": "Início",
      "nav.shorts": "Shorts",
      "nav.subs": "Inscrições",
      "nav.library": "Biblioteca",
      "video1.title": "Comece a programar com o que você tem",
      "video1.channel": "Dev Iniciante",
      "video1.stats": "67 mil visualizações • 4 anos",
      "video2.title": "Diversidade na tecnologia primeiros passos",
      "video2.channel": "Tech Talks",
      "video2.stats": "66 mil visualizações • 8 meses",
      "video3.title": "Formação Programação Roblox",
      "video3.channel": "Game Dev",
      "video3.stats": "64 mil visualizações • 3 anos",
      "video4.title": "Guia Business Model Canvas",
      "video4.channel": "Escola de Negócios",
      "video4.stats": "59 mil visualizações • 6 anos",
      "video5.title": "O futuro da educação com IA",
      "video5.channel": "EduTech",
      "video5.stats": "47 mil visualizações • 1 mês",
      "video6.title": "Trailer Hired temporada 2",
      "video6.channel": "Canal X",
      "video6.stats": "40 mil visualizações • 4 anos",
      footer: "© 2026 YouGrid Demo. Todos os direitos reservados."
    },
    "es-ES": {
      brand: "YouGrid",
      "nav.home": "Inicio",
      "nav.shorts": "Shorts",
      "nav.subs": "Suscripciones",
      "nav.library": "Biblioteca",
      "video1.title": "Comienza a programar con lo que tienes",
      "video1.channel": "Dev Principiante",
      "video1.stats": "67K vistas • 4 años",
      "video2.title": "Diversidad en tecnología primeros pasos",
      "video2.channel": "Tech Talks",
      "video2.stats": "66K vistas • 8 meses",
      "video3.title": "Formación Programación Roblox",
      "video3.channel": "Game Dev",
      "video3.stats": "64K vistas • 3 años",
      "video4.title": "Guía Business Model Canvas",
      "video4.channel": "Escuela de Negocios",
      "video4.stats": "59K vistas • 6 años",
      "video5.title": "El futuro de la educación con IA",
      "video5.channel": "EduTech",
      "video5.stats": "47K vistas • 1 mes",
      "video6.title": "Trailer Hired temporada 2",
      "video6.channel": "Canal X",
      "video6.stats": "40K vistas • 4 años",
      footer: "© 2026 YouGrid Demo. Todos los derechos reservados."
    }
  };

  // Initialization
  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      themeToggle.setAttribute('aria-pressed', 'true');
    } else {
      root.setAttribute('data-theme', 'light');
      themeToggle.setAttribute('aria-pressed', 'false');
    }
    localStorage.setItem('yg-theme', theme);
  }

  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    const dict = translations[lang] || translations['en-US'];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });
    localStorage.setItem('yg-lang', lang);
  }

  // Events
  themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });

  langSelect.addEventListener('change', (e) => {
    applyLanguage(e.target.value);
  });

  // Load preferences
  const savedTheme = localStorage.getItem('yg-theme') || 'light';
  const savedLang = localStorage.getItem('yg-lang') || 'en-US';
  applyTheme(savedTheme);
  langSelect.value = savedLang;
  applyLanguage(savedLang);

  // Keyboard accessibility: Enter opens "video" (this is just a pretense).
  document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.classList.add('active');
        // Simula ação: foco no título
        const title = card.querySelector('.title');
        if (title) title.focus();
        setTimeout(()=>card.classList.remove('active'), 300);
      }
    });
  });

})();
