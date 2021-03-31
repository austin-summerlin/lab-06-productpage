import { gems } from '../gems-data.js';
import { findById } from '../utils.js';
import { cart } from './cart-data.js';
import { createTableRow } from '../utils.js';
// import { calOrderTotal } from '../utils.js';

const table = document.querySelector('table');

for (let cartItem of cart) {
    const matchingGem = findById(gems, cartItem.id);


    const tr = createTableRow(cartItem, matchingGem);

    table.append(tr);
}

    // const totalRow = calOrderTotal(cart, gems);

    // table.append(totalRow);

