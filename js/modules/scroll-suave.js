export default function initScrollSmooth() {
  const links = document.querySelectorAll('[data-menu="smooth"] a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  links.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
