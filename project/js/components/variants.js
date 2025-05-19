// Product Variants Component

/**
 * Initialize the product variants
 * @param {Object} product - The product data
 */
function initVariants(product) {
  initColorSwatches(product.colors);
  initSizeButtons(product.sizes);
  initQuantityControls();
  
  // Load saved variants from localStorage
  loadSavedVariants();
}

/**
 * Initialize the color swatches
 * @param {Array} colors - Array of color objects
 */
function initColorSwatches(colors) {
  const colorSwatchesContainer = document.getElementById('colorSwatches');
  colorSwatchesContainer.innerHTML = '';
  
  colors.forEach(color => {
    const colorSwatch = createElement('div', {
      className: `color-swatch ${!color.isAvailable ? 'disabled' : ''}`,
      dataset: {
        colorId: color.id,
        colorName: color.name,
        colorValue: color.value
      },
      style: {
        backgroundColor: color.value
      },
      title: color.name
    });
    
    if (color.isAvailable) {
      colorSwatch.addEventListener('click', () => {
        selectColor(color);
      });
    }
    
    colorSwatchesContainer.appendChild(colorSwatch);
  });
}

/**
 * Initialize the size buttons
 * @param {Array} sizes - Array of size objects
 */
function initSizeButtons(sizes) {
  const sizeButtonsContainer = document.getElementById('sizeButtons');
  sizeButtonsContainer.innerHTML = '';
  
  sizes.forEach(size => {
    const sizeBtn = createElement('button', {
      type: 'button',
      className: `size-btn ${!size.isAvailable ? 'disabled' : ''}`,
      dataset: { sizeId: size.id },
      textContent: size.name
    });
    
    if (size.isAvailable) {
      sizeBtn.addEventListener('click', () => {
        selectSize(size);
      });
    }
    
    sizeButtonsContainer.appendChild(sizeBtn);
  });
}

/**
 * Initialize the quantity controls
 */
function initQuantityControls() {
  const quantityInput = document.getElementById('quantityInput');
  const minusBtn = document.getElementById('quantityMinus');
  const plusBtn = document.getElementById('quantityPlus');
  
  minusBtn.addEventListener('click', () => {
    const currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
    }
  });
  
  plusBtn.addEventListener('click', () => {
    const currentValue = parseInt(quantityInput.value);
    if (currentValue < parseInt(quantityInput.max)) {
      quantityInput.value = currentValue + 1;
    }
  });
  
  quantityInput.addEventListener('change', () => {
    let value = parseInt(quantityInput.value);
    if (isNaN(value) || value < 1) {
      value = 1;
    } else if (value > parseInt(quantityInput.max)) {
      value = parseInt(quantityInput.max);
    }
    quantityInput.value = value;
  });
}

/**
 * Select a color
 * @param {Object} color - The color object
 */
function selectColor(color) {
  // Update UI
  const colorSwatches = document.querySelectorAll('.color-swatch');
  colorSwatches.forEach(swatch => {
    if (swatch.dataset.colorId === color.id) {
      swatch.classList.add('active');
    } else {
      swatch.classList.remove('active');
    }
  });
  
  // Update product images
  updateGalleryImages(color.images.map((src, index) => ({
    id: `img-${index + 1}`,
    src,
    alt: `${productData.mainProduct.name} - ${color.name} - View ${index + 1}`
  })));
  
  // Save selected color to localStorage
  saveToLocalStorage('selectedColorId', color.id);
}

/**
 * Select a size
 * @param {Object} size - The size object
 */
function selectSize(size) {
  // Update UI
  const sizeButtons = document.querySelectorAll('.size-btn');
  sizeButtons.forEach(btn => {
    if (btn.dataset.sizeId === size.id) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // Save selected size to localStorage
  saveToLocalStorage('selectedSizeId', size.id);
}

/**
 * Load saved variants from localStorage
 */
function loadSavedVariants() {
  const savedColorId = getFromLocalStorage('selectedColorId');
  const savedSizeId = getFromLocalStorage('selectedSizeId');
  
  // Set selected color
  if (savedColorId) {
    const color = productData.mainProduct.colors.find(color => color.id === savedColorId);
    if (color && color.isAvailable) {
      selectColor(color);
    } else {
      // If saved color isn't available, select first available color
      selectColor(productData.mainProduct.colors.find(color => color.isAvailable));
    }
  } else {
    // Select first available color by default
    selectColor(productData.mainProduct.colors.find(color => color.isAvailable));
  }
  
  // Set selected size
  if (savedSizeId) {
    const size = productData.mainProduct.sizes.find(size => size.id === savedSizeId);
    if (size && size.isAvailable) {
      selectSize(size);
    } else {
      // If saved size isn't available, select first available size
      selectSize(productData.mainProduct.sizes.find(size => size.isAvailable));
    }
  } else {
    // Select first available size by default
    selectSize(productData.mainProduct.sizes.find(size => size.isAvailable));
  }
}