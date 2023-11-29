// Toggle mobile menu
const menuBtn = document.querySelector('#menu-btn');
const menu = document.querySelector('#mobile-menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('open');
});

// Product filter
const filters = document.querySelectorAll('.filter');

filters.forEach(filter => {
    filter.addEventListener('click', e => {
        let filterValue = e.target.dataset['filter'];
        displayProducts(filterValue);
    });
});

function displayProducts(filter) {
    // Filter products based on filterValue
}

// Add to cart
const cartBtns = document.querySelectorAll('.add-to-cart');

cartBtns.forEach(btn => {
    btn.addEventListener('click', addToCart);
});

function addToCart(e) {
    let product = e.target.closest('.product');
    // Get product info and add to cart object
    // Update cart count 
}

// Cart sidebar
const cartBtn = document.querySelector('#cart-btn');
const cartSidebar = document.querySelector('.cart-sidebar');

cartBtn.addEventListener('click', () => {
    cartSidebar.classList.toggle('open');
});

// Update quantities
const qtyBtns = document.querySelectorAll('.qty-btn');

qtyBtns.forEach(btn => {
    btn.addEventListener('click', updateQty);
});

function updateQty(e) {
    // Increase/decrease quantity
    // Update totals
}