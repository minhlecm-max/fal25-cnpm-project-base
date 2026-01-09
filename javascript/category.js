function getCategoryFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('category');
}

function getSelectedTable() {
    return localStorage.getItem('selectedTable') || '1';
}

function saveSelectedTable(tableId) {
    localStorage.setItem('selectedTable', tableId);
    updateCartBadge();
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

function renderCategoryItems() {
    const categoryName = getCategoryFromUrl();
    const container = document.getElementById('category-items-container');

    if (!categoryName) {
        window.location.href = './menu.html';
        return;
    }

    const categoryItems = menu.filter(item => item.category === categoryName);

    document.title = `${categoryName} - Nhà hàng`;
    document.getElementById('category-name').textContent = categoryName;
    document.getElementById('item-count').textContent = `${categoryItems.length} món`;

    if (categoryItems.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-utensils fa-3x text-muted mb-3"></i>
                <h4>Không có món nào trong danh mục này</h4>
                <a href="./menu.html" class="btn btn-primary mt-3">Quay lại Menu</a>
            </div>
        `;
        return;
    }

    let html = '';
    categoryItems.forEach(item => {
        html += `
            <div class="col-md-6 col-lg-3 mb-3">
                <div class="menu-card" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}" class="menu-image" onclick="openImageModal('${item.image}', '${item.name}')">
                    <div class="menu-info">
                        <h5 class="menu-name">${item.name}</h5>
                        <p class="menu-description">${item.description || ''}</p>
                        <div class="text-danger fw-bold mb-2" style="font-size: 1.1rem;">${formatPrice(item.price)}</div>
                        <div class="d-flex justify-content-between align-items-center">
                             <div class="quantity-control d-flex align-items-center border rounded px-2" style="background: white;">
                                <button class="btn btn-sm btn-link text-decoration-none p-0 text-dark" onclick="adjustQty(${item.id}, -1)">-</button>
                                <span class="mx-2 fw-bold" id="qty-${item.id}">1</span>
                                <button class="btn btn-sm btn-link text-decoration-none p-0 text-dark" onclick="adjustQty(${item.id}, 1)">+</button>
                            </div>
                            <button class="btn btn-add" onclick="addToCart(${item.id})">
                                <i class="fas fa-plus"></i> Thêm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function adjustQty(itemId, change) {
    const qtyElement = document.getElementById(`qty-${itemId}`);
    let currentQty = parseInt(qtyElement.textContent);
    currentQty += change;
    if (currentQty < 1) currentQty = 1;
    qtyElement.textContent = currentQty;
}

function addToCart(itemId) {
    const item = menu.find(m => m.id === itemId);
    if (!item) return;

    const qtyElement = document.getElementById(`qty-${itemId}`);
    const quantity = parseInt(qtyElement.textContent);

    let cart = getCart();
    const existingItem = cart.find(c => c.id === itemId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: quantity
        });
    }

    saveCart(cart);
    updateCartBadge();

    qtyElement.textContent = 1;

    const tableId = getSelectedTable();
    showToast(`Đã thêm ${quantity} "${item.name}" vào thực đơn của Bàn ${tableId}!`);
}

function updateCartBadge() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalItems;
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

document.addEventListener('DOMContentLoaded', () => {
    renderCategoryItems();
    updateCartBadge();
    createImageModal();

    const tableSelect = document.getElementById('table-select');
    tableSelect.value = getSelectedTable();

    tableSelect.addEventListener('change', (e) => {
        saveSelectedTable(e.target.value);
    });
});

function createImageModal() {
    const modal = document.createElement('div');
    modal.id = 'image-modal';
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="image-modal-content">
            <span class="image-modal-close" onclick="closeImageModal()">&times;</span>
            <img id="modal-image" src="" alt="">
            <p id="modal-caption"></p>
        </div>
    `;
    document.body.appendChild(modal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeImageModal();
        }
    });
}

function openImageModal(imageSrc, imageName) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const caption = document.getElementById('modal-caption');

    modal.style.display = 'flex';
    modalImg.src = imageSrc;
    caption.textContent = imageName;
}

function closeImageModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';
}
