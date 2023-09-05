// Function to handle image preview
function previewImage() {
    const fileInput = document.getElementById('myFileInput');
    const imgPreview = document.getElementById('imgPreview');

    fileInput.addEventListener('change', function () {
        const file = fileInput.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                imgPreview.src = e.target.result;
                imgPreview.style.display = 'block';
            };

            reader.readAsDataURL(file);
        }
    });
}

// Function to handle form submission
function handleFormSubmission() {
    const logForm = document.getElementById('logForm');
    const imageDescription = document.getElementById('imageDescription');

    logForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the image data URL and description
        const imageDataURL = imgPreview.src;
        const description = imageDescription.value;

        // Display the uploaded image and description on the same page
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = `
            <img src="${imageDataURL}" alt="Uploaded Image">
            <p>${description}</p>
        `;

        // Clear the form
        imgPreview.src = '';
        imageDescription.value = '';
    });
}

// Initialize the preview and form submission functions
previewImage();
handleFormSubmission();
