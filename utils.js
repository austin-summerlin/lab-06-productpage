export function makeGemLi(gems) {
    const li = document.createElement('li');

    li.classList.add('gemstones');
    li.style.color = gems.description;

    const divName = document.createElement('div');

    divName.classList.add('name');
    divName.textContent = gems.name;

    const image = document.createElement('img');

    image.src = gems.image;

    const divDescription = document.createElement('div');

    divDescription.classList.add('description');
    divDescription.textContent = gems.description;
    divDescription.color = gems.description;

    const divCategory = document.createElement('div');

    divCategory.classList.add('category');
    divCategory.textContent = gems.category;

    const divPrice = document.createElement('div');

    divPrice.textContent = gems.price;

    const button = document.createElement('button');

    button.textContent = 'Purchase';

    li.append(divName, image, divDescription, divCategory, divPrice, button);

    return li;
}