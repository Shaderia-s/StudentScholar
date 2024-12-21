document.addEventListener("DOMContentLoaded", () => {
    const commentForm = document.getElementById("commentForm");
    const commentText = document.getElementById("commentText");
    const commentsContainer = document.getElementById("commentsContainer");

    // Load existing comments from LocalStorage
    function loadComments() {
        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        commentsContainer.innerHTML = "";
        comments.forEach(comment => {
            const commentDiv = document.createElement("div");
            commentDiv.classList.add("comment");
            commentDiv.innerHTML = `<p>${comment}</p>`;
            commentsContainer.appendChild(commentDiv);
        });
    }

    // Save a new comment to LocalStorage
    function saveComment(comment) {
        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        comments.push(comment);
        localStorage.setItem("comments", JSON.stringify(comments));
    }

    // Handle form submission
    commentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const comment = commentText.value.trim();
        if (comment) {
            saveComment(comment);
            commentText.value = ""; // Clear the textarea
            loadComments(); // Refresh the comment list
        }
    });

    // Load comments on page load
    loadComments();
});

// Access to camera
let localStream;

async function startSession() {
    const username = document.getElementById('username').value;
    if (!username) {
        alert('Please enter your name to start the session.');
        return;
    }

    document.querySelector('.session-start-container').style.display = 'none';
    document.querySelector('.video-chat-container').style.display = 'flex';

    try {
        // Request access to the camera and microphone
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        const videoElement = document.getElementById('localVideo');
        videoElement.srcObject = localStream; // Display the stream in the video element
    } catch (error) {
        console.error("Error accessing media devices.", error);
        alert("Could not access the camera. Please check your permissions.");
    }
}

function stopCamera() {
    if (localStream) {
        // Stop all video and audio tracks
        localStream.getTracks().forEach(track => track.stop());
        localStream = null;
        document.querySelector('.video-chat-container').style.display = 'none';
        document.querySelector('.session-start-container').style.display = 'block';
    }
}

// Chat functionality
function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    if (message) {
        const chatMessages = document.getElementById('chatMessages');
        const messageContainer = document.createElement('div');
        messageContainer.className = 'chat-message';
        messageContainer.innerText = message;
        chatMessages.appendChild(messageContainer);
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the latest message
    }
}

// Comment functionality (if needed for the comment section)
document.addEventListener("DOMContentLoaded", () => {
    const commentForm = document.getElementById("commentForm");
    const commentText = document.getElementById("commentText");
    const commentsContainer = document.getElementById("commentsContainer");

    // Load existing comments from LocalStorage
    function loadComments() {
        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        commentsContainer.innerHTML = "";
        comments.forEach(comment => {
            const commentDiv = document.createElement("div");
            commentDiv.classList.add("comment");
            commentDiv.innerHTML = `<p>${comment}</p>`;
            commentsContainer.appendChild(commentDiv);
        });
    }

    // Save a new comment to LocalStorage
    function saveComment(comment) {
        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        comments.push(comment);
        localStorage.setItem("comments", JSON.stringify(comments));
    }

    // Handle form submission
    if (commentForm) {
        commentForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const comment = commentText.value.trim();
            if (comment) {
                saveComment(comment);
                commentText.value = ""; // Clear the textarea
                loadComments(); // Refresh the comment list
            }
        });
    }

    // Load comments on page load
    loadComments();
});

//Checklist section
// JavaScript to handle the checklist behavior
document.addEventListener('DOMContentLoaded', () => {
    const checklistItems = document.querySelectorAll('#movein-checklist li');

    // Loop through each checklist item
    checklistItems.forEach(item => {
        const checkbox = item.querySelector('input[type="checkbox"]');

        // Add event listener for checkbox change
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                // If checked, apply the "checked" class to grey it out and strike through
                item.classList.add('checked');
            } else {
                // If unchecked, remove the "checked" class
                item.classList.remove('checked');
            }
        });
    });
});
