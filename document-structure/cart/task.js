const quantityValue = Array.from(document.querySelectorAll('.product__quantity-value'));

const inc = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
const dec = Array.from(document.querySelectorAll('.product__quantity-control_dec'));

const basket = document.querySelector(".cart__products");
const addButton = Array.from(document.querySelectorAll('.product__add'));

function incQuantityProducts(event) {
    let quantity = Number(event.target.parentElement.querySelector('.product__quantity-value').textContent);
    
    if (quantity > 0) {
        quantity = quantity + 1;
        event.target.parentElement.querySelector('.product__quantity-value').textContent = quantity;
    }
}

function decQuantityProducts(event) {
    let quantity = Number(event.target.parentElement.querySelector('.product__quantity-value').textContent);
    
    if (quantity > 1 ) {
        quantity = quantity - 1;
        event.target.parentElement.querySelector('.product__quantity-value').textContent = quantity;
    }
}

function addBasket(event) {
    let productId = event.target.closest('.product').dataset.id;
	let quantity = Number(event.target.parentElement.querySelector('.product__quantity-value').textContent);
	let srcImage = event.target.closest('.product').querySelector('.product__image').src;
	let addBlock = `
        <div class="cart__product", data-id = "${productId}">
            <img class="cart__product-image", src="${srcImage}">
            <div class="cart__product-count"> ${quantity} </div>
        </div>
        `;
	
	let contentBasket = Array.from(basket.querySelectorAll('.cart__product'));

	if (contentBasket.length === 0) {
		basket.insertAdjacentHTML('afterBegin', addBlock);
	} else {
		let checkBasket = contentBasket.find((e) => e.dataset.id === productId);

		if(!checkBasket) {
			basket.insertAdjacentHTML('afterBegin', addBlock);
		} else {
			checkBasket.querySelector('.cart__product-count').textContent = quantity + Number(checkBasket.querySelector('.cart__product-count').textContent);
		}

	}
}

for (let i of inc) {
    i.addEventListener('click', incQuantityProducts);
}

for (let d of dec) {
    d.addEventListener('click', decQuantityProducts);
}

for (let btn of addButton) {
    btn.addEventListener('click', addBasket);
}
