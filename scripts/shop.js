import products from './products.js';
import {addToCart} from './add-to-cart.js';

const shopItems = document.querySelector(".shop-items");

function displayShopItems() {
    products.forEach( (product) => {
        const item = `
            <div class="shop-item">
                <img src="${product.imgSrc}" alt="${product.name}"/>
                <h4>${product.name}</h4>
                <h5>${product.manufacturer}</h5>
                <p>${product.description}</p>
                <ul class="shoping-details">
                    <li class="price product-subtotal">${product.price}</li>
                    <li class="quantity"><input type="number" class="quantity" value=${product.quantity}></input></li>
                    <li class="add-remove"><button class="more" id=${product.id}>+</button><button class="less" id=${product.id}>-</button></li>
                    <li class="add-to-cart"><button class="add-btn" id=${product.id}><i class="ph-shopping-cart-bold"></i></button></li>
                </ul>
            </div>
        `;
        shopItems.innerHTML += item;
    });
};

export {displayShopItems};