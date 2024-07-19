// Content Scripts: These are JavaScript files injected into the web page's context by the browser extension. They have access to the DOM of the web page and can interact with it.

//Isolated Worlds: Each content script runs in its own isolated environment or "world". This isolation ensures that the JavaScript running in the content script does not interfere with or be interfered by the JavaScript on the actual web page. Isolated worlds are essential for maintaining security and preventing conflicts with the page's scripts.


//example: Suppose you have a browser extension that enhances the functionality of a social media website by adding a "Share" button to each post.

// Content script (content.js)


// Add a "Share" button to each post
function addShareButton(postElement) {
    const shareButton = document.createElement('button');
    shareButton.textContent = 'Share';
    shareButton.addEventListener('click', () => {
        // Send a message to the background script to share the post
        chrome.runtime.sendMessage({ action: 'sharePost', postId: postElement.id });
    });
    postElement.appendChild(shareButton);
}

// Find all posts on the page and add the "Share" button
document.querySelectorAll('.post').forEach(addShareButton);


// Messaging: Here, chrome.runtime.sendMessage() is used to send a message to the background script when the "Share" button is clicked.
