const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const imgMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu")
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart")
const asideShoppingCart = document.querySelector(".product-detail");
const productCardsContainer = document.querySelector(".cards-container");
const productList = [];
const productDetailContainer = document.querySelector(".product-detail-detail");

const darkMode = document.querySelector(".darken");

//menus closed const
const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
const isAsideShoppingCartClosed = asideShoppingCart.classList.contains("inactive");

//event listeners
navEmail.addEventListener("click", toggleDesktopMenu);
imgMenu.addEventListener("click", toggleMobileMenu);
shoppingCartIcon.addEventListener("click", toggleShoppingCart);


//HIDE MENUS FUNCTION - EVENT LISTENER OUT OF THE ELEMENTS
document.addEventListener('click', function hideMenus(event) {
    if (!navEmail.contains(event.target)) {
        desktopMenu.classList.add("inactive");
        darkMode.classList.add("inactive")

    }

    if (!shoppingCartIcon.contains(event.target)) {
        asideShoppingCart.classList.add("inactive");
        darkMode.classList.add("inactive")

    }

    if (!imgMenu.contains(event.target)) {
        mobileMenu.classList.add("inactive");
        darkMode.classList.add("inactive")

    }
}
)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
    productDetailContainer.classList.add("inactive");
    darkMode.classList.remove("inactive")

    /* if (isAsideShoppingCartClosed) {
        asideShoppingCart.classList.add("inactive");
    }     */
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
    productDetailContainer.classList.add("inactive");
    darkMode.classList.toggle("inactive")


    /* if (isAsideShoppingCartClosed) {
        asideShoppingCart.classList.add("inactive");
    }  */
}

function toggleShoppingCart() {
    asideShoppingCart.classList.toggle("inactive");
    productDetailContainer.classList.add("inactive");
    darkMode.classList.toggle("inactive")


   /*  if (isDesktopMenuClosed) {
        mobileMenu.classList.add("inactive");
        desktopMenu.classList.add("inactive");
    }    */ 
}

function openDetailProductMenu() {
    productDetailContainer.classList.remove("inactive");
}

function productDetailClose() {
    productDetailContainer.classList.add("inactive");
    removeDetailProductCard();
}


//INSERT PRODUCTS INTO productList[]
productList.push ({
    name: "Bike",
    price: 120,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
    id : "product01"
})
productList.push ({
    name: "Pantalla",
    price: 320,
    img: "https://images.pexels.com/photos/1682519/pexels-photo-1682519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
    id : "product02"
})
productList.push ({
    name: "Laptop",
    price: 780,
    img: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
    id : "product03"
})
productList.push ({
    name: "Tablero de ajedrez",
    price: 125,
    img: "https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
    id : "product04"
})
productList.push ({
    name: "Recámara",
    price: 1185,
    img: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
    id : "product05"
})
productList.push ({
    name: "Tenis",
    price: 200,
    img: "https://images.pexels.com/photos/12628400/pexels-photo-12628400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
    id : "product06"
})

//TO MANIPULATE PRODUCTS AREA
function insertProducts (arr) {
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.setAttribute("id", product.id);
                       
        const imgProduct = document.createElement("img");
        imgProduct.classList.add("product-img");
        imgProduct.setAttribute("src", product.img);

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

let productCardDetail = document.querySelectorAll(".product-card");

window.onload = function () {
    
    productCardDetail.forEach(product => product.addEventListener("click", function() {
        let currentId=this.id;
        console.log(currentId);
        openDetailProductMenu(product);
        for (product of productList) {
            if (product.id == currentId){
                console.log(product);
                productDetailContainer.setAttribute("id", product.id)

                const productDetail = document.createElement("div");
                productDetail.classList.add("product-detail-close-detail");
                
                    
                const closeDetail = document.createElement("img");
                closeDetail.classList.add("product-detail-close-img");
                closeDetail.setAttribute("src", "./icons/icon_close.png")
                closeDetail.setAttribute("alt","close");
                
                const imgDetailContainer = document.createElement("img");
                imgDetailContainer.classList.add("img-detail-container");
                imgDetailContainer.setAttribute("alt",product.name);
                imgDetailContainer.setAttribute("src",product.img);
                
                const productInfoDetailDiv = document.createElement("div");
                productInfoDetailDiv.classList.add("product-info-detail");
                const productInfoDetailPrice = document.createElement("p");
                productInfoDetailPrice.innerText = "$ " + product.price;
                const productInfoDetailName = document.createElement("p");
                productInfoDetailName.innerText = product.name;
                const productInfoDetailDescription = document.createElement("p");
                productInfoDetailDescription.innerText = product.description;
                const buttonDetailCard = document.createElement("button");
                buttonDetailCard.classList.add("primary-button-detail");
                buttonDetailCard.classList.add("add-to-cart-button-detail");
                buttonDetailCard.innerText = "Add to cart";
                const imgButtonDetailContainer = document.createElement("img");
                imgButtonDetailContainer.setAttribute("alt","add to cart");
                imgButtonDetailContainer.setAttribute("src","./icons/bt_add_to_cart.svg");

                productDetail.appendChild(closeDetail);
                productDetailContainer.appendChild(productDetail);
                productDetailContainer.appendChild(imgDetailContainer);
                productInfoDetailDiv.appendChild(productInfoDetailPrice);
                productInfoDetailDiv.appendChild(productInfoDetailName);
                productInfoDetailDiv.appendChild(productInfoDetailDescription);
                productInfoDetailDiv.appendChild(buttonDetailCard);
                buttonDetailCard.appendChild(imgButtonDetailContainer);
                productDetailContainer.appendChild(productInfoDetailDiv);
            }
            const closeProductDetailContainer = document.querySelector(".product-detail-close-detail");
            closeProductDetailContainer.addEventListener("click", productDetailClose);
            }
        })
    )
}/*hey*/