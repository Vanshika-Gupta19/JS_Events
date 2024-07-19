// Example scenario with panel window:-

// Opening a Panel Window: Suppose the extension has a settings panel that opens in a separate window when the user clicks a settings button.

// Background script (background.js)

// Example: Open settings panel in a separate window
function openSettingsPanel() {
    chrome.windows.create({
        url: 'settings.html',
        type: 'popup',
        width: 400,
        height: 300
    });
}

// Communication with Panel Window: Messaging can be used to communicate between the panel window and the extension's background script.

// Panel window script (settings.js)

// Example: Send a message to the background script to save settings
function saveSettings(settings) {
    chrome.runtime.sendMessage({ action: 'saveSettings', settings: settings });
}

// Example: Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'settingsSaved') {
        console.log('Settings saved successfully!');
        // Example: Update UI to reflect saved settings
    }
});