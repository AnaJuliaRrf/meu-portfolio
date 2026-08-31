/**
 * Ana Julia — Portfólio
 * Interações: menu mobile, navbar no scroll, reveal on scroll, link ativo.
 * JavaScript vanilla, sem dependências externas.
 */

(function () {
  'use strict';

  /* ---------- Ano dinâmico no rodapé ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---------- Navbar: sombra/fundo ao rolar ---------- */
  var navbar = document.getElementById('navbar');
  var lastKnownScroll = 0;

  function updateNavbar() {
    if (!navbar) return;
    if (window.scrollY > 12) {
      navbar.classList.add('shadow-sm', 'border-line', 'bg-paper/95');
    } else {
      navbar.classList.remove('shadow-sm', 'border-line', 'bg-paper/95');
    }
  }

  window.addEventListener('scroll', function () {
    lastKnownScroll = window.scrollY;
    window.requestAnimationFrame(updateNavbar);
  }, { passive: true });

  updateNavbar();

  /* ---------- Menu mobile ---------- */
  var menuToggle = document.getElementById('menu-toggle');
  var mobileMenu = document.getElementById('mobile-menu');
  var iconOpen = document.getElementById('icon-open');
  var iconClose = document.getElementById('icon-close');

  function setMenuState(isOpen) {
    if (!mobileMenu || !menuToggle) return;
    mobileMenu.classList.toggle('hidden', !isOpen);
    iconOpen.classList.toggle('hidden', isOpen);
    iconClose.classList.toggle('hidden', !isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.contains('hidden');
      setMenuState(isOpen);
    });
  }

  // Fecha o menu mobile ao clicar em um link
  document.querySelectorAll('.mobile-link').forEach(function (link) {
    link.addEventListener('click', function () {
      setMenuState(false);
    });
  });

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- Link ativo na navbar conforme a seção visível ---------- */
  var sections = document.querySelectorAll('main section[id]');
  var navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  function setActiveLink(id) {
    navLinks.forEach(function (link) {
      var isActive = link.getAttribute('href') === '#' + id;
      link.classList.toggle('is-active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  if ('IntersectionObserver' in window && sections.length) {
    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach(function (section) { sectionObserver.observe(section); });
  }
})();
