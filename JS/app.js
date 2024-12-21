// Toggle Registration Form Visibility
document.getElementById('showRegisterForm').addEventListener('click', () => {
    document.getElementById('registrationSection').style.display = 'block';
});

// Login Form Submission
document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: email, password })
    });

    const result = await response.json();
    if (response.ok) {
        alert(`Welcome back, ${result.username}!`);
        // You can redirect to a profile page or store user data here
    } else {
        alert(result.error);
    }
});

// Registration Form Submission
document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const result = await response.json();
    alert(result.message);

    // this hides registration form after successful registration
    if (response.ok) {
        document.getElementById('registrationSection').style.display = 'none';
    }
});
