// Other JavaScript code here

const openButton = document.getElementById('openCalculator');
const modal = document.getElementById('calculatorModal');
const closeModal = document.getElementById('closeModal');

openButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Other JavaScript code here
