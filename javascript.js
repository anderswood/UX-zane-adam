// const firstScreen = document.querySelector('body');
const backArrow = document.querySelector('.back-arrow');
const screen1 = document.querySelector('.screen1-container');
const screen2 = document.querySelector('.screen2-container');

screen1.addEventListener('click', () => {
  if(screen1.className.indexOf('inactive') === -1) {
    toggleClasses();
  }
})

backArrow.addEventListener('click', () => {
  if (screen2.className.indexOf('inactive') === -1) {
    toggleClasses();
  }
})

const toggleClasses = () => {
  screen1.classList.toggle('active')
  screen1.classList.toggle('inactive')
  screen2.classList.toggle('active')
  screen2.classList.toggle('inactive')
}
