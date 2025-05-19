// Product Bundle Component

/**
 * Initialize the product bundle
 * @param {Array} products - Array of bundle product objects
 */
function initProductBundle(products) {
  const bundleContainer = document.getElementById('productBundle');
  bundleContainer.innerHTML = '';
  
  // Create bundle products
  const bundleProducts = createElement('div', {
    className: 'bundle-products'
  });
  
  // Calculate total price
  let totalPrice = 0;
  let regularPrice = 0;
  
  products.forEach((product, index) => {
    const bundleProduct = createElement('div', {
      className: 'bundle-product'
    }, [
      createElement('div', {
        className: 'bundle-product-image'
      }, [
        createElement('img', {
          src: product.image,
          alt: product.name
        })
      ]),
      createElement('h3', {
        className: 'bundle-product-name',
        textContent: product.name
      }),
      createElement('div', {
        className: 'bundle-product-price',
        textContent: formatPrice(product.price)
      })
    ]);
    
    // Add main product label if applicable
    if (product.isMainProduct) {
      bundleProduct.querySelector('.bundle-product-image').appendChild(
        createElement('div', {
          className: 'main-product-label',
          textContent: 'Current Item'
        })
      );
    }
    
    bundleProducts.appendChild(bundleProduct);
    
    // Add plus sign between products
    if (index < products.length - 1) {
      bundleProducts.appendChild(
        createElement('div', {
          className: 'bundle-plus',
          textContent: '+'
        })
      );
    }
    
    // Add to total price
    totalPrice += product.price;
  });
  
  // Apply bundle discount (10%)
  const discountedPrice = totalPrice * 0.9;
  const savings = totalPrice - discountedPrice;
  
  // Create bundle summary
  const bundleSummary = createElement('div', {
    className: 'bundle-summary'
  }, [
    createElement('div', {
      className: 'bundle-pricing'
    }, [
      createElement('div', {
        className: 'bundle-total-label',
        textContent: 'Bundle Price'
      }),
      createElement('div', {
        className: 'bundle-total-price',
        textContent: formatPrice(discountedPrice)
      }),
      createElement('div', {
        className: 'bundle-savings',
        textContent: `Save ${formatPrice(savings)}`
      })
    ]),
    createElement('button', {
      className: 'btn btn-primary bundle-button',
      textContent: 'Add Bundle to Cart',
      onclick: () => addBundleToCart(products, discountedPrice)
    })
  ]);
  
  // Append elements to bundle container
  bundleContainer.appendChild(bundleProducts);
  bundleContainer.appendChild(bundleSummary);
}

/**
 * Add bundle to cart (dummy function)
 * @param {Array} products - Array of bundle products
 * @param {number} bundlePrice - The discounted bundle price
 */
function addBundleToCart(products, bundlePrice) {
  // In a real implementation, this would add the bundle to the cart
  console.log(`Added bundle (${products.length} items) to cart for ${formatPrice(bundlePrice)}`);

  // Update cart count (for demo purposes)
  const cartCount = document.querySelector('.cart-count');
  const currentCount = parseInt(cartCount.textContent);
  cartCount.textContent = currentCount + products.length;

  // Show feedback animation
  cartCount.classList.add('pulse');
  setTimeout(() => {
    cartCount.classList.remove('pulse');
  }, 500);

  // Show success message similar to addToCart
  const productNames = products.map(p => p.name).join(', ');
  const successMessage = createElement('div', {
    className: 'add-to-cart-success',
    textContent: `Bundle added to cart: ${productNames} for ${formatPrice(bundlePrice)}`
  });

  document.body.appendChild(successMessage);

  setTimeout(() => {
    successMessage.classList.add('show');
  }, 100);

  setTimeout(() => {
    successMessage.classList.remove('show');
    setTimeout(() => {
      successMessage.remove();
    }, 300);
  }, 3000);
}
