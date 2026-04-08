let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push(item);
    total += price;

    let li = document.createElement("li");
    li.innerText = item + " - ₹" + price;
    document.getElementById("cart-items").appendChild(li);

    document.getElementById("total").innerText = total;
}

function placeOrder() {
    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }

    alert("Order placed successfully! 🎉");
    cart = [];
    total = 0;
    document.getElementById("cart-items").innerHTML = "";
    document.getElementById("total").innerText = total;
}