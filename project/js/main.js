// Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all components
  initProductPage();
  
  // Add to cart button event listener
  const addToCartBtn = document.getElementById('addToCartBtn');
  addToCartBtn.addEventListener('click', handleAddToCart);
  
  // Add CSS class for animations
  setTimeout(() => {
    document.body.classList.add('page-loaded');
  }, 100);
});

/**
 * Initialize the product page
 */
function initProductPage() {
  // Initialize product gallery
  initGallery(
    document.getElementById('productGallery'), 
    productData.mainProduct.images
  );
  
  // Initialize product variants
  initVariants(productData.mainProduct);
  
  // Initialize modals
  initModals();
  
  // Initialize product tabs
  initProductTabs();
  
  // Initialize related products
  initRelatedProducts(productData.relatedProducts);
  
  // Initialize pairs well products
  initPairsWellProducts(productData.pairsWellProducts);
  
  // Initialize product bundle
  initProductBundle(productData.bundleProducts);
}

/**
 * Handle add to cart button click
 */
function handleAddToCart() {
  // Get selected variants
  const selectedColor = document.querySelector('.color-swatch.active');
  const selectedSize = document.querySelector('.size-btn.active');
  const quantity = parseInt(document.getElementById('quantityInput').value);
  
  // Validate selection
  if (!selectedColor) {
    alert('Please select a color');
    return;
  }
  
  if (!selectedSize) {
    alert('Please select a size');
    return;
  }
  
  // Create product object
  const product = {
    id: productData.mainProduct.id,
    name: productData.mainProduct.name,
    price: productData.mainProduct.price,
    color: {
      id: selectedColor.dataset.colorId,
      name: selectedColor.dataset.colorName
    },
    size: {
      id: selectedSize.dataset.sizeId,
      name: selectedSize.textContent
    },
    quantity: quantity
  };
  
  // Add to cart (in a real implementation, this would add to a cart object)
  console.log('Added to cart:', product);
  
  // Update cart count indicator
  const cartCount = document.querySelector('.cart-count');
  const currentCount = parseInt(cartCount.textContent);
  cartCount.textContent = currentCount + quantity;
  
  // Show animation feedback
  addToCartBtn.classList.add('added');
  cartCount.classList.add('pulse');
  
  setTimeout(() => {
    addToCartBtn.classList.remove('added');
    cartCount.classList.remove('pulse');
  }, 1000);
  
  // Show success message
  const successMessage = createElement('div', {
    className: 'add-to-cart-success',
    textContent: `${product.name} (${product.color.name}, ${product.size.name}) added to cart!`
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

// Add styles for dynamic elements
const dynamicStyles = document.createElement('style');
dynamicStyles.textContent = `
  .add-to-cart-success {
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: var(--color-success);
    color: white;
    padding: 12px 20px;
    border-radius: var(--border-radius-md);
    box-shadow: var(--shadow-md);
    transform: translateX(100%);
    opacity: 0;
    transition: all 0.3s ease;
    z-index: 1000;
  }
  
  .add-to-cart-success.show {
    transform: translateX(0);
    opacity: 1;
  }
  
  .btn-primary.added {
    background-color: var(--color-success);
  }
  
  .pulse {
    animation: pulse-animation 0.5s ease-in-out;
  }
  
  @keyframes pulse-animation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
  
  /* Page load animations */
  .page-loaded .product-gallery,
  .page-loaded .product-details,
  .page-loaded .product-tabs,
  .page-loaded .product-bundle,
  .page-loaded .pairs-well,
  .page-loaded .related-products {
    animation: fade-in-up 0.5s ease forwards;
  }
  
  .page-loaded .product-gallery {
    animation-delay: 0.1s;
  }
  
  .page-loaded .product-details {
    animation-delay: 0.2s;
  }
  
  .page-loaded .product-tabs {
    animation-delay: 0.3s;
  }
  
  .page-loaded .product-bundle {
    animation-delay: 0.4s;
  }
  
  .page-loaded .pairs-well {
    animation-delay: 0.5s;
  }
  
  .page-loaded .related-products {
    animation-delay: 0.6s;
  }
  
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

document.head.appendChild(dynamicStyles);