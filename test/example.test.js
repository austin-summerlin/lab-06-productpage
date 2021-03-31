// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { gems } from '../gems-data.js';
import { findById } from '../utils.js';


const test = QUnit.test;

test('will take in an array and id and returns the matching item', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(gems, 'id');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual);
});
