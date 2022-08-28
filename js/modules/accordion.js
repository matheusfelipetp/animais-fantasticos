export default function initAccordion() {
  const accordionList = document.querySelectorAll(
    "[data-anime='accordion'] dt",
  );

  accordionList[0].classList.add('active');
  accordionList[0].nextElementSibling.classList.add('active');

  function activeAccordion() {
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
  }

  accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion);
  });
}
