const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() { menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open navigation'); nav.classList.remove('open'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); nav.classList.toggle('open', open); });
nav.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
const slides = [
 { image: '/assets/han.jpg', alt: 'Blue BYD HAN electric sedan beside contemporary stone architecture', eyebrow: 'THE ART OF ELECTRIC', title: 'Electric by nature.<br>Extraordinary<br>by design.', description: 'Meet the BYD HAN. A new expression of electric luxury.', model: 'BYD HAN', tagline: 'Pure electric. Pure possibility.', url: 'https://www.byd.com/us/car/han-ev' },
 { image: '/assets/u9.jpg', alt: 'Red YANGWANG U9 performance cars on a racetrack at sunset', eyebrow: 'BEYOND THE LIMITS', title: 'Performance.<br>Without<br>precedent.', description: 'YANGWANG U9 Xtreme. Go beyond the extraordinary.', model: 'YANGWANG U9 Xtreme', tagline: 'Engineered to go beyond.', url: '#performance' }
];
let current = 0;
function showSlide(index) { current = index; const slide = slides[index]; const hero = document.querySelector('.hero'); const image = hero.querySelector('.hero-image'); image.src = slide.image; image.alt = slide.alt; hero.querySelector('.eyebrow').lastChild.textContent = ` ${slide.eyebrow}`; hero.querySelector('h1').innerHTML = slide.title; hero.querySelector('.hero-description').textContent = slide.description; hero.querySelector('.button').href = slide.url; hero.querySelector('.model-signature strong').textContent = slide.model; hero.querySelector('.model-signature>span:first-child').textContent = `0${index + 1} / 02`; hero.querySelector('.model-signature>span:last-child').textContent = slide.tagline; document.querySelectorAll('.slide').forEach((button, i) => { button.classList.toggle('active', i === index); button.setAttribute('aria-pressed', String(i === index)); }); }
document.querySelectorAll('.slide').forEach(button => button.addEventListener('click', () => showSlide(Number(button.dataset.slide))));
document.querySelector('.next-slide').addEventListener('click', () => showSlide((current + 1) % slides.length));
const dialog = document.querySelector('#inquiry-dialog');
document.querySelector('#contact-form').addEventListener('submit', event => { event.preventDefault(); dialog.showModal(); });
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
document.querySelector('#year').textContent = new Date().getFullYear();
