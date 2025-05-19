// Modal Component

/**
 * Initialize the modals
 */
function initModals() {
  initSizeChartModal();
  initCompareColorsModal();
}

/**
 * Initialize the size chart modal
 */
function initSizeChartModal() {
  const sizeChartBtn = document.getElementById('sizeChartBtn');
  const sizeChartModal = document.getElementById('sizeChartModal');
  const closeSizeChartBtn = document.getElementById('closeSizeChartBtn');
  const modalOverlay = document.getElementById('modalOverlay');
  
  sizeChartBtn.addEventListener('click', () => {
    openModal(sizeChartModal);
  });
  
  closeSizeChartBtn.addEventListener('click', () => {
    closeModal(sizeChartModal);
  });
}

/**
 * Initialize the compare colors modal
 */
function initCompareColorsModal() {
  const compareColorsBtn = document.getElementById('compareColorsBtn');
  const compareColorsModal = document.getElementById('compareColorsModal');
  const closeCompareColorsBtn = document.getElementById('closeCompareColorsBtn');
  const modalOverlay = document.getElementById('modalOverlay');
  const compareColorsContainer = document.getElementById('compareColorsContainer');
  
  compareColorsBtn.addEventListener('click', () => {
    // Populate the compare colors modal
    populateCompareColorsModal();
    openModal(compareColorsModal);
  });
  
  closeCompareColorsBtn.addEventListener('click', () => {
    closeModal(compareColorsModal);
  });
  
  /**
   * Populate the compare colors modal with color options
   */
  function populateCompareColorsModal() {
    compareColorsContainer.innerHTML = '';
    
    productData.mainProduct.colors.forEach(color => {
      const colorItem = createElement('div', {
        className: 'compare-color-item'
      }, [
        createElement('div', {
          className: 'compare-color-swatch',
          style: {
            backgroundColor: color.value
          }
        }),
        createElement('div', {
          className: 'compare-color-info'
        }, [
          createElement('span', {
            className: 'compare-color-name',
            textContent: color.name
          }),
          createElement('span', {
            className: 'compare-color-desc',
            textContent: color.description
          })
        ]),
        createElement('label', {
          className: 'compare-check'
        }, [
          createElement('input', {
            type: 'checkbox',
            name: 'compareColor',
            value: color.id
          }),
          ' Compare'
        ])
      ]);
      
      compareColorsContainer.appendChild(colorItem);
    });
  }
}

/**
 * Open a modal
 * @param {HTMLElement} modal - The modal element to open
 */
function openModal(modal) {
  const modalOverlay = document.getElementById('modalOverlay');
  
  // Add active class to modal and overlay
  modal.classList.add('active');
  modalOverlay.classList.add('active');
  
  // Disable scroll on body
  document.body.style.overflow = 'hidden';
  
  // Add event listeners
  modalOverlay.addEventListener('click', () => {
    closeModal(modal);
  });
  
  document.addEventListener('keydown', handleEscKey);
  
  /**
   * Handle ESC key to close modal
   * @param {KeyboardEvent} e - The keyboard event
   */
  function handleEscKey(e) {
    if (e.key === 'Escape') {
      closeModal(modal);
    }
  }
}

/**
 * Close a modal
 * @param {HTMLElement} modal - The modal element to close
 */
function closeModal(modal) {
  const modalOverlay = document.getElementById('modalOverlay');
  
  // Remove active class from modal and overlay
  modal.classList.remove('active');
  modalOverlay.classList.remove('active');
  
  // Enable scroll on body
  document.body.style.overflow = '';
  
  // Remove event listeners
  document.removeEventListener('keydown', handleEscKey);
  
  /**
   * Handle ESC key to close modal
   * @param {KeyboardEvent} e - The keyboard event
   */
  function handleEscKey(e) {
    if (e.key === 'Escape') {
      closeModal(modal);
    }
  }
}