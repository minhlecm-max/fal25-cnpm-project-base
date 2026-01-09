function getTableFromURL() {
    return new URLSearchParams(window.location.search).get('table');
}

function getSelectedTable() {
    return localStorage.getItem('selectedTable');
}

function getAllCarts() {
    return JSON.parse(localStorage.getItem('cartsByTable') || '{}');
}

function saveAllCarts(carts) {
    localStorage.setItem('cartsByTable', JSON.stringify(carts));
}

function getCart() {
    const table = getSelectedTable();
    const carts = getAllCarts();
    return carts[table] || [];
}

function saveCart(cart) {
    const table = getSelectedTable();
    const carts = getAllCarts();
    carts[table] = cart;
    saveAllCarts(carts);
}

function formatPrice(price) {
    return price.toLocaleString('vi-VN') + 'đ';
}

/* ================== MAIN ================== */
document.addEventListener('DOMContentLoaded', () => {
    let table = getTableFromURL() || getSelectedTable();

    // ❌ Không có bàn
    if (!table) {
        alert('Vui lòng quét QR trên bàn để gọi món');
        window.location.replace('./menu.html');
        return;
    }

    // ✅ Lưu bàn
    localStorage.setItem('selectedTable', table);

    // ✅ URL thiếu table → bổ sung
    if (!getTableFromURL()) {
        window.location.replace(`./Cart.html?table=${table}`);
        return;
    }

    // ===== UI =====
    document.getElementById('current-table').textContent = `Bàn ${table}`;
    document.getElementById('menu-link').href = `./menu.html?table=${table}`;

    renderCart();
    updateSummary();

    document.getElementById('discount-input')
        ?.addEventListener('input', updateSummary);
});

/* ================== CART ================== */
function renderCart() {
    const container = document.getElementById('cart-items-container');
    const cart = getCart();

    if (!cart.length) {
        container.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-basket"></i>
                <h4>Thực đơn trống</h4>
                <a href="./menu.html?table=${getSelectedTable()}" class="btn btn-primary mt-3">
                    Xem Menu
                </a>
            </div>
        `;
        return;
    }

    container.innerHTML = cart.map(item => `
        <div class="cart-item d-flex align-items-center">
            <img src="${item.image}" class="item-image me-3">
            <div class="flex-grow-1">
                <h5>${item.name}</h5>
                <span class="text-danger fw-bold">${formatPrice(item.price)}</span>
            </div>
            <div class="d-flex gap-2">
                <button onclick="updateQuantity(${item.id}, -1)">-</button>
                <b>${item.quantity}</b>
                <button onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
            <i class="fas fa-trash ms-3" onclick="removeItem(${item.id})"></i>
        </div>
    `).join('');
}

function updateQuantity(id, change) {
    let cart = getCart();
    const item = cart.find(i => i.id === id);
    if (!item) return;

    item.quantity += change;
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== id);
    }

    saveCart(cart);
    renderCart();
    updateSummary();
}

function removeItem(id) {
    saveCart(getCart().filter(i => i.id !== id));
    renderCart();
    updateSummary();
}

function updateSummary() {
    const cart = getCart();
    const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
    const discount = parseFloat(document.getElementById('discount-input')?.value) || 0;
    const discountAmount = subtotal * discount / 100;
    const total = subtotal - discountAmount;

    document.getElementById('subtotal').textContent = formatPrice(subtotal);
    document.getElementById('discount-amount').textContent = '-' + formatPrice(discountAmount);
    document.getElementById('total-amount').textContent = formatPrice(total);
}

function placeOrder() {
    if (!getCart().length) return alert('Giỏ hàng trống');

    alert(`Đặt món thành công cho Bàn ${getSelectedTable()}`);
    saveCart([]);
    renderCart();
    updateSummary();
}
