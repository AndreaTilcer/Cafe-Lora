import './style.css';

console.log('funguju!');

document.querySelector('#nav-btn').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('nav-closed');
});

const zabalMenu = document.querySelectorAll('nav a');

for (let i = 0; i < zabalMenu.length; i += 1) {
  zabalMenu[i].addEventListener('click', () => {
    document.querySelector('nav').classList.add('nav-closed');
  });
}
