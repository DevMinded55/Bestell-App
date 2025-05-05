function getDishes(i) {
    return `<div id="box${[i]}" class="item-box">
                        <div class="item">
                        <h3>${menuItems[i].name}</h3>
                        <p>Preis: ${menuItems[i].price
                            .toFixed(2)
                            .replace(".", ",")} €</p>
                        </div>
                        <button id="add_button${[
                            i,
                        ]}" class="cart-button" onclick="addToCart(${i})">+</button>
                    </div>`;
}

function getCartItems(k) {
    return `<div id="item${k}" class="cart_item">
                <p>${cart[k].name}</p>
                <p>${cart[k].price.toFixed(2).replace(".", ",")} €</p>
                </div>
                <div class="cart_icons">
                <div class="cart_amount">
                <img src="./assets/icons/minus.png" alt="" onclick="decreaseAmount(${k})">
                <p id="cart_amount${k}">${cart[k].amount}</p>
                <img src="./assets/icons/plus.png" alt="" onclick="increaseAmount(${k})">
                </div>
                <div class="cart_amount">
                <img src="./assets/icons/trash.png" alt="" onclick="deleteDish(${k})">
                </div>
                </div>
                <div class="cart_line"></div>`;
}
