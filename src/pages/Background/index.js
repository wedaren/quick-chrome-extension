chrome.runtime.onInstalled.addListener(() => {
  chrome.sidePanel.setOptions({ path: 'sidePanel.html' });
  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
});
