// document.querySelector('#Search').addEventListener("click", () =>{
//     const userInput = document.querySelector("#user-input")
//     requestAnimationFrame(userInput)
// })

// function request(userInput){
//     let url = ""
//     fetch(url)
//     .then(response => {
//         if(!response.ok) throw Error (response.statusText)
//         return response
//     })
// }

// function returnText(){
//     let input = document.getElementById('userInput').value
//     alert(input)
// }

const container = document.querySelector(".container");
const signUpBtn = document.querySelector(".green-bg button");

signUpBtn.addEventListener('click', ()=>{
    container.classList.toggle('change');
});