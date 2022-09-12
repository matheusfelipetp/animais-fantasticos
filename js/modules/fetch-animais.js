import AnimaNumbers from './anima-numbers.js';

export default function initFetchAnimais() {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('number-animal');

    div.innerHTML = `<h3>${animal.specie}</h3>
    <span data-number>${animal.total}</span>`;

    return div;
  }

  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      const numerosGrid = document.querySelector('.numbers-grid');

      animaisJSON.forEach((elem) => {
        const divAnimal = createAnimal(elem);
        numerosGrid.appendChild(divAnimal);
      });
      const animaNumbers = new AnimaNumbers(
        '[data-number]',
        'active',
        '.numbers',
      );
      animaNumbers.init();
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchAnimais('./animaisapi.json');
}
