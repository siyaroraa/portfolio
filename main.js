// Header scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

function handleScroll() {
  const currentScroll = window.scrollY;
  if (currentScroll > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  lastScroll = currentScroll;
}

window.addEventListener('scroll', handleScroll, { passive: true });

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('is-open');
  navToggle.classList.toggle('is-active');
});
