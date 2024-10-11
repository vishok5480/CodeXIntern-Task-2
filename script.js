const button = document.querySelector(".generate")
const pass = document.querySelector(".Password") 

const generatePassword = (iteration) => {
    const chars = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*?-="
    let password = ""

    for (let i = 1; i <= iteration; i++) {
        const index = Math.floor(Math.random() * chars.length)
        password += chars[index]
    }

    return password
}

button.addEventListener("click", (event) => {
    event.preventDefault()

    const length = Number(document.querySelector(".length").value) // Use the correct class selector

    if(length<=0){
        alert("Enter a number greater than zero!!!!")

    }

    pass.innerText = generatePassword(length)

})
