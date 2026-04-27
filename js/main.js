/* ── Cursor glow ──────────────────────────────────────────── */
const glow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top  = e.clientY + 'px';
});

/* ── Scroll reveal ────────────────────────────────────────── */
const revealEls      = document.querySelectorAll('.reveal, .team-card, .skill-item, .portfolio-card');
const staggerParents = document.querySelectorAll('.stagger-children');

const revealIO = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealIO.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

revealEls.forEach(el => revealIO.observe(el));

const staggerIO = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('triggered');
      staggerIO.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

staggerParents.forEach(el => staggerIO.observe(el));

/* ── Navbar background on scroll ─────────────────────────── */
const navEl = document.querySelector('nav');
window.addEventListener('scroll', () => {
  navEl.style.background = window.scrollY > 20
    ? 'rgba(13,13,18,0.85)'
    : 'rgba(13,13,18,0.6)';
}, { passive: true });

/* ── Active nav highlight ─────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navIO = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.style.color = '');
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active && !active.classList.contains('nav-cta')) {
        active.style.color = 'var(--text)';
      }
    }
  });
}, { threshold: 0.5 });

sections.forEach(s => navIO.observe(s));

/* ── Contact form ─────────────────────────────────────────── */
const form    = document.getElementById('contactForm');
const success = document.getElementById('formSuccess');

form.addEventListener('submit', e => {
  e.preventDefault();
  const btn = form.querySelector('.form-submit');
  btn.textContent = 'Wird gesendet …';
  btn.style.opacity = '0.7';

  // Formspree oder anderen Endpoint hier eintragen:
  // fetch('https://formspree.io/f/DEINE_ID', { method: 'POST', body: new FormData(form) })
  setTimeout(() => {
    form.querySelectorAll('input, textarea, select').forEach(el => el.value = '');
    btn.style.display = 'none';
    success.style.display = 'block';
  }, 1000);
});
