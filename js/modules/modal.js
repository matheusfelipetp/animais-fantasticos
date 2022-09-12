export default class Modal {
  constructor(btnOpen, btnClose, container) {
    this.buttonOpen = document.querySelector(btnOpen);
    this.buttonClose = document.querySelector(btnClose);
    this.containerModal = document.querySelector(container);
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutModal = this.clickOutModal.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  clickOutModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal(event);
    }
  }

  addModalEvents() {
    this.buttonOpen.addEventListener('click', this.eventToggleModal);
    this.buttonClose.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.clickOutModal);
  }

  init() {
    if (this.buttonOpen && this.buttonClose && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
