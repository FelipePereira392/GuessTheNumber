const input = document.querySelector('#number'), tips = document.querySelector('#tips'), Alert = document.querySelector('#alert')
let randomNumber;

const NewRandomNumber = () =>{
    randomNumber = Math.floor(Math.random() * 100) + 1
}
NewRandomNumber()
document.querySelector('#try').addEventListener('click', () => {
    let value = Number(input.value)
    input.value = 0
    if (value>100 || value<0){
        Alert.innerHTML = 'Put a valid number (0-100)'
    }else{
        if (value > randomNumber){
            Alert.innerHTML = 'Less'
        } else if (value < randomNumber){
            Alert.innerHTML = 'More'
        } else {
            Alert.innerHTML = `Yess, you choose the rigth number (${randomNumber})! Now, have another number for you.`
            NewRandomNumber()
        }
    }
})



