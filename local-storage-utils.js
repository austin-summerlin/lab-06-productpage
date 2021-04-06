import { findById } from './utils.js'; // import findById function
const CART = 'CART'; // magic string 

// create a function that will get our cart from local storage and stringify it and if there is no cart create one.
export function getCart() {
    const stringyCart = localStorage.getItem('CART');
    const parsedCart = JSON.parse(stringyCart);

    if (parsedCart) {
        return parsedCart;
    } else {
        return [];
    }
}

// create a function that will take strinified cart and place it in local storage
export function setCart(parsedCart) {
    const stringyCart = JSON.stringify(parsedCart);

    localStorage.setItem(CART, stringyCart);
}

// create a function that will take info from local storage and place it into the cart page
export function addToCart(productId) {
    const cart = getCart();
    const matchingItem = findById(cart, productId);

    if (matchingItem) {
        matchingItem.quantity++;
    } else {
        const item = {
            id: productId,
            quantity: 1,
        };
        cart.push(item);
    }
    setCart(cart);
}