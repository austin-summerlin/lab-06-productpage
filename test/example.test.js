// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { gems } from '../gems-data.js';
import { findById } from '../utils.js';
// import { calcItemTotal } from '../utils';
// import { calOrderTotal } from '../utils';

const test = QUnit.test;

test('will take in an array and id and returns the matching item', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected =
    {
        id: 'itemAmethyst',
        name: 'Amethyst',
        image: '../assets/amethyst.PNG',
        description: 'Purple',
        category: 'Aquarius',
        price: 75,
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(gems, 'itemAmethyst');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(expected, actual);
});

