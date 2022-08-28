export default function initOperation() {
  const operation = document.querySelector('[data-week]');
  const daysWeek = operation.dataset.week.split(',').map(Number);
  const hourWeek = operation.dataset.hour.split(',').map(Number);

  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentHour = currentDate.getHours();
  const dayOpen = daysWeek.indexOf(currentDay) !== -1;
  const hourOpen = currentHour >= hourWeek[0] && currentHour < hourWeek[1];

  if (dayOpen && hourOpen) {
    operation.classList.add('open');
  }
}
