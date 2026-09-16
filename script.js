const menuToggle = document.querySelector('.menu-toggle');
const navTabs = document.querySelector('.nav-tabs');
const navLinks = document.querySelectorAll('.nav-tab');

menuToggle?.addEventListener('click', () => {
  const open = navTabs.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navTabs.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const sections = document.querySelectorAll('main section[id]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

sections.forEach(section => observer.observe(section));

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value.trim();

  const text = `Hi ProFix, my name is ${name}.%0A%0AService needed: ${service}%0A%0ADescription: ${message}`;
  window.open(`https://wa.me/27716288488?text=${text}`, '_blank', 'noopener');
});
