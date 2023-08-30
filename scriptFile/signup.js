// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.querySelector('.signup-form');
//     const nameInput = form.querySelector('input[type="text"]');
//     const emailInput = form.querySelector('input[type="email"]');
//     const passwordInput = form.querySelector('input[type="password"]');
    
//     form.addEventListener('submit', async function (event) {
//         event.preventDefault();

//         // Reset previous error messages and styles
//         const errorMessages = form.querySelectorAll('.error-message');
//         errorMessages.forEach(element => {
//             element.textContent = '';
//         });
//         form.querySelectorAll('.input-group').forEach(element => {
//             element.classList.remove('error');
//         });

//         // Perform validation
//         let isValid = true;

//         if (nameInput.value.trim() === '') {
//             showErrorMessage(nameInput, 'Name is required');
//             isValid = false;
//         }

//         if (emailInput.value.trim() === '') {
//             showErrorMessage(emailInput, 'Email is required');
//             isValid = false;
//         } else if (!isValidEmail(emailInput.value)) {
//             showErrorMessage(emailInput, 'Invalid email format');
//             isValid = false;
//         }

//         if (passwordInput.value === '') {
//             showErrorMessage(passwordInput, 'Password is required');
//             isValid = false;
//         }

//         if (isValid) {
//             // Simulate successful signup by storing user information in localStorage
//             const user = {
//                 name: nameInput.value.trim(),
//                 email: emailInput.value.trim(),
//                 password: passwordInput.value
//             };
//             localStorage.setItem('user', JSON.stringify(user));

//             // Redirect the user to the main page
//             window.location.href = '/index.html';
//         }
//     });

//     function showErrorMessage(inputElement, message) {
//         const errorMessage = document.createElement('div');
//         errorMessage.className = 'error-message';
//         errorMessage.textContent = message;
//         inputElement.closest('.input-group').classList.add('error');
//         inputElement.parentNode.appendChild(errorMessage);
//     }

//     function isValidEmail(email) {
//         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailPattern.test(email);
//     }
// });



const signupButton = document.getElementById('signupButton');

signupButton.addEventListener('click', async function () {
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');

    // Simulate successful signup by storing user information in sessionStorage
    const user = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        password: passwordInput.value
    };
    sessionStorage.setItem('user', JSON.stringify(user));

    // Redirect the user to the sign-in page
    window.location.href = '/every-html/signin.html';
});
