const CALENDLY_URL = 'https://calendly.com/mroserov1/30min?hide_gdpr_banner=1&primary_color=113c39';
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

// nav
const nav = document.getElementById('nav');
const menu = document.getElementById('menu');
const burger = document.querySelector('.burger');
const onScroll = () => nav.classList.toggle('scrolled', scrollY > 20);
addEventListener('scroll', onScroll, { passive: true });
onScroll();
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('open');
  burger.setAttribute('aria-expanded', false);
}));

// Calendly popup; si el script no cargó, abre la página en otra pestaña
document.querySelectorAll('.js-calendly').forEach(btn => btn.addEventListener('click', e => {
  if (window.Calendly) {
    e.preventDefault();
    Calendly.initPopupWidget({ url: CALENDLY_URL });
  }
}));

// reveal
const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.rv').forEach((el, i) => {
  el.style.transitionDelay = (i % 4) * 70 + 'ms';
  io.observe(el);
});

// contadores de estadísticas
const counters = document.querySelectorAll('.count');
const countIo = new IntersectionObserver(entries => entries.forEach(e => {
  if (!e.isIntersecting) return;
  countIo.unobserve(e.target);
  const el = e.target, to = +el.dataset.to, start = performance.now(), dur = 1600;
  const tick = now => {
    const t = Math.min(1, (now - start) / dur);
    el.textContent = Math.round(to * (1 - Math.pow(1 - t, 3)));
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}), { threshold: .6 });
if (!reduced) counters.forEach(el => { el.textContent = '0'; countIo.observe(el); });

// parallax de tarjetas de servicio
const pItems = [...document.querySelectorAll('[data-parallax-speed]')];
if (!reduced && pItems.length) {
  const container = document.querySelector('[data-parallax-container]');
  const max = +container.dataset.parallaxMax || 18;
  let ticking = false;
  const update = () => {
    if (innerWidth < 640) { pItems.forEach(el => el.style.transform = ''); ticking = false; return; }
    const r = container.getBoundingClientRect();
    const progress = (innerHeight - r.top) / (innerHeight + r.height) - .5;
    pItems.forEach(el => {
      const y = Math.max(-max, Math.min(max, -progress * el.dataset.parallaxSpeed * 4));
      el.style.transform = `translate3d(0,${y}px,0)`;
    });
    ticking = false;
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  addEventListener('resize', update);
  update();
}

// contador y barra del proceso sticky
const steps = [...document.querySelectorAll('.process-item')];
const counter = document.getElementById('process-current');
const bar = document.querySelector('.process-track span');
if (steps.length && counter) {
  const setStep = () => {
    let current = 0;
    steps.forEach((s, i) => { if (s.getBoundingClientRect().top <= innerHeight * .45) current = i; });
    counter.textContent = current + 1;
    bar.style.width = ((current + 1) / steps.length * 100) + '%';
  };
  addEventListener('scroll', setStep, { passive: true });
  setStep();
}
