import './style.css';
import { CoffeeItems } from './Layer/index.js';

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

let ordered = false;

const objednatBtn = document.querySelector('.order-btn');
objednatBtn.addEventListener('click', () => {
  if (ordered === false) {
    objednatBtn.textContent = 'Zrušit';
    document.querySelector('.drink__cup').classList.add('drink__cup--selected');
    ordered = true;
    console.log(ordered);
  } else {
    objednatBtn.textContent = 'Objednat';
    document
      .querySelector('.drink__cup')
      .classList.remove('drink__cup--selected');
    ordered = false;
    console.log(ordered);
  }
});

const coffees = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: 'fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

const coffeeElm = document.querySelector('.drink__info');
for (let i = 0; i < coffees.length; i += 1) {
  coffeeElm.innerHTML += CoffeeItems(coffees[i]);
}
