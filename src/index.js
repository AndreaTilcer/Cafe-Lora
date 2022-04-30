import './style.css';
import { Drink } from './Drink/index.js';

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

/*
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
*/

const drinks = [
  {
    id: 'romano',
    name: 'Romano',
    ordered: false,
    layers: [
      {
        color: '#fbdf5b',
        label: 'citrón',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
    image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/romano.png',
  },
];

const coffeeElm = document.querySelector('.drinks-list');
for (let i = 0; i < drinks.length; i += 1) {
  coffeeElm.appendChild(Drink(drinks[i]));
}
