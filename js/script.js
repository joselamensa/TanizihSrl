// ── Scroll Reveal ──
const revealSelectors = [
  '.service-card',
  '.product-card',
  '.about-card',
  '.about-feature',
  '.contact-detail',
  '.brand-logo',
  '.client-cell',
  '.contact-form',
  '.section-title',
  '.section-label',
  '.section-desc'
];

document.querySelectorAll(revealSelectors.join(',')).forEach((el) => {
  el.classList.add('reveal');
});

// Stagger delays para elementos en grilla
['.service-card', '.product-card', '.about-card', '.client-cell', '.brand-logo'].forEach(sel => {
  document.querySelectorAll(sel).forEach((el, i) => {
    const siblings = el.parentElement.querySelectorAll(sel);
    const idx = [...siblings].indexOf(el);
    if (idx > 0) el.style.transitionDelay = `${idx * 0.07}s`;
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Hamburger Menu ──
const hamburger = document.getElementById('navHamburger');
const navMenu   = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMenu.classList.toggle('open');
});

navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
  });
});

// ── Formulario → WhatsApp ──
function sendToWhatsApp() {
  const name    = document.getElementById('nameInput').value.trim();
  const service = document.getElementById('serviceSelect').value;
  const message = document.getElementById('messageText').value.trim();

  let parts = [];
  if (name)    parts.push(`Hola, soy ${name}.`);
  else         parts.push('Hola!');
  if (service) parts.push(`Me interesa: ${service}.`);
  if (message) parts.push(message);

  const text = parts.join(' ');
  window.open(`https://wa.me/5491133473067?text=${encodeURIComponent(text)}`, '_blank');
}
