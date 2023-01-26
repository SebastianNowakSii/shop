// import {increaseQuantity , decreaseQuantity} from './increase-decrease.js';
import {updateCart} from './update-cart.js';

let cart = [];

const cartItems = document.querySelector(".cart-items");

function displayCartItems() {
    cartItems.innerHTML = "";
    cart.forEach( (product) => {
        let totalPrice = (product.price) * (product.quantity);
        let subtotal = totalPrice * cart.length;
        cartItems.innerHTML += `
        <div class="cart-item">
            <h3>${product.manufacturer}</h3>
            <div class="added-item">
                <div class="item-details">
                    <p>${product.name}</p>
                    <div class="price product-subtotal">${totalPrice.toFixed(2)}</div>
                    <input type="number" class="quantity" value=${product.quantity}></input>
                    <div class="add-remove"><button class="more" onclick="changeQuantity('plus', ${product.id})">+</button><button class="less" onclick="changeQuantity('minus', ${product.id})">-</button></div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${product.id})"><i class="ph-trash-bold"></i></button>
            </div>
            <div class="subtotal">Total: ${subtotal.toFixed(2)} $</div>
        </div>
        `;
    });
};

function changeQuantity(action, id) {
    cart = cart.map((product) => {
        let quantity = product.quantity;
        if (product.id === id) {
            if (action === "minus" && product.quantity > 1) {
                quantity--
            } else if (action === "plus"){
                quantity++;
            }
        }
        return {
            ...product,
            quantity,
        };
    });
    updateCart();
};

function removeFromCart(id) {
    cart = cart.filter((item) => item.id !== id);

    updateCart();
};


window.changeQuantity = changeQuantity;
window.removeFromCart = removeFromCart;


export {displayCartItems};
export default cart;
