// Products Components

/**
 * Initialize the related products grid
 * @param {Array} products - Array of product objects
 */
function initRelatedProducts(products) {
  const relatedProductsContainer = document.getElementById('relatedProducts');
  relatedProductsContainer.innerHTML = '';
  
  products.forEach(product => {
    const productCard = createProductCard(product);
    relatedProductsContainer.appendChild(productCard);
  });
}

/**
 * Initialize the "Pairs Well With" carousel
 * @param {Array} products - Array of product objects
 */
function initPairsWellProducts(products) {
  const pairsCarousel = document.getElementById('pairsCarousel');
  const prevBtn = document.getElementById('pairsScrollPrev');
  const nextBtn = document.getElementById('pairsScrollNext');
  
  pairsCarousel.innerHTML = '';
  
  products.forEach(product => {
    const productCard = createProductCard(product);
    pairsCarousel.appendChild(productCard);
  });
  
  // Initialize carousel controls
  prevBtn.addEventListener('click', () => {
    pairsCarousel.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  });
  
  nextBtn.addEventListener('click', () => {
    pairsCarousel.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  });
}

/**
 * Create a product card element
 * @param {Object} product - The product object
 * @returns {HTMLElement} The product card element
 */
function createProductCard(product) {
  const productCard = createElement('div', {
    className: 'product-card',
    dataset: { productId: product.id }
  }, [
    createElement('div', {
      className: 'product-card-image'
    }, [
      createElement('img', {
        src: product.image,
        alt: product.name
      })
    ]),
    createElement('div', {
      className: 'product-card-info'
    }, [
      createElement('h3', {
        className: 'product-card-name',
        textContent: product.name
      }),
      createElement('div', {
        className: 'product-card-price',
        textContent: formatPrice(product.price)
      })
    ]),
    createElement('button', {
      className: 'product-card-action',
      title: 'Add to Cart',
      onclick: () => addToCart(product)
    }, [
      createElement('svg', {
        width: '20',
        height: '20',
        viewBox: '0 0 20 20',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        innerHTML: '<path d="M4.16667 4.16675H17.5L15.8333 10.8334H5.83333L4.16667 4.16675Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.08333 15.8333C7.31344 15.8333 7.5 15.6467 7.5 15.4166C7.5 15.1865 7.31344 15 7.08333 15C6.85322 15 6.66667 15.1865 6.66667 15.4166C6.66667 15.6467 6.85322 15.8333 7.08333 15.8333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.5833 15.8333C14.8134 15.8333 15 15.6467 15 15.4166C15 15.1865 14.8134 15 14.5833 15C14.3532 15 14.1667 15.1865 14.1667 15.4166C14.1667 15.6467 14.3532 15.8333 14.5833 15.8333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'
      })
    ])
  ]);
  
  // Add badge if present
  if (product.badge) {
    productCard.appendChild(
      createElement('div', {
        className: 'product-card-badge',
        textContent: product.badge
      })
    );
  }
  
  return productCard;
}

/**
 * Add a product to the cart (dummy function)
 * @param {Object} product - The product to add
 */
function addToCart(product) {
  // In a real implementation, this would add the product to the cart
  console.log(`Added ${product.name} to cart`);
  
  // Update cart count (for demo purposes)
  const cartCount = document.querySelector('.cart-count');
  const currentCount = parseInt(cartCount.textContent);
  cartCount.textContent = currentCount + 1;
  
  // Show feedback animation
  cartCount.classList.add('pulse');
  setTimeout(() => {
    cartCount.classList.remove('pulse');
  }, 500);
}