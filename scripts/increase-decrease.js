import cart from './add-to-cart.js';
import {updateCart} from './update-cart.js';

// const moreBtns = document.querySelectorAll(".more");
// const lessBtns = document.querySelectorAll(".less");

// moreBtns.forEach(moreBtn => {
//     moreBtn.addEventListener("click", increaseQuantity);
// });

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


// lessBtns.forEach(lessBtn => {
//     lessBtn.addEventListener("click", decreaseQuantity);
// });

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