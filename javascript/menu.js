const MAX_ITEMS_PER_CATEGORY = 8;

/* ================= TABLE ================= */
function getTableFromURL() {
    return new URLSearchParams(window.location.search).get('table');
}

function getSelectedTable() {
    return localStorage.getItem('selectedTable');
}

/* ================= CART STORAGE ================= */
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

/* ================= PAGE PROTECT ================= */
document.addEventListener('DOMContentLoaded', () => {
    let table = getTableFromURL() || getSelectedTable();

    if (!table) {
        alert('Vui lòng quét QR trên bàn để gọi món');
        window.location.replace('./index.html');
        return;
    }

    // lưu bàn chuẩn
    localStorage.setItem('selectedTable', table);

    // URL thiếu table → bổ sung
    if (!getTableFromURL()) {
        window.location.replace(`./menu.html?table=${table}`);
        return;
    }

    // UI
    document.getElementById('table-number').textContent = table;
    document.getElementById('cart-link').href = `./Cart.html?table=${table}`;

    renderMenu();
    updateCartBadge();
    createImageModal();
});

/* ================= MENU ================= */
function renderMenu() {
    const container = document.getElementById('menu-items-container');
    if (!container) return;

    const categories = {};
    menu.forEach(item => {
        (categories[item.category] ||= []).push(item);
    });

    container.innerHTML = Object.entries(categories).map(([category, items]) => {
        const display = items.slice(0, MAX_ITEMS_PER_CATEGORY);
        const more = items.length > MAX_ITEMS_PER_CATEGORY;

        return `
        <div class="category-section mb-4">
            <div class="d-flex justify-content-between align-items-center">
                <h4 class="category-title">${category}</h4>
                ${more ? `
                <a class="btn-see-more"
                   href="./category.html?category=${encodeURIComponent(category)}&table=${getSelectedTable()}">
                    Xem thêm <i class="fas fa-arrow-right"></i>
                </a>` : ''}
            </div>

            <div class="row mt-3">
                ${display.map(item => `
                <div class="col-md-6 col-lg-3 mb-3">
                    <div class="menu-card">
                        <img src="${item.image}" class="menu-image"
                             onclick="openImageModal('${item.image}','${item.name}')">
                        <div class="menu-info">
                            <h5>${item.name}</h5>
                            <p class="menu-description">${item.description || ''}</p>
                            <div class="menu-price">${formatPrice(item.price)}</div>
                            <div class="d-flex justify-content-between mt-2">
                                <div>
                                    <button onclick="adjustQty(${item.id},-1)">-</button>
                                    <span id="qty-${item.id}">1</span>
                                    <button onclick="adjustQty(${item.id},1)">+</button>
                                </div>
                                <button class="btn-add" onclick="addToCart(${item.id})">
                                    <i class="fas fa-plus"></i> Thêm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`).join('')}
            </div>
        </div>`;
    }).join('');
}

/* ================= ACTIONS ================= */
function adjustQty(id, change) {
    const el = document.getElementById(`qty-${id}`);
    el.textContent = Math.max(1, +el.textContent + change);
}

function addToCart(id) {
    const item = menu.find(i => i.id === id);
    const qty = +document.getElementById(`qty-${id}`).textContent;

    let cart = getCart();
    const exist = cart.find(i => i.id === id);

    exist ? exist.quantity += qty : cart.push({ ...item, quantity: qty });

    saveCart(cart);
    updateCartBadge();
    showToast(`Đã thêm ${qty} "${item.name}" cho Bàn ${getSelectedTable()}`);
    document.getElementById(`qty-${id}`).textContent = 1;
}

function updateCartBadge() {
    document.getElementById('cart-count').textContent =
        getCart().reduce((s, i) => s + i.quantity, 0);
}

/* ================= UI ================= */
function formatPrice(p) {
    return p.toLocaleString('vi-VN') + 'đ';
}

function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2000);
}

/* ================= IMAGE MODAL ================= */
function createImageModal() {
    const modal = document.createElement('div');
    modal.id = 'image-modal';
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="image-modal-content">
            <span class="image-modal-close" onclick="closeImageModal()">&times;</span>
            <img id="modal-image">
            <p id="modal-caption"></p>
        </div>`;
    document.body.appendChild(modal);
    modal.onclick = e => e.target === modal && closeImageModal();
}

function openImageModal(src, name) {
    document.getElementById('image-modal').style.display = 'flex';
    document.getElementById('modal-image').src = src;
    document.getElementById('modal-caption').textContent = name;
}

function closeImageModal() {
    document.getElementById('image-modal').style.display = 'none';
}
