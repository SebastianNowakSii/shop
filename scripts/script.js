import products from './products.js';

const shopItems = document.querySelector(".shop-items");
const cartItems = document.querySelector(".cart-items");
const moreBtns = document.querySelectorAll(".more");
const lessBtns = document.querySelectorAll(".less")

function displayShopItems() {
    products.forEach( (product) => {
        const item = `
            <div class="shop-item">
                <img src="${product.imgSrc}" alt="${product.name}"/>
                <h4>${product.name}</h4>
                <h5>${product.manufacturer}</h5>
                <p>${product.description}</p>
                <ul class="shoping-details">
                    <li class="price">${product.price}</li>
                    <li class="quantity"><input type="number" class="quantity" value=${product.quantity}></input></li>
                    <li class="add-remove"><button class="more" id=${product.id}>+</button><button class="less" id=${product.id}>-</button></li>
                    <li class="add-to-cart"><button class="add-btn" id=${product.id}><i class="ph-shopping-cart-bold"></i></button></li>
                </ul>
            </div>
        `;
        shopItems.innerHTML += item;
    });
};
 
displayShopItems();


const addBtns = Array.from(document.querySelectorAll(".add-btn"));

let cart = [];

addBtns.forEach(addBtn => {
    addBtn.addEventListener("click", addToCart);
});

function addToCart() {
    // let cartItem = products.find((product) => product.id == this.id);
    if(cart.some((cartItem) => cartItem.id == this.id)) {
        alert("Product already in cart!")
        // changeQuantity("plus", this.id);
    } else {
        let cartItem = products.find((product) => product.id == this.id);
        cart.push({
            ...cartItem,
            quantity: 1,
        });
    };
    updateCart();
};

function updateCart() {
    displayCartItems();
    // displaySubtotals();
}

function displayCartItems() {
    cartItems.innerHTML = "";
    cart.forEach( (product) => {
        cartItems.innerHTML += `
        <div class="cart-item">
            <h3>${product.manufacturer}</h3>
            <div class="added-item">
                <div class="item-details">
                    <p>${product.name}</p>
                    <div class="price">${product.price}</div>
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


moreBtns.forEach(moreBtn => {
    moreBtn.addEventListener("click", increaseQuantity);
});

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


lessBtns.forEach(lessBtn => {
    lessBtn.addEventListener("click", decreaseQuantity);
});

function decreaseQuantity() {
    cart = cart.map((product) => {
        let quantity = product.quantity;
        if (product.id == this.id) {
                quantity--;
        }
        return {
            ...product,
            quantity,
        };
    });
    updateCart();
}











// const myFragment = document.createRange().createContextualFragment(cartItem);
// cartItems.appendChild(myFragment);