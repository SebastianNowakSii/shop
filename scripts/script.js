import products from './products.js';


const shopItems = document.querySelector(".shop-items");

function displayItems() {
    products.forEach( (product) => {
        const item = `
            <div class="shop-item">
                <img src="${product.imgSrc}" alt="${product.name}"/>
                <h4>${product.name}</h4>
                <h5>${product.manufacturer}</h5>
                <h5>${product.manufacturer}</h5>
                <ul class="shoping-details">
                    <li class="price">${product.price}</li>
                    <li class="quantity">${product.quantity}</li>
                    <li class="add-remove"><button>+</button><button>-</button></li>
                    <li class="add-to-cart"><button><i class="ph-shopping-cart-bold"></i></button></li>
                </ul>
            </div>
        `;
        shopItems.innerHTML += item;
    });
};

displayItems();












// const myFragment = document.createRange().createContextualFragment(item);
// shopItems.appendChild(myFragment);