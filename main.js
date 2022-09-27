let currentProducts = products
let categories = new Set()

const productsSection = document.querySelector('.products')
const renderProducts = items => {
	productsSection.innerHTML = ''
	for (let i = 0; i < items.length; i++) {
		const newProduct = document.createElement('div')
		newProduct.className = `product-item ${items[i].sale ? 'onSale' : ''}`
		newProduct.innerHTML = `
        <img src="${items[i].image}" alt="product-image">
        <h3 class="product-name">${items[i].name}</h3>
        <p class="product-description">${items[i].description}</p>
        <div class="product-price">
            <span class="price">${items[i].price.toFixed(2)}zł</span>
            <span class="price-sale">${(items[i].price - items[i].saleAmount).toFixed(2)}zł</span>
        </div>
        <button class=""><i class="fa-solid fa-cart-shopping"></i> Dodaj do koszyka</button>
        <p class="product-item-sale-info">Promocja</p>`

		productsSection.appendChild(newProduct)
	}
}

const renderCategories = items => {
	for (let i = 0; i < items.length; i++) {
		categories.add(items[i].category)
	}

	const categoriesItems = document.querySelector('.categories-items')

	categories = ['Wszystkie', ...categories]

	categories.forEach((category, index) => {
		const newCategory = document.createElement('button')
		newCategory.innerHTML = category
		newCategory.dataset.category = category

		index === 0 ? newCategory.classList.add('active') : ''

		categoriesItems.appendChild(newCategory)
	})
}

document.onload = renderCategories(currentProducts)
document.onload = renderProducts(currentProducts)

const categoriesButtons = document.querySelectorAll('.categories-items button')

categoriesButtons.forEach(btn =>
	btn.addEventListener('click', e => {
		const category = e.target.dataset.category

		categoriesButtons.forEach(btn => btn.classList.remove('active'))
		e.target.classList.add('active')

		currentProducts = products

		if (category === 'Wszystkie') {
			currentProducts = products
		} else {
			currentProducts = currentProducts.filter(item => item.category === category)
		}
		renderProducts(currentProducts)
	})
)

const searchBarInput = document.querySelector('.search-bar-input')

searchBarInput.addEventListener('input', e => {
	const search = e.target.value

	const foundProducts = currentProducts.filter(product => {
		if (product.name.toLowerCase().includes(search.toLowerCase())) {
			return product
		}
	})

	renderProducts(foundProducts)
})