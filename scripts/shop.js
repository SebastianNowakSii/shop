import products from './products.js';

const shopItems = document.querySelector(".shop-items");

function displayShopItems() {
    products.forEach( (product) => {
        let totalPrice = (product.price) * (product.quantity);
        const item = `
            <div class="shop-item">
                <img src="${product.imgSrc}" alt="${product.name}"/>
                <h4>${product.name}</h4>
                <h5>${product.manufacturer}</h5>
                <p>${product.description}</p>
                <ul class="shoping-details">
                    <li class="price product-subtotal">${totalPrice.toFixed(2)}</li>
                    <li class="quantity"><input type="number" class="quantity" value=${product.quantity}></input></li>
                    <li class="add-remove"><button onclick="changeNumberOfProducts('plus', ${product.id})">+</button><button onclick="changeNumberOfProducts('minus', ${product.id})">-</button></li>
                    <li class="add-to-cart"><button class="add-btn" onclick="addToCart(${product.id})"><i class="ph-shopping-cart-bold"></i></button></li>
                </ul>
            </div>
        `;
        shopItems.innerHTML += item;
    });
};

export {displayShopItems};