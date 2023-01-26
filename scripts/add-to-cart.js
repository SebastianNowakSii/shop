import products from './products.js';
import {updateCart} from './update-cart.js';
import cart from './cart.js';


// let cart = [];

function addToCart() {
    console.log('it works');
    if(cart.some((cartItem) => cartItem.id == this.id)) {
        alert("Product already in cart!");
    } else {
        let cartItem = products.find((product) => product.id == this.id);
        cart.push({
            ...cartItem,
            quantity: 1,
        });
    };
    updateCart();
};

export {addToCart};
export default cart;