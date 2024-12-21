document.getElementById('registerForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevents the default form submission behavior
  
    // Collect the form data
    const username = document.getElementById('firstName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
        // Send a POST request to the backend
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });
  
        const data = await response.json();
  
        if (response.ok) {
            alert(data.message); // Display success message
            window.location.href = 'profile.html';
        } else {
            alert(data.error);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});
