
function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart[index]) {
        cart[index].quantity += change;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }
}

function renderCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cart-items");
    let totalAmount = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Cart empty!</p>";
    } else {
        cartContainer.innerHTML = "";
        cart.forEach((item, index) => {
            totalAmount += item.price * item.quantity;
            cartContainer.innerHTML += `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" style="width: 100px;">
                    <p>${item.name} <br> ${item.price}$</p>
                    <div class="quantity-controls">
                        <button onclick="updateQuantity(${index}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${index}, 1)">+</button>
                    </div>
                </div>
            `;
        });
    }

    document.getElementById("total-amount").innerHTML = `Total Amount: ${totalAmount}$`;
}

document.addEventListener("DOMContentLoaded", renderCart);

function goToCart() {
    window.location.href = "cart.html";
  }