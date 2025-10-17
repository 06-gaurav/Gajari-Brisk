const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.site-nav ul');

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('open');
  });
}

const yearEl = document.getElementById('current-year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

document.addEventListener('click', (event) => {
  if (!navList || !navToggle) return;
  if (!navList.contains(event.target) && !navToggle.contains(event.target)) {
    navList.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});
