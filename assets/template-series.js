class TabsComponent extends HTMLElement {
  constructor() {
    super();
    this.tabs = this.querySelectorAll('.tab-heading');
    this.tabs.forEach(tab => {
      tab.addEventListener('click', this.handleTabClick.bind(this, tab));
    });
  }

  handleTabClick(clickedTab) {
    if (!clickedTab.classList.contains('active')) {
      const activeTab = this.querySelector('.tab-heading.active');
      const activeTabId = activeTab.dataset.id;
      const targetId = clickedTab.dataset.id;

      this.hideTab(activeTabId);
      this.showTab(targetId);

      activeTab.classList.remove('active');
      clickedTab.classList.add('active');
    }
  }

  hideTab(tabId) {
    if (this.classList.contains('normal-tab')) {
      this.querySelector(`.tab-detail[data-id='${tabId}']`).classList.add('active');
    } else {
      this.querySelector(`.tab-detail[data-id='${tabId}']`).classList.add('active');
    }
  }

  showTab(tabId) {
    if (this.classList.contains('normal-tab')) {
      this.querySelector(`.tab-detail[data-id='${tabId}']`).classList.remove('hidden');
    } else {
      this.querySelector(`.tab-detail[data-id='${tabId}']`).classList.remove('lg:hidden');
    }
  }
}

if (!customElements.get('tabs-component')) {
  customElements.define('tabs-component', TabsComponent);
}