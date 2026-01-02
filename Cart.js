let currentTable = 1;

function renderTableSelect() {
    const select = document.getElementById('table-select');
    select.innerHTML = '';

    Object.keys(cartsByTable).forEach(tableId => {
        const option = document.createElement('option');
        option.value = tableId;
        option.textContent = `Bàn ${tableId}`;
        select.appendChild(option);
    });

    select.value = currentTable;
}


function renderCart() {
    const cart = cartsByTable[currentTable];
    const container = document.getElementById('cart-items-container');
    container.innerHTML = '';

    let subtotal = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        const noteHtml = item.note
            ? `<div class="fst-italic text-muted small">📝 ${item.note}</div>`
            : '';

        container.innerHTML += `
            <div class="cart-item mb-4">
                <div class="row align-items-center">
                    <div class="col-3">
                        <img src="${item.image}" class="item-image">
                    </div>

                    <div class="col-4">
                        <div class="fw-bold">${item.name}</div>
                        <div class="text-danger">${item.price.toLocaleString()} VNĐ</div>
                        ${noteHtml}
                    </div>

                    <div class="col-3 text-center">
                        <button class="quantity-btn" onclick="changeQty(${index}, -1)">−</button>
                        <b class="mx-2">${item.quantity}</b>
                        <button class="quantity-btn" onclick="changeQty(${index}, 1)">+</button>
                    </div>

                    <div class="col-2 text-end">
                        <b>${itemTotal.toLocaleString()} VNĐ</b><br>
                        <i class="fas fa-trash remove-btn" onclick="removeItem(${index})"></i>
                    </div>
                </div>
            </div>
        `;
    });

    totalBill(subtotal);
}

function totalBill(subtotal) {
    let discountInput = Number(document.getElementById('discount-input').value);

    if (isNaN(discountInput) || discountInput < 0) {
        discountInput = 0;
        document.getElementById('discount-input').value = 0;
    }
    
    if (discountInput > 100) {
        discountInput = 100;
        document.getElementById('discount-input').value = 0;
    }

    let discount = 0;

    if (discountInput <= 100) {
        discount = subtotal * discountInput / 100;
    } 

    else {
        discount = discountInput;
    }

    if (discount > subtotal) {
        discount = subtotal;
        document.getElementById('discount-input').value = subtotal;
    }

    const total = subtotal - discount;

    document.getElementById('subtotal').innerText =
        subtotal.toLocaleString() + 'VNĐ';

    document.getElementById('discount-amount').innerText =
        '-' + discount.toLocaleString() + 'VNĐ';

    document.getElementById('total-amount').innerText =
        total.toLocaleString() + 'VNĐ';

    document.getElementById('cart-count').innerText =
        cart.reduce((s, i) => s + i.quantity, 0);
}

function changeQty(index, delta) {
    const cart = cartsByTable[currentTable];
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) cart.splice(index, 1);
    renderCart();
}

function removeItem(index) {
    cartsByTable[currentTable].splice(index, 1);
    renderCart();
}

document.getElementById('table-select').addEventListener('change', e => {
    currentTable = Number(e.target.value);
    renderCart();
});

const discount = document.getElementById('discount-input');
discount.addEventListener('input', renderCart);

async function placeOrder() {
    const cart = cartsByTable[currentTable];

    if (!cart || cart.length === 0) {
        alert("Không có món để đặt!");
        return;
    }

    const orderData = {
        table_id: currentTable,
        items: cart.map(item => ({
            menu_id: item.id,
            quantity: item.quantity
        }))
    };

    try {
        const response = await fetch(urlAPI, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData)
        });

        if (response.ok) {
            alert(`Đặt món thành công cho bàn ${currentTable}!`);

            cartsByTable[currentTable] = [];
            renderCart();
        } else {
            alert("Đặt món thất bại!");
        }
    } catch (error) {
        alert("Không kết nối được server!");
    }
}

renderTableSelect();
renderCart();