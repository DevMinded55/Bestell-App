function renderDishes() {
    let dishes = document.getElementById("menu_items");
    dishes.innerHTML = "";
    for (let i = 0; i < menuItems.length; i++) {
        dishes.innerHTML += getDishes(i);
    }
}

function addToCart(k) {
    let selectedItem = menuItems[k];
    let cartItem = cart.find((item) => item.name === selectedItem.name);

    if (cartItem) {
        cartItem.amount++;
    } else {
        cart.push({
            name: selectedItem.name,
            price: selectedItem.price,
            amount: 1,
        });
    }
    renderCart();
}

function renderCart() {
    let items = document.getElementById("cart-items");
    let total = 0;
    let delivery = 1.9;
    items.innerHTML = "";
    for (let i = 0; i < cart.length; i++) {
        items.innerHTML += getCartItems(i);
        total += cart[i].price * cart[i].amount + delivery;
    }
    document.getElementById("total").innerHTML =
        total.toFixed(2).replace(".", ",") + " €";
}

function increaseAmount(j) {
    cart[j].amount++;
    renderCart();
    renderCartOverlay();
}

function decreaseAmount(l) {
    if (cart[l].amount > 1) {
        cart[l].amount--;
    } else {
        cart.splice(l, 1);
    }
    renderCart();
    renderCartOverlay();
}

function placeOrder() {
    if (cart.length > 0) {
        orderSuccess();
    } else {
        orderError();
    }
}

function orderSuccess() {
    cart = [];
    renderCart();
    let message = document.getElementById("order-message");
    message.classList.add("show");

    setTimeout(() => {
        message.classList.remove("show");
    }, 3000);
}

function orderError() {
    let errorMessage = document.getElementById("error-message");
    errorMessage.classList.add("show");

    setTimeout(() => {
        errorMessage.classList.remove("show");
    }, 3000);
}

function showOverlay() {
    document.getElementById("overlay-cart_overlay").style.display = "block";
    document.body.style.overflow = "hidden";
    renderCartOverlay();
}

function hideOverlay() {
    document.getElementById("overlay-cart_overlay").style.display = "none";
    document.body.style.overflow = "auto";
}

function renderCartOverlay() {
    let items = document.getElementById("overlay-cart-items");
    let total = 0;
    let delivery = 1.9;
    items.innerHTML = "";
    for (let i = 0; i < cart.length; i++) {
        items.innerHTML += getCartItems(i);
        total += cart[i].price * cart[i].amount + delivery;
    }
    document.getElementById("overlay-total").innerHTML =
        total.toFixed(2).replace(".", ",") + " €";
}

function placeOrderOverlay() {
    if (cart.length > 0) {
        overlayOrderSuccess();
    } else {
        overlayOrderError();
    }
}

function overlayOrderSuccess() {
    cart = [];
    renderCart();
    renderCartOverlay();
    let message = document.getElementById("overlay-order-message");
    message.classList.add("show");

    setTimeout(() => {
        message.classList.remove("show");
    }, 3000);
}

function overlayOrderError() {
    let errorMessage = document.getElementById("overlay-error-message");
    errorMessage.classList.add("show");

    setTimeout(() => {
        errorMessage.classList.remove("show");
    }, 3000);
}
