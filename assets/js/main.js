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

// Calendly se carga bajo demanda: pesa ~10 MB y la mayoría de visitas no lo usa
let calendlyReady;
const loadCalendly = () => calendlyReady ??= new Promise((resolve, reject) => {
  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = 'https://assets.calendly.com/assets/external/widget.css';
  document.head.append(css);
  const s = document.createElement('script');
  s.src = 'https://assets.calendly.com/assets/external/widget.js';
  s.onload = () => resolve(window.Calendly);
  s.onerror = () => { calendlyReady = null; reject(); };
  document.head.append(s);
});

// popup; si no carga en 4 s, se abre la página de Calendly como respaldo
document.querySelectorAll('.js-calendly').forEach(btn => btn.addEventListener('click', e => {
  if (e.metaKey || e.ctrlKey || e.shiftKey) return;
  e.preventDefault();
  const fallback = setTimeout(() => location.assign(btn.href), 4000);
  loadCalendly()
    .then(C => { clearTimeout(fallback); C.initPopupWidget({ url: CALENDLY_URL }); })
    .catch(() => { clearTimeout(fallback); location.assign(btn.href); });
}));

// calendario integrado: se precarga cuando la página termina y el navegador queda libre;
// el observer cubre a quien llega a #contacto antes de eso. Con ahorro de datos o red lenta solo carga al acercarse.
const embed = document.getElementById('calendly-embed');
let embedStarted = false;
const startEmbed = () => {
  if (embedStarted || !embed) return;
  embedStarted = true;
  loadCalendly()
    .then(C => C.initInlineWidget({ url: CALENDLY_URL, parentElement: embed }))
    .catch(() => { embedStarted = false; });
};
if (embed) {
  const embedIo = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    embedIo.disconnect();
    startEmbed();
  }, { rootMargin: '600px 0px' });
  embedIo.observe(embed);
}

const conn = navigator.connection;
const slowNet = conn && (conn.saveData || /2g|3g/.test(conn.effectiveType));
const whenIdle = fn => 'requestIdleCallback' in window ? requestIdleCallback(fn, { timeout: 3000 }) : setTimeout(fn, 1500);
const afterLoad = fn => document.readyState === 'complete' ? whenIdle(fn) : addEventListener('load', () => whenIdle(fn), { once: true });

afterLoad(() => {
  // imágenes diferidas (logos, insignias, portafolio) a caché antes de que el usuario llegue
  document.querySelectorAll('img[loading="lazy"]').forEach(img => { img.loading = 'eager'; });
  if (!slowNet) startEmbed();
});

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
