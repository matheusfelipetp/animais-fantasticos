export default function initAnimateScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  const halfWindow = window.innerHeight * 0.6;

  function animateScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - halfWindow;

      if (isSectionVisible < 0) {
        section.classList.add('active');
      } else if (section.classList.contains('active')) {
        section.classList.remove('active');
      }
    });
  }
  animateScroll();

  window.addEventListener('scroll', animateScroll);
}
