document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Efecto Scroll en la barra de navegación
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Menú Hamburguesa para Móviles
  const mobileToggle = document.getElementById('mobile-toggle');
  const navbar = document.querySelector('.navbar');

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      navbar.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (navbar.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });
  }

  // Cerrar menú al hacer clic en un enlace de la navegación
  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
      if (mobileToggle) {
        const icon = mobileToggle.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });
  });

  // 3. Scroll Reveal Animations (Intersection Observer)
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Opcional: deja de observar una vez animado
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });
});