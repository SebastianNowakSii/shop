import cart from './add-to-cart.js';
import {updateCart} from './update-cart.js';


function increaseQuantity() {
    cart = cart.map((product) => {
        let quantity = product.quantity;
        if (product.id == this.id) {
                quantity++;
        }
        return {
            ...product,
            quantity,
        };
    });
    updateCart();
}


function decreaseQuantity() {
    cart = cart.map((product) => {
        let quantity = product.quantity;
        if (product.id == this.id) {
            if(quantity > 1 ) {
                quantity--;
            }
        }
        return {
            ...product,
            quantity,
        };
    });
    updateCart();
}

export {increaseQuantity , decreaseQuantity};