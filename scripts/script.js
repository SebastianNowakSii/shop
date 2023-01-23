import products from './products.js';

const shopItems = document.querySelector(".shop-items");

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
                    <li class="quantity">${product.quantity}</li>
                    <li class="add-remove"><button class="more" id=${product.id}>+</button><button>-</button></li>
                    <li class="add-to-cart"><button class="add-btn" id=${product.id}><i class="ph-shopping-cart-bold"></i></button></li>
                </ul>
            </div>
        `;
        shopItems.innerHTML += item;
    });
};

displayItems();


const addBtns = Array.from(document.querySelectorAll(".add-btn"));


// addBtns.forEach(addBtn => {
//     addBtn.addEventListener("click", function(id) {
//         console.log(this.id);
//     });
// });


//Adding to cart
let cart = [];

addBtns.forEach(addBtn => {
    addBtn.addEventListener("click", addToCart);
});

function addToCart() {
    let cartItem = products.find((product) => product.id == this.id);
    if(cart.some((cartItem) => cartItem.id == this.id)) {
        changeQuantity("plus", this.id);
    } else {
    // let cartItem = products.find((product) => product.id == this.id);
    cart.push({
        ...cartItem,
        quantity: 1,
    });
    console.log(cart);
    };
};



//Changing number of Units

// function changeQuantity() {
//     let cartItem = products.find((product) => product.id == this.id);
//     let quantity = cartItem.quantity;

//     if (cartItem.id == this.id) {
//         if (action === "minus" && quantity > 1) {
//             quantity--;
//         } else if (action === "plus") {
//             quantity++
//         }
//     }
// }


//Próba zmiany ilości po Sebciowemu
const moreBtns = Array.from(document.querySelectorAll(".more"));

moreBtns.forEach(moreBtn => {
    moreBtn.addEventListener("click", changeQuantity)
});
function changeQuantity() {
    let product = products.find((product) => product.id == this.id);
    let quantity = product.quantity;
    quantity++;
    


    // if (product.id == this.id) {
    //     if (action === "minus" && quantity > 1) {
    //         quantity--;
    //     } else if (action === "plus") {
    //         quantity++
    //     }
    // }
    
    console.log(product);
}











// const myFragment = document.createRange().createContextualFragment(item);
// shopItems.appendChild(myFragment);