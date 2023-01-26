import {displayShopItems} from './shop.js';
import {addToCart} from './add-to-cart.js';
import {increaseQuantity , decreaseQuantity} from './increase-decrease.js';


displayShopItems();

const addBtns = Array.from(document.querySelectorAll(".add-btn"));
addBtns.forEach(addBtn => {
    addBtn.addEventListener("click", addToCart);
});


const moreBtns = document.querySelectorAll(".more");
const lessBtns = document.querySelectorAll(".less");

moreBtns.forEach(moreBtn => {
    moreBtn.addEventListener("click", increaseQuantity);
});

lessBtns.forEach(lessBtn => {
    lessBtn.addEventListener("click", decreaseQuantity);
});