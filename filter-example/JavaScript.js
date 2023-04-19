// 获取所有筛选标签
const filterTabs = document.querySelectorAll('.filter-tab');
// 获取所有筛选项
const filterItems = document.querySelectorAll('.filter-item');

// 为每个筛选标签添加点击事件
filterTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // 移除所有标签的 active 类
    filterTabs.forEach(tab => {
      tab.classList.remove('active');
    });
    // 添加当前标签的 active 类
    tab.classList.add('active');

    // 获取当前标签的筛选器
    const filter = tab.getAttribute('data-filter');

    // 显示或隐藏每个筛选项
    filterItems.forEach(item => {
      if (filter === 'all') {
        item.style.display = 'flex';
      } else if (item.classList.contains(filter)) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
