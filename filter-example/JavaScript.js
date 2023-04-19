const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.getAttribute('data-tab');
    const activeTab = document.querySelector('.tab.active');
    const activeTabContent = document.querySelector('.tab-content.active');

    // Remove 'active' class from current active tab and content
    activeTab.classList.remove('active');
    activeTabContent.classList.remove('active');

    // Add 'active' class to new tab and content
    tab.classList.add('active');
    document.querySelector(`.tab-content[data-tab="${tabId}"]`).classList.add('active');
  });
});
