export function findById(array, id) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}

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


export function createTableRow(someCartItem, someGems) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdQuantity = document.createElement('td');

    tdName.textContent = someGems.name;
    tdQuantity.textContent = someCartItem.quantity;
    const total = someGems.price * someCartItem.quantity;

    const config = {
        currency: 'USD',
        style: 'currency',
    };

    const totalAsUSD = total.toLocaleString('en-US', config);
    tdPrice.textContent = totalAsUSD;

    tr.append(tdName, tdQuantity, tdPrice);

    return tr;
}

export function calOrderTotal(cartArray, gemsArray) {
    let sum = 0;

    for (let cartItem of cartArray) {
        const matchingGem = findById(gemsArray, cartItem.id);
        const lineItem = matchingGem.price * cartItem.quantity;

        sum = sum + lineItem;
    }

    const tr = document.createElement('tr');

    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    td3.textContent = `$${sum}.00`;

    tr.append(td1, td2, td3);

    return tr;

}