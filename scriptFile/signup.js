// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.querySelector('.signup-form');
//     const nameInput = form.querySelector('input[type="text"]');
//     const emailInput = form.querySelector('input[type="email"]');
//     const passwordInput = form.querySelector('input[type="password"]');
    
//     form.addEventListener('submit', function (event) {
//         event.preventDefault(); // Prevent default form submission

//         // Reset previous error messages and styles
//         const errorMessages = form.querySelectorAll('.error-message');
//         errorMessages.forEach(element => {
//             element.textContent = '';
//         });
//         form.querySelectorAll('.input-group').forEach(element => {
//             element.classList.remove('error');
//         });

//         // Perform validation
//         if (nameInput.value.trim() === '') {
//             showErrorMessage(nameInput, 'Name is required');
//         }

//         if (emailInput.value.trim() === '') {
//             showErrorMessage(emailInput, 'Email is required');
//         } else if (!isValidEmail(emailInput.value)) {
//             showErrorMessage(emailInput, 'Invalid email format');
//         }

//         if (passwordInput.value === '') {
//             showErrorMessage(passwordInput, 'Password is required');
//         }

//         // You can add more validation rules as needed

//         // If all validation passes, you can proceed with submitting the form
//         // form.submit();
//     });

//     function showErrorMessage(inputElement, message) {
//         const errorMessage = document.createElement('div');
//         errorMessage.className = 'error-message';
//         errorMessage.textContent = message;
//         inputElement.closest('.input-group').classList.add('error');
//         inputElement.parentNode.appendChild(errorMessage);
//     }

//     function isValidEmail(email) {
//         // A simple email format validation using regex
//         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailPattern.test(email);
//     }
// });


document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.signup-form');
    const nameInput = form.querySelector('input[type="text"]');
    const emailInput = form.querySelector('input[type="email"]');
    const passwordInput = form.querySelector('input[type="password"]');
    
    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        // Reset previous error messages and styles
        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(element => {
            element.textContent = '';
        });
        form.querySelectorAll('.input-group').forEach(element => {
            element.classList.remove('error');
        });

        // Perform validation
        let isValid = true;

        if (nameInput.value.trim() === '') {
            showErrorMessage(nameInput, 'Name is required');
            isValid = false;
        }

        if (emailInput.value.trim() === '') {
            showErrorMessage(emailInput, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
            showErrorMessage(emailInput, 'Invalid email format');
            isValid = false;
        }

        if (passwordInput.value === '') {
            showErrorMessage(passwordInput, 'Password is required');
            isValid = false;
        }

        if (isValid) {
            const formData = {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                password: passwordInput.value
            };

            try {
                const response = await fetch('/api/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    // Successfully registered
                    console.log('User registered successfully');
                } else {
                    // Handle error
                    console.error('Error registering user');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    });

    function showErrorMessage(inputElement, message) {
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = message;
        inputElement.closest('.input-group').classList.add('error');
        inputElement.parentNode.appendChild(errorMessage);
    }

    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
