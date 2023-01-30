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
                    <li class="quantity"><input type="number" id=${product.id} class="how-many-input" value=${product.quantity}></li> 
                    <li class="add-remove"><button onclick="update('plus', ${product.id})">+</button><button onclick="update('minus', ${product.id})">-</button></li>
                    <li class="add-to-cart"><button class="add-btn" onclick="addToCart(${product.id})"><i class="ph-shopping-cart-bold"></i></button></li>
                </ul>
            </div>
        `;
        shopItems.innerHTML += item;
    });
};
displayShopItems();

function update(action, id) {
    let input = document.getElementById(id);
    let value = input.value;
    if (action === "minus" && value > 1) {
        value--;
    } else if (action === "plus"){
        value++;
    };
    input.value = value;
};

function addToCart(id) {
    let input = document.getElementById(id);
    if(cart.some((cartItem) => cartItem.id === id)) {
        changeQuantity('plus', id);
    } else {
        const cartItem = products.find((product) => product.id === id);
        cart.push({
            ...cartItem,
            quantity: input.value,
        });
    }
    input.value = 1;
    createSubcarts();
    updateCart();
};

let cart = [];
let subCarts = [];

const cartItems = document.querySelector(".cart-items");
const total = document.querySelector(".total-value");


function displayCartItems() {
    createSubcarts();
    cartItems.innerHTML = "";
    let cartItem = "";
    let grandTotal = 0;
    subCarts.forEach( (manufacturer) => {
        let subtotal = 0;
        cartItem += `
            <div class="cart-item">
                <h3>${manufacturer}</h3>
        `;
        cart.forEach( (product) => {
            if(product.manufacturer === manufacturer) {
                let totalPrice = (product.price) * (product.quantity);
                subtotal += totalPrice;
                cartItem += `
                    <div class="added-item">
                        <ul class="item-details">
                            <li class="item">${product.name}</li>
                            <li class="price product-subtotal">${totalPrice.toFixed(2)}</li>
                            <li class="quantity"><input type="number" value=${product.quantity}></li>
                            <li class="add-remove"><button class="more" onclick="changeQuantity('plus', ${product.id})">+</button><button class="less" onclick="changeQuantity('minus', ${product.id})">-</button></li>
                        </ul>
                        <button class="remove-item" onclick="removeFromCart(${product.id})"><i class="ph-trash-bold"></i></button>
                    </div>
                `;
            }
        });
        cartItem += `
                <div class="subtotal">Total: ${subtotal.toFixed(2)} $</div>
            </div>
        `;
        cartItems.innerHTML = cartItem;
        grandTotal += subtotal;
    });
    total.innerHTML = `
        ${grandTotal.toFixed(2)}
    `;
};


function createSubcarts() {
    subCarts = [];
    const manufacturers = cart.map(product => `${product.manufacturer}`);
    manufacturers.forEach((manufacturer) => {
        subCarts.includes(manufacturer) ? null : subCarts.push(manufacturer);
    });
};





function changeQuantity(action, id) {
    cart = cart.map((product) => {
        let quantity = product.quantity;
        if (product.id === id) {
            if (action === "minus" && product.quantity > 1) {
                quantity--;
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

function updateCart() {
    displayCartItems();
}

window.changeQuantity = changeQuantity;
window.removeFromCart = removeFromCart;
window.addToCart = addToCart;
window.update = update;