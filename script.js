document.querySelector('#Search').addEventListener("click", () =>{
    const userInput = document.querySelector("#user-input")
    requestAnimationFrame(userInput)
})

function request(userInput){
    let url = ""
    fetch(url)
    .then(response => {
        if(!response.ok) throw Error (response.statusText)
        return response
    })
}