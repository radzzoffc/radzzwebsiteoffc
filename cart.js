let cart = [];

// tambah item
function addToCart(productId) {
    const productElement = document.querySelector(`.product[data-id="${productId}"]`);
    const name = productElement.getAttribute('data-name');
    const price = parseInt(productElement.getAttribute('data-price'));

    const product = cart.find(item => item.id === productId);
    if (product) {
        product.quantity += 1;
    } else {
        cart.push({ id: productId, name, price, quantity: 1 });
    }
    updateCartDisplay();
}

// display in cart
function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <p>${item.name} - Rp${item.price} x ${item.quantity}</p>
            <button onclick="removeFromCart(${item.id})">Kurangi</button>
            <button onclick="deleteFromCart(${item.id})">Hapus</button>
        </div>
    `).join('');
}

// view nya
function viewCart() {
    document.getElementById('cartModal').style.display = 'block';
}

function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

// Kurangi dan hapus produk dari keranjang
function removeFromCart(productId) {
    const product = cart.find(item => item.id === productId);
    if (product.quantity > 1) {
        product.quantity -= 1;
    } else {
        cart = cart.filter(item => item.id !== productId);
    }
    updateCartDisplay();
}

function deleteFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

// Kirim pesanan ke wa
function sendOrder() {
    const orderText = cart.map(item => `${item.name} x ${item.quantity}`).join('\n');
    const phone = "6285850493138"; // Nomor WhatsApp tujuan
    const url = `https://wa.me/${phone}?text=Pesanan:%0A${encodeURIComponent(orderText)}`;
    window.open(url, '_blank');
}

// buka tutup feedback 
function openFeedback() {
    document.getElementById('feedbackModal').style.display = 'block';
}

function closeFeedback() {
    document.getElementById('feedbackModal').style.display = 'none';
}

// kirimkan feedback nya
function sendFeedback() {
    const feedbackMessage = document.getElementById('feedbackMessage').value;
    if (feedbackMessage.trim() === "") {
        alert("Masukkan pesan feedback terlebih dahulu.");
        return;
    }
    const phone = "6285850493138"; // Nomor WhatsApp tujuan
    const url = `https://wa.me/${phone}?text=Feedback:%0A${encodeURIComponent(feedbackMessage)}`;
    window.open(url, '_blank');
}