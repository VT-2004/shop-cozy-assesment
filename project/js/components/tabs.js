// Product Tabs Component

/**
 * Initialize the product tabs
 */
function initProductTabs() {
  const tabsContainer = document.getElementById('productTabs');
  const tabButtons = tabsContainer.querySelectorAll('.tab-btn');
  const tabPanels = tabsContainer.querySelectorAll('.tab-panel');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTabId = button.dataset.tab;
      
      // Update active tab button
      tabButtons.forEach(btn => {
        if (btn.dataset.tab === targetTabId) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
      
      // Update active tab panel
      tabPanels.forEach(panel => {
        if (panel.id === `${targetTabId}Panel`) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });
  
  // Handle tab anchor links in URL
  window.addEventListener('load', () => {
    const hash = window.location.hash;
    if (hash) {
      const tabId = hash.substring(1);
      const tabButton = tabsContainer.querySelector(`.tab-btn[data-tab="${tabId}"]`);
      if (tabButton) {
        tabButton.click();
      }
    }
  });
}