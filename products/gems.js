import { gems } from '../gems-data.js';
import { makeGemLi } from '../utils.js';

const ul = document.querySelector('.gemList');

for (let gem of gems) {
    const li = makeGemLi(gem);
    ul.append(li);
}

const button = document.getElementById('cartButton');

button.addEventListener('click', () => {
    window.location.href = ('cart/index.html');
});