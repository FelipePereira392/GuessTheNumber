//Variables

const input = document.querySelector('#number'), tips = document.querySelector('#tips'), Alert = document.querySelector('#alert'), Reset = document.querySelector('#restart'), Attempt = document.querySelector('#attempts')
let randomNumber;
let attempts = 0

//Function NewRandomNumber

const NewRandomNumber = () =>{
    randomNumber = Math.floor(Math.random() * 500) + 1
}
NewRandomNumber()

//Principal

document.querySelector('#try').addEventListener('click', () => {
    let value = Number(input.value)
    input.value = ''
    if (value>500 || value<0){
        Alert.innerHTML = 'Put a valid number (0-500)'
    }else{
        Attempt.innerHTML = `Attempts: ${attempts += 1}`
        if (value > randomNumber){
            Alert.innerHTML = `Try a smaller number. <br> (${value} > Secret Number)`
        } else if (value < randomNumber){
            Alert.innerHTML = `Try a bigger number. <br> (${value} < Secret Number)`
        } else{
            Alert.style.color = 'green'
            Attempt.style.color = 'green'
            Alert.innerHTML = `🥳 You got the correct number ${randomNumber}, reset if you want to play again! 🥳`
            Reset.style.display = 'block'
        }
    }
})

//Reset Button

Reset.addEventListener('click', ()=>{
    Reset.style.display = 'none'
    attempts = 0
    Alert.style.color = 'black'
    Attempt.style.color = 'black'
    Attempt.innerHTML = `Attempts: ${attempts}`
    Alert.innerHTML = `Choose a number to start!`
    NewRandomNumber()
})



