const prices = {
    '1': 195,
    '2': 345,
    '3': 528
};

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const totalDisplay = document.getElementById('total');

function updateTotal() {
    let total = 0;
    checkboxes.forEach(cb => {
        if (cb.checked) {
            total += prices[cb.id.split('-')[1]];
        }
    });
    totalDisplay.textContent = total.toFixed(2);
}

checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
        if (cb.checked) {
            checkboxes.forEach(otherCb => {
                if (otherCb !== cb) {
                    otherCb.checked = false;
                    otherCb.closest('.product-box').classList.remove('active', 'expanded');
                }
            });
            cb.closest('.product-box').classList.add('active', 'expanded');
        } else {
            cb.closest('.product-box').classList.remove('active', 'expanded');
        }
        updateTotal();
    });
});

document.querySelectorAll('.product-box').forEach(card => {
    card.addEventListener('click', (e) => {
        if (
            e.target.tagName.toLowerCase() === 'input' || 
            e.target.tagName.toLowerCase() === 'label' || 
            e.target.classList.contains('price-display') || 
            e.target.classList.contains('discount-badge')
        ) return;

        const checkbox = card.querySelector('input[type="checkbox"]');
        checkbox.checked = !checkbox.checked;
        checkbox.dispatchEvent(new Event('change'));
    });
});

document.getElementById('addToCart').addEventListener('click', () => {
    const selected = Array.from(checkboxes).filter(cb => cb.checked);
    if (selected.length > 0) {
        const totalSum = selected.reduce((sum, cb) => sum + prices[cb.id.split('-')[1]], 0);
        alert(`Added to cart: ${totalSum.toFixed(2)}`);
    } else {
        alert('Please select one box before adding to cart.');
    }
});const prices = {
    '1': 195,
    '2': 345,
    '3': 528
};

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const totalDisplay = document.getElementById('total');

function updateTotal() {
    let total = 0;
    checkboxes.forEach(cb => {
        if (cb.checked) {
            total += prices[cb.id.split('-')[1]];
        }
    });
    totalDisplay.textContent = total.toFixed(2);
}

checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
        if (cb.checked) {
            checkboxes.forEach(otherCb => {
                if (otherCb !== cb) {
                    otherCb.checked = false;
                    otherCb.closest('.product-box').classList.remove('active', 'expanded');
                }
            });
            cb.closest('.product-box').classList.add('active', 'expanded');
        } else {
            cb.closest('.product-box').classList.remove('active', 'expanded');
        }
        updateTotal();
    });
});

document.querySelectorAll('.product-box').forEach(card => {
    card.addEventListener('click', (e) => {
        if (
            e.target.tagName.toLowerCase() === 'input' || 
            e.target.tagName.toLowerCase() === 'label' || 
            e.target.classList.contains('price-display') || 
            e.target.classList.contains('discount-badge')
        ) return;

        const checkbox = card.querySelector('input[type="checkbox"]');
        checkbox.checked = !checkbox.checked;
        checkbox.dispatchEvent(new Event('change'));
    });
});

document.getElementById('addToCart').addEventListener('click', () => {
    const selected = Array.from(checkboxes).filter(cb => cb.checked);
    if (selected.length > 0) {
        const totalSum = selected.reduce((sum, cb) => sum + prices[cb.id.split('-')[1]], 0);
        alert(`Added to cart: ${totalSum.toFixed(2)}`);
    } else {
        alert('Please select one box before adding to cart.');
    }
});
