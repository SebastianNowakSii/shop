import products from './products.js';
import {updateCart} from './update-cart.js';
import cart from './cart.js';


function addToCart(id) {
    if(cart.some((cartItem) => cartItem.id === id)) {
        changeQuantity('plus', id);
    } else {
        const cartItem = products.find((product) => product.id === id);
        cart.push({
            ...cartItem,
            quantity: 1,
        });
    }
    updateCart();
};


export {addToCart};
export default cart;

window.addToCart = addToCart;