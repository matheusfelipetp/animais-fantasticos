export default class AnimaNumbers {
  constructor(numbers, observerClass, observerTarget) {
    this.numbers = document.querySelectorAll(numbers);
    this.observerClass = observerClass;
    this.observerTarget = document.querySelector(observerTarget);
    this.handleMutation = this.handleMutation.bind(this);
  }

  static incrementNumbers(item) {
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
  }

  animaNumbers() {
    this.numbers.forEach((item) => AnimaNumbers.incrementNumbers(item));
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumbers();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numbers.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
