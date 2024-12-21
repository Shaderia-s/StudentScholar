document.addEventListener("DOMContentLoaded", () => {
    const blogForm = document.getElementById("blogForm");
    const blogTitle = document.getElementById("blogTitle");
    const blogContent = document.getElementById("blogContent");
    const blogPosts = document.getElementById("blogPosts");

    // Load posts from LocalStorage on page load
    loadPosts();

    // Handle form submission
    blogForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = blogTitle.value;
        const content = blogContent.value;
        const date = new Date().toLocaleString();

        // Create a post object
        const post = { title, content, date };

        // Save the post to LocalStorage
        savePost(post);

        // Clear the form fields
        blogTitle.value = "";
        blogContent.value = "";

        // Add the post to the DOM
        addPostToDOM(post);
    });

    function loadPosts() {
        // Retrieve posts from LocalStorage
        const posts = JSON.parse(localStorage.getItem("blogPosts")) || [];
        posts.forEach(addPostToDOM);
    }

    function savePost(post) {
        // Get existing posts from LocalStorage
        const posts = JSON.parse(localStorage.getItem("blogPosts")) || [];

        // Add new post to the array
        posts.unshift(post);

        // Save updated posts array to LocalStorage
        localStorage.setItem("blogPosts", JSON.stringify(posts));
    }

    function addPostToDOM(post) {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <small>${post.date}</small>
            <p>${post.content}</p>
        `;
        blogPosts.appendChild(postElement);
    }
});
