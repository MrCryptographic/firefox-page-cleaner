let isCleaning = false;
let hiddenElements = [];
let highlightedElement = null;

// --- Communication ---
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'toggle-cleaning') {
        isCleaning = !isCleaning;
        if (isCleaning) {
            startCleaning();
        } else {
            stopCleaning();
        }
        sendResponse({ cleaningStatus: isCleaning });
    } else if (message.action === 'reset-page') {
        resetPage();
    }
});

// --- Core Logic ---
function startCleaning() {
    document.addEventListener('mouseover', highlightElement);
    document.addEventListener('mouseout', unhighlightElement);
    document.addEventListener('click', hideElement, true); // Use capturing to prevent links from being followed
    document.body.style.cursor = 'crosshair';
}

function stopCleaning() {
    document.removeEventListener('mouseover', highlightElement);
    document.removeEventListener('mouseout', unhighlightElement);
    document.removeEventListener('click', hideElement, true);
    if (highlightedElement) {
        unhighlightElement({ target: highlightedElement });
    }
    document.body.style.cursor = 'default';
}

function resetPage() {
    hiddenElements.forEach(el => {
        el.style.display = ''; // Reset to default display style
    });
    hiddenElements = [];
    stopCleaning();
}

// --- Event Handlers ---
function highlightElement(e) {
    if (e.target.tagName === 'BODY') return;
    highlightedElement = e.target;
    // Use outline for better visibility without affecting layout
    highlightedElement.style.outline = '2px solid #ff4d4d';
    highlightedElement.style.outlineOffset = '-2px';
}

function unhighlightElement(e) {
    if (e.target === highlightedElement) {
        highlightedElement.style.outline = '';
        highlightedElement.style.outlineOffset = '';
        highlightedElement = null;
    }
}

function hideElement(e) {
    if (!isCleaning) return;

    e.preventDefault();
    e.stopPropagation();

    if (e.target && e.target.tagName !== 'BODY') {
        const targetElement = e.target;
        targetElement.style.display = 'none';
        hiddenElements.push(targetElement);
    }
}