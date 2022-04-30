import { Layer } from '../Layer/index.js';

export const Drink = (props) => {
  const { name, layers, image } = props;

  const drinkDiv = document.createElement('div');
  drinkDiv.classList.add('drink');
  drinkDiv.innerHTML = `
  <div class="drink__product">
    <div class="drink__cup">
      <img
        src="${image}"
      />
    </div>
    <div class="drink__info">
      <h3>${name}</h3>
      </div>
      </div>
      <div class="drink__controls">
      <button class="order-btn">Objednat</button>
    </div>  
  `;
  const drinkInfo = drinkDiv.querySelector('.drink__info');
  for (let i = 0; i < layers.length; i += 1) {
    drinkInfo.innerHTML += Layer(layers[i]);
  }
  return drinkDiv;
};

const layers = [
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
