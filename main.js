const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const imgMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu")
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart")
const asideShoppingCart = document.querySelector(".product-detail");

//menus closed const
const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
const isAsideShoppingCartClosed = asideShoppingCart.classList.contains("inactive");

/*event listeners*/ 
navEmail.addEventListener("click", toggleDesktopMenu);
imgMenu.addEventListener("click", toggleMobileMenu);
shoppingCartIcon.addEventListener("click", toggleShoppingCart)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
    if (isAsideShoppingCartClosed) {
        asideShoppingCart.classList.add("inactive");
    }    
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
    if (isAsideShoppingCartClosed) {
        asideShoppingCart.classList.add("inactive");
    } 
}

function toggleShoppingCart() {
    asideShoppingCart.classList.toggle("inactive");
    if (isDesktopMenuClosed) {
        mobileMenu.classList.add("inactive");
        desktopMenu.classList.add("inactive");
    }    
}