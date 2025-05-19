// Product Gallery Component

/**
 * Initialize the product gallery
 * @param {HTMLElement} galleryContainer - The gallery container element
 * @param {Array} images - Array of image objects with src and alt
 */
function initGallery(galleryContainer, images) {
  const thumbnailsContainer = document.getElementById('productThumbnails');
  const mainImageContainer = document.getElementById('mainImageContainer');
  
  // Clear existing content
  thumbnailsContainer.innerHTML = '';
  mainImageContainer.innerHTML = '';
  
  // Create thumbnails
  images.forEach((image, index) => {
    const thumbnail = createElement('div', {
      className: `thumbnail ${index === 0 ? 'active' : ''}`,
      dataset: { index: index }
    }, [
      createElement('img', {
        src: image.src,
        alt: image.alt
      })
    ]);
    
    thumbnail.addEventListener('click', () => {
      setActiveImage(index);
    });
    
    thumbnailsContainer.appendChild(thumbnail);
  });
  
  // Create main image
  const mainImage = createElement('img', {
    className: 'main-image',
    src: images[0].src,
    alt: images[0].alt
  });
  
  // Add zoom functionality
  mainImage.addEventListener('mousemove', handleImageZoom);
  mainImage.addEventListener('mouseleave', () => {
    mainImage.classList.remove('zoomed');
    mainImage.style.transformOrigin = 'center center';
  });
  
  mainImageContainer.appendChild(mainImage);
  
  /**
   * Set the active image
   * @param {number} index - The index of the image to set as active
   */
  function setActiveImage(index) {
    // Update thumbnails
    const thumbnails = thumbnailsContainer.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, i) => {
      if (i === index) {
        thumb.classList.add('active');
      } else {
        thumb.classList.remove('active');
      }
    });
    
    // Update main image
    mainImage.src = images[index].src;
    mainImage.alt = images[index].alt;
    
    // Save the selected image index to localStorage
    saveToLocalStorage('selectedImageIndex', index);
  }
  
  /**
   * Handle the image zoom effect
   * @param {Event} e - The mouse event
   */
  function handleImageZoom(e) {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    mainImage.classList.add('zoomed');
    mainImage.style.transformOrigin = `${x}% ${y}%`;
  }
  
  // Initialize with previously selected image from localStorage
  const savedImageIndex = getFromLocalStorage('selectedImageIndex', 0);
  if (savedImageIndex > 0 && savedImageIndex < images.length) {
    setActiveImage(savedImageIndex);
  }
}

/**
 * Update the gallery images when changing product colors
 * @param {Array} images - Array of image objects with src and alt
 */
function updateGalleryImages(images) {
  initGallery(document.getElementById('productGallery'), images);
}