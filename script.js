let cart = [];

function addToCart(productName, price) {
    const existingProduct = cart.find(p => p.name === productName);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }
    alert(productName + " added to cart!");
    updateCart();
}

function updateCart() {
    const cartContainer = document.getElementById("cart-items");
    if (!cartContainer) return;
    cartContainer.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price}</td>
            <td>${item.quantity}</td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
        `;
        cartContainer.appendChild(row);
        total += item.price * item.quantity;
    });
    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `
        <td colspan="3"><strong>Total</strong></td>
        <td><strong>$${total.toFixed(2)}</strong></td>
    `;
    cartContainer.appendChild(totalRow);
}
