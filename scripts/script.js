import products from './products.js';


const shopItems = document.querySelector(".shop-items");
const cartItems = document.querySelector(".cart-items");
const moreBtns = document.querySelectorAll(".more");
const lessBtns = document.querySelectorAll(".less");

function sayHi(){
    console.log(`Hi!`);
};

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
                    <li class="price product-subtotal">${totalPrice}</li>
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
    if(cart.some((cartItem) => cartItem.id == this.id)) {
        alert("Product already in cart!");
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
}


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
                        <div class="add-remove"><button class="more" id=${product.id}>+</button><button class="less" id=${product.id}>-</button></div>
                    </div>
                    <button class="remove-item" onclick="removeFromCart()" id=${product.id}><i class="ph-trash-bold"></i></button>
                </div>
                <div class="subtotal">Total: ${subtotal.toFixed(2)} $</div>
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

    // const removeBtns = document.querySelectorAll(".remove-item");

    // removeBtns.forEach(removeBtn => {
    // removeBtn.addEventListener("click", removeFromCart);
    // });

    // function removeFromCart() {
    // cart = cart.filter((item) => item.id != this.id);

    // updateCart();
    // };

    window.removeFromCart = removeFromCart;
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











// const myFragment = document.createRange().createContextualFragment(cartItem);
// cartItems.appendChild(myFragment);

window.sayHi = sayHi; //that's working;
