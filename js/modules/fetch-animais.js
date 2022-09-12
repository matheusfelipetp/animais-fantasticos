import AnimaNumbers from './anima-numbers.js';

export default function initFetchAnimais(url, target) {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('number-animal');

    div.innerHTML = `<h3>${animal.specie}</h3>
    <span data-number>${animal.total}</span>`;

    return div;
  }

  const numerosGrid = document.querySelector(target);
  function fillAnimals(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animaAnimalsNumbers() {
    const animaNumbers = new AnimaNumbers(
      '[data-number]',
      'active',
      '.numbers',
    );
    animaNumbers.init();
  }

  async function fetchAnimais() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      animaisJSON.forEach((elem) => fillAnimals(elem));
      animaAnimalsNumbers();
    } catch (erro) {
      console.log(erro);
    }
  }

  return fetchAnimais();
}
