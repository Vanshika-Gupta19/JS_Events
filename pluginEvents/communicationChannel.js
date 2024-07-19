// Background script (background.js)

// Background Script (Extension Side): Handles messages from content scripts and performs actions based on those messages.

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'sharePost') {
        // Perform sharing action based on postId
        console.log(`Sharing post with ID: ${message.postId}`);
        // Simulated sharing action
        alert(`Post with ID ${message.postId} has been shared!`);
    }
});



// Web Page Interaction: If the social media website wants to communicate back with the extension (for example, to acknowledge the sharing action), it can do so using window.postMessage().

// Web page script (socialmedia.js) :-

// Example: Web page sends a message to the content script
function acknowledgeShare(postId) {
    // Assuming the content script is listening for messages
    window.postMessage({ action: 'acknowledgeShare', postId: postId }, '*');
}


// Example usage after some event.
acknowledgeShare('123'); // Sends acknowledgment message for post with ID '123'.




// Content Script Receives Message: The content script listens for messages from the web page using window.addEventListener('message', handler).


// Content script (content.js)

// Listen for messages from the web page
window.addEventListener('message', (event) => {
    // Check origin if needed for security
    if (event.source === window && event.data.action === 'acknowledgeShare') {
        console.log(`Received acknowledgment for post with ID: ${event.data.postId}`);
        // Perform actions based on acknowledgment
        // Example: Update UI to reflect acknowledgment
    }
});