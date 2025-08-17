// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const btn = document.querySelector('.nav__toggle');
const menu = document.querySelector('.nav__links');
if (btn && menu) {
  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  // Close menu on link click (mobile)
  menu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => menu.classList.remove('open'))
  );
}

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
