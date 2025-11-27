const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
let currentTabId = null;

// Get the active tab to send messages to
browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
    currentTabId = tabs[0].id;

    // Inject the content script into the active tab
    browser.scripting.executeScript({
        target: { tabId: currentTabId },
        files: ['content.js']
    }).catch(err => console.error("Failed to inject script:", err));

}).catch(err => console.error("Failed to query tabs:", err));

// --- Event Listeners ---
startBtn.addEventListener('click', async () => {
    if (!currentTabId) return;

    // Send a message to the content script to toggle its state
    const response = await browser.tabs.sendMessage(currentTabId, { action: 'toggle-cleaning' });
    
    // Update button text based on the response from content.js
    if (response.cleaningStatus) {
        startBtn.textContent = 'Stop Cleaning';
        startBtn.style.backgroundColor = '#d9534f';
    } else {
        startBtn.textContent = 'Start Cleaning';
        startBtn.style.backgroundColor = '#0078d4';
    }
    window.close(); // Close the popup after clicking
});

resetBtn.addEventListener('click', () => {
    if (!currentTabId) return;
    browser.tabs.sendMessage(currentTabId, { action: 'reset-page' });
    window.close(); // Close the popup after clicking
});