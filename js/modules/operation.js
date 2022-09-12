export default class Operation {
  constructor(operation, activeClass) {
    this.operation = document.querySelector(operation);
    this.activeClass = activeClass;
  }

  dataOperation() {
    this.daysWeek = this.operation.dataset.week.split(',').map(Number);
    this.hourWeek = this.operation.dataset.hour.split(',').map(Number);
  }

  dataNow() {
    this.currentDate = new Date();
    this.currentDay = this.currentDate.getDay();
    this.currentHour = this.currentDate.getUTCHours() - 3;
  }

  isOpen() {
    const dayOpen = this.daysWeek.indexOf(this.currentDay) !== -1;
    const hourOpen = this.currentHour >= this.hourWeek[0] && this.currentHour < this.hourWeek[1];

    return dayOpen && hourOpen;
  }

  activateOpen() {
    if (this.isOpen()) {
      this.operation.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.operation) {
      this.dataOperation();
      this.dataNow();
      this.activateOpen();
    }
    return this;
  }
}
