function getSelectedTable() {
    return localStorage.getItem('selectedTable') || '1';
}

function getAllCarts() {
    const carts = localStorage.getItem('cartsByTable');
    return carts ? JSON.parse(carts) : {};
}


function saveAllCarts(carts) {
    localStorage.setItem('cartsByTable', JSON.stringify(carts));
}

function getCart() {
    const tableId = getSelectedTable();
    const allCarts = getAllCarts();
    return allCarts[tableId] || [];
}

function saveCart(cart) {
    const tableId = getSelectedTable();
    const allCarts = getAllCarts();
    allCarts[tableId] = cart;
    saveAllCarts(allCarts);
}

function formatPrice(price) {
    return price.toLocaleString('vi-VN') + 'đ';
}

function renderCart() {
    const container = document.getElementById('cart-items-container');
    const cart = getCart();

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-basket"></i>
                <h4>Giỏ hàng trống</h4>
                <p>Hãy thêm món từ menu!</p>
                <a href="./menu.html" class="btn btn-primary mt-2">
                     Xem Menu
                </a>
            </div>
        `;
        return;
    }

    let html = '';
    cart.forEach(item => {
        html += `
            <div class="cart-item d-flex align-items-center" data-id="${item.id}">
                <img src="${item.image}" alt="${item.name}" class="item-image me-3">
                <div class="flex-grow-1">
                    <h5 class="mb-1">${item.name}</h5>
                    <span class="text-danger fw-bold">${formatPrice(item.price)}</span>
                </div>
                <div class="d-flex align-items-center gap-2">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="fw-bold">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <i class="fas fa-trash remove-btn ms-3 fs-5" onclick="removeItem(${item.id})"></i>
            </div>
        `;
    });

    container.innerHTML = html;
}

function updateQuantity(itemId, change) {
    let cart = getCart();
    const item = cart.find(c => c.id === itemId);

    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(c => c.id !== itemId);
        }
        saveCart(cart);
        renderCart();
        updateSummary();
    }
}

function removeItem(itemId) {
    let cart = getCart().filter(c => c.id !== itemId);
    saveCart(cart);
    renderCart();
    updateSummary();
}

function updateSummary() {
    const cart = getCart();
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountPercent = parseFloat(document.getElementById('discount-input').value) || 0;
    const discountAmount = subtotal * (discountPercent / 100);
    const total = subtotal - discountAmount;

    document.getElementById('subtotal').textContent = formatPrice(subtotal);
    document.getElementById('discount-amount').textContent = '-' + formatPrice(discountAmount);
    document.getElementById('total-amount').textContent = formatPrice(total);
}

function placeOrder() {
    const cart = getCart();
    if (cart.length === 0) {
        alert('Giỏ hàng trống! Vui lòng thêm món.');
        return;
    }

    const table = getSelectedTable();
    alert(`Đặt món thành công cho Bàn ${table}!\nCảm ơn bạn đã đặt hàng.`);

    saveCart([]);
    renderCart();
    updateSummary();
}

document.addEventListener('DOMContentLoaded', () => {
    const table = getSelectedTable();
    document.getElementById('current-table').textContent = `Bàn ${table}`;

    renderCart();
    updateSummary();

    document.getElementById('discount-input').addEventListener('input', updateSummary);
});