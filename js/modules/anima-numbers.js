export default function initAnimaNumbers() {
  const numbers = document.querySelectorAll('[data-number]');

  function animaNumbers() {
    numbers.forEach((item) => {
      const total = +item.innerText;
      const incremento = Math.floor(total / 100);

      let start = 0;
      const timer = setInterval(() => {
        start += incremento;

        item.innerText = start;

        if (start > total) {
          item.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  let observer;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('active')) {
      observer.disconnect();
      animaNumbers();
    }
  }
  observer = new MutationObserver(handleMutation);

  const observerTarget = document.querySelector('.numbers');

  observer.observe(observerTarget, { attributes: true });
}
