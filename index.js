import {termData} from "./data.js"
console.log(termData)

const card = document.getElementById('card')
let clicked = false

function getRandomNumber(){
    return Math.floor((Math.random() * termData.length))}

let randomNumber = getRandomNumber()

console.log(termData.length)


console.log(randomNumber)

card.innerHTML = '<h2 class="hand front">click me</h2>'

card.addEventListener("click", ()=> {clicked = !clicked
    if (clicked) {
        card.innerHTML = `<h2 class="hand front">${termData[randomNumber].term}</h2>`
    } else {card.innerHTML = `<h2 class="hand back">${termData[randomNumber].definition}</h2>`
    randomNumber = getRandomNumber()}
    console.log(clicked)})

