import { gems } from '../gems-data.js';
import { findById, createTableRow, calOrderTotal } from '../utils.js';
import { getCart } from '../local-storage-utils.js';

const button = document.getElementById('submit');

const cart = getCart();

const table = document.querySelector('table');

for (let cartItem of cart) {
    const matchingGem = findById(gems, cartItem.id);

    const tr = createTableRow(cartItem, matchingGem);

    table.append(tr);
}

const sumTotalRow = calOrderTotal(cart, gems);

table.append(sumTotalRow);

button.addEventListener('click', () => {
    const cart = getCart();

    alert(JSON.stringify(cart));

    localStorage.clear();

    window.location = '/';
});