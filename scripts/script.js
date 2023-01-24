import products from './products.js';

const shopItems = document.querySelector(".shop-items");
const cartItems = document.querySelector(".cart-items");

function displayItems() {
    products.forEach( (product) => {
        const item = `
            <div class="shop-item">
                <img src="${product.imgSrc}" alt="${product.name}"/>
                <h4>${product.name}</h4>
                <h5>${product.manufacturer}</h5>
                <p>${product.description}</p>
                <ul class="shoping-details">
                    <li class="price">${product.price}</li>
                    <li class="quantity"></li>
                    <li class="add-remove"><button>+</button><button>-</button></li>
                    <li class="add-to-cart"><button class="add-btn" id=${product.id}><i class="ph-shopping-cart-bold"></i></button></li>
                </ul>
            </div>
        `;
        shopItems.innerHTML += item;
    });
};
 
displayItems();


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
        // cartItems.innerHTML += `
        const cartItem = `
            <div class="cart-item">
            <h4>${product.name}</h4>
            <h5>${product.manufacturer}</h5>
            <p>${product.description}</p>
            <ul class="shoping-details">
                <li class="price">${product.price}</li>
                <li class="quantity">${product.quantity}</li>
                <li class="add-remove"><button class="more" id=${product.id}>+</button><button>-</button></li>
                <li class="add-to-cart"><button class="add-btn" id=${product.id}><i class="ph-shopping-cart-bold"></i></button></li>
            </ul>
            </div>
        `;
        const myFragment = document.createRange().createContextualFragment(cartItem);
        cartItems.appendChild(myFragment);
        console.log(myFragment);
    });
        const moreBtns = document.querySelectorAll(".more");

        moreBtns.forEach(moreBtn => {
        moreBtn.addEventListener("click", function() {
            console.log("it works");
    });
});
}


//Próba zmiany ilości po Sebciowemu
const moreBtns = document.querySelectorAll(".more");

moreBtns.forEach(moreBtn => {
    moreBtn.addEventListener("click", function() {
        console.log("it works");
    });
});

function changeQuantity() {
    console.log('it works');
    cart = cart.map((product) => {
        let quantity = product.quantity;

        if (product.id == this.id) {
            // if (action === "minus") {
            //     quantity--
            // } else if (action === "plus"){
                quantity++;
            // }
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