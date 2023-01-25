import cart from './add-to-cart.js';
import {increaseQuantity , decreaseQuantity} from './increase-decrease.js';

const cartItems = document.querySelector(".cart-items");

function displayCartItems() {
    cartItems.innerHTML = "";
    cart.forEach( (product) => {
        cartItems.innerHTML += `
        <div class="cart-item">
            <h3>${product.manufacturer}</h3>
            <div class="added-item">
                <div class="item-details">
                    <p>${product.name}</p>
                    <div class="price product-subtotal">${product.price}</div>
                    <input type="number" class="quantity" value=${product.quantity}></input>
                    <div class="add-remove"><button class="more" id=${product.id}>+</button><button class="less" id=${product.id}>-</button></div>
                </div>
                <button class="remove-item"><i class="ph-trash-bold"></i></button>
            </div>
            <div class="subtotal">Total:</div>
        </div>
        `;
    });

    const moreBtns = document.querySelectorAll(".more");
    moreBtns.forEach(moreBtn => {
        moreBtn.addEventListener("click", increaseQuantity);
    });

    const lessBtns = document.querySelectorAll(".less");
    lessBtns.forEach(lessBtn => {
        lessBtn.addEventListener("click", decreaseQuantity);
    });
};

export {displayCartItems};