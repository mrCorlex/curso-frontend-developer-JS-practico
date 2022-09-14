const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const imgMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu")
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart")
const asideShoppingCart = document.querySelector(".product-detail");
const productCardsContainer = document.querySelector(".cards-container");
const productList = []
const producDetailContainer = document.querySelector(".product-detail-detail");
const closeProductDetailContainer = document.querySelector(".product-detail-close-detail");

//menus closed const
const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
const isAsideShoppingCartClosed = asideShoppingCart.classList.contains("inactive");

//event listeners
navEmail.addEventListener("click", toggleDesktopMenu);
imgMenu.addEventListener("click", toggleMobileMenu);
shoppingCartIcon.addEventListener("click", toggleShoppingCart);
closeProductDetailContainer.addEventListener("click", productDetailClose);

//HIDE MENUS FUNCTION - EVENT LISTENER OUT OF THE ELEMENTS
document.addEventListener('click', function hideMenus(event) {
    if (!navEmail.contains(event.target)) {
        desktopMenu.classList.add("inactive");
    }

    if (!shoppingCartIcon.contains(event.target)) {
        asideShoppingCart.classList.add("inactive");
    }

    if (!imgMenu.contains(event.target)) {
        mobileMenu.classList.add("inactive");
    }
    if (!imgProduct.contains(event.target)) {
        producDetailContainer.classList.add("inactive");
    }
}
)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
    producDetailContainer.classList.add("inactive");

    /* if (isAsideShoppingCartClosed) {
        asideShoppingCart.classList.add("inactive");
    }     */
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
    producDetailContainer.classList.add("inactive");

    /* if (isAsideShoppingCartClosed) {
        asideShoppingCart.classList.add("inactive");
    }  */
}

function toggleShoppingCart() {
    asideShoppingCart.classList.toggle("inactive");
    producDetailContainer.classList.add("inactive");

   /*  if (isDesktopMenuClosed) {
        mobileMenu.classList.add("inactive");
        desktopMenu.classList.add("inactive");
    }    */ 
}

function openDetailProductMenu() {
    producDetailContainer.classList.remove("inactive");
}

function productDetailClose() {
    producDetailContainer.classList.add("inactive");
}

//INSERT PRODUCTS INTO productList[]
productList.push ({
    name: "Bike",
    price: 120,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push ({
    name: "Pantalla",
    price: 320,
    img: "https://images.pexels.com/photos/1682519/pexels-photo-1682519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push ({
    name: "Laptop",
    price: 780,
    img: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push ({
    name: "Tablero de ajedrez",
    price: 125,
    img: "https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push ({
    name: "Recámara",
    price: 1185,
    img: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push ({
    name: "Tenis",
    price: 200,
    img: "https://images.pexels.com/photos/12628400/pexels-photo-12628400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})

//TO MANIPULATE PRODUCTS AREA
function insertProducts (arr) {
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card")
        
        const imgProduct = document.createElement("img");
        imgProduct.setAttribute("src", product.img);
        imgProduct.addEventListener("click", openDetailProductMenu);

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
        
        const productInfoDiv = document.createElement("div");
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement("figure");
        const productImgCard = document.createElement("img");
        productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");
        productInfoFigure.appendChild(productImgCard);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(imgProduct);
        productCard.appendChild(productInfo);

        productCardsContainer.appendChild(productCard);
    }
}

insertProducts(productList);

//