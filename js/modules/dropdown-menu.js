import outsideClick from './outside-click.js';

export default function initDropDownMenu() {
  const dropDownMenus = document.querySelectorAll('[data-dropdown]');

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');

    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  }

  dropDownMenus.forEach((item) => {
    ['touchstart', 'click'].forEach((userEvent) => {
      item.addEventListener(userEvent, handleClick);
    });
  });
}
