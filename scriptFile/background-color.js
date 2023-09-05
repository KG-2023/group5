
//    // Function to change the background color of elements by class name
//    function changeElementBackgroundColorByClass(className) {
//     // Array of possible background colors
//     const colors = ["#FF5733", "#33FF57", "#5733FF", "#FF33E6", "#33E6FF"];

//     // Get all elements with the specified class name
//     const elements = document.getElementsByClassName(className);

//     // Loop through the elements and set their background color
//     for (let i = 0; i < elements.length; i++) {
//         const randomColor = colors[Math.floor(Math.random() * colors.length)];
//         elements[i].style.backgroundColor = randomColor;
//     }
// }

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the background color of elements by class name
function changeElementBackgroundColorByClass(className) {
    // Generate a random color
    const randomColor = getRandomColor();

    // Get all elements with the specified class name
    const elements = document.getElementsByClassName(className);

    // Loop through the elements and set their background color to the random color
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = randomColor;
    }
}


