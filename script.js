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
        addToCartPlus(cartItem);
    } else {
        addToCartNew(selectedItem)
    }
}

function addToCartPlus(cartItem){
    cartItem.amount++;
    let cartItemRef = document.getElementById(
        `cart_amount${cart.findIndex(
            (item) => item.name === cartItem.name
        )}`
    );
    cartItemRef.innerText = cartItem.amount;
    renewCartSum();
}

function addToCartNew(selectedItem){
    cart.push({
        name: selectedItem.name,
        price: selectedItem.price,
        amount: 1,
    });
    let items = document.getElementById("cart-items");
    items.innerHTML += getCartItems(cart.length - 1);
    renewCartSum();
}

function renewCartSum(){
    let total = 0;
    let delivery = 1.9;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].amount + delivery;
    }
    document.getElementById("total").innerHTML =
        total.toFixed(2).replace(".", ",") + " €";
}

function renderCart() {
    let items = document.getElementById("cart-items");
    items.innerHTML = "";
    for (let i = 0; i < cart.length; i++) {
        items.innerHTML += getCartItems(i);
    }
}

function increaseAmount(j) {
    cart[j].amount++;
    let cartItemRef = document.getElementById(`cart_amount${j}`);
    cartItemRef.innerHTML = cart[j].amount;
    renewCartSum();
}

function decreaseAmount(l) {
    if (cart[l].amount > 1) {
        cart[l].amount--;
        let cartItemRef = document.getElementById(`cart_amount${l}`);
        cartItemRef.innerHTML = cart[l].amount;
        renewCartSum();
    } else {
        cart.splice(l, 1);
        renderCart();
        renewCartSum();
    }
}

function deleteDish(j) {
    cart.splice(j, 1);
    renderCart();
    renewCartSum();
}

function placeOrder() {
    if (cart.length > 0) {
        showOrdered();
    } else {
        orderError();
    }
}

function showOrdered(){
    cart = [];
    renderCart();
    renewCartSum();
    document.getElementById("order-overlay").style.display = "flex";
}

function hideOrdered(){
    document.getElementById("order-overlay").style.display = "none";
}

function orderError() {
    let errorMessage = document.getElementById("error-message");
    errorMessage.classList.add("show");

    setTimeout(() => {
        errorMessage.classList.remove("show");
    }, 3000);
}

function toggleOverlay(){
    document.getElementById("cart_overlay").classList.toggle('d-none');
}
