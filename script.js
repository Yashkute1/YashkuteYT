const menuToggle = document.querySelector('.menu-toggle');
const navGroup = document.querySelector('.nav-group');
const yearEl = document.querySelector('#year');
const form = document.querySelector('#inquiry-form');
const thankYouSection = document.querySelector('#thank-you');

if (menuToggle && navGroup) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navGroup.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navGroup.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navGroup.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (form && thankYouSection) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.reset();
    thankYouSection.hidden = false;
    thankYouSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}
