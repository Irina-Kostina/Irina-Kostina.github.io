// Track mouse inside the photo and move the glow
const wrap = document.querySelector('.photo-wrap');
const glow = document.querySelector('.photo-glow');

if (wrap && glow) {
  const update = (e) => {
    const r = wrap.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    glow.style.setProperty('--mx', `${x}%`);
    glow.style.setProperty('--my', `${y}%`);
  };

  // smooth follow (optional)
  let tx = 50, ty = 50, ax = 50, ay = 50;
  function tick() {
    ax += (tx - ax) * 0.12;
    ay += (ty - ay) * 0.12;
    glow.style.setProperty('--mx', `${ax}%`);
    glow.style.setProperty('--my', `${ay}%`);
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  wrap.addEventListener('pointermove', (e) => {
    const r = wrap.getBoundingClientRect();
    tx = ((e.clientX - r.left) / r.width) * 100;
    ty = ((e.clientY - r.top) / r.height) * 100;
  });
  wrap.addEventListener('pointerleave', () => { tx = 50; ty = 50; });
}





// // Set current year in footer
// document.getElementById('year').textContent = new Date().getFullYear();

// // Mobile nav toggle
// const btn = document.querySelector('.nav__toggle');
// const menu = document.querySelector('.nav__links');
// if (btn && menu) {
//   btn.addEventListener('click', () => {
//     const isOpen = menu.classList.toggle('open');
//     btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
//   });
//   // Close menu on link click (mobile)
//   menu.querySelectorAll('a').forEach(a =>
//     a.addEventListener('click', () => menu.classList.remove('open'))
//   );
// }

// // Reveal on scroll
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(e => {
//     if (e.isIntersecting) {
//       e.target.classList.add('in');
//       observer.unobserve(e.target);
//     }
//   });
// }, { threshold: 0.2 });

// document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
