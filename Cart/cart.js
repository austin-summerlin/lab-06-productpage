import { gems } from '../gems-data.js';
import { makeGemLi } from '../utils.js';


const ul = document.querySelector('.gemList');

for (let gem of gems) {
    const li = makeGemLi(gem);
    ul.append(li);
}
