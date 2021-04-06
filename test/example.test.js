// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { calItemTotal } from '../utils.js';
import { gems } from '../gems-data.js';
import { findById } from '../utils.js';

// import { createTableRow } from '../utils';


const test = QUnit.test;

test('will take in an array and id and returns the matching item', (expect) => {
    const expected =
    {
        id: 'itemAmethyst',
        name: 'Amethyst',
        image: '../assets/amethyst.png',
        description: 'Purple',
        category: 'Aquarius',
        price: 75,
    };
    const actual = findById(gems, 'itemAmethyst');

    expect.deepEqual(expected, actual);
});

test('will take in item quantity and price and give us the total', (expect) => {
    const itemPrice = 20;
    const itemQuantity = 3;
    const expected = 60;
    const actual = calItemTotal(itemPrice, itemQuantity);

    expect.equal(actual, expected);

});

test('will take in item quantity and price and give us the total', (expect) => {
    const itemPrice = 20;
    const itemQuantity = 3;
    const expected = 60;
    const actual = calItemTotal(itemPrice, itemQuantity);

    expect.equal(actual, expected);

});

