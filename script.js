/* =========================================================
   SCRIPT.JS — Mohamed El Alaoui Portfolio
   Sections:
   1. Language switcher (FR / AR, no reload)
   2. Mobile navbar menu
   3. Footer year
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* -----------------------------------------
     1. LANGUAGE SWITCHER
     Every translatable element has:
       data-fr="French text"
       data-ar="Arabic text"
     Switching language swaps textContent and
     toggles the <html> lang / dir attributes.
  ----------------------------------------- */
  const langButtons = document.querySelectorAll('.lang-switch__btn');
  const translatable = document.querySelectorAll('[data-fr][data-ar]');
  const htmlEl = document.documentElement;

  function setLanguage(lang) {
    translatable.forEach(el => {
      const text = lang === 'ar' ? el.getAttribute('data-ar') : el.getAttribute('data-fr');
      if (text !== null) el.textContent = text;
    });

    htmlEl.setAttribute('lang', lang);
    htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    langButtons.forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.lang === lang);
    });

    localStorage.setItem('portfolio-lang', lang);
  }

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // Restore saved language preference, default is French (set in HTML)
  try {
    const savedLang = localStorage.getItem('portfolio-lang');
    if (savedLang === 'ar' || savedLang === 'fr') setLanguage(savedLang);
  } catch (e) {
    // localStorage unavailable — page stays in default French
  }

  /* -----------------------------------------
     2. MOBILE NAVBAR MENU
  ----------------------------------------- */
  const burgerBtn = document.getElementById('burgerBtn');
  const navLinks = document.getElementById('navLinks');

  if (burgerBtn && navLinks) {
    burgerBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('is-open');
      burgerBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('is-open');
        burgerBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* -----------------------------------------
     3. FOOTER YEAR
  ----------------------------------------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
