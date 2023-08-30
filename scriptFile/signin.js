const signInButton = document.getElementById('signInButton');

signInButton.addEventListener('click', async function () {
    const signInEmail = document.getElementById('signInEmail');
    const signInPassword = document.getElementById('signInPassword');

    // Retrieve user data from sessionStorage
    const storedUser = JSON.parse(sessionStorage.getItem('user'));

    if (storedUser && signInEmail.value === storedUser.email && signInPassword.value === storedUser.password) {
        // Successful sign-in, redirect to index.html
        window.location.href = 'index.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});
