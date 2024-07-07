// Menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
let isOpen = false;

menuToggle.addEventListener('click', () => {
  isOpen = !isOpen;
  mobileMenu.style.transform = isOpen ? 'translateX(0)' : 'translateX(100%)';
  menuToggle.src = isOpen ? '/asset/close-icon.png' : '/asset/humbergur-menu.png';
});

// Scroll event
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});