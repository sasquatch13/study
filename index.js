import {termData} from "./data.js"

const defList = document.getElementById("def-list")
const card = document.getElementById('card')
const btn = document.getElementById("btn")
let clicked = false
const list = []
let prevNum

function getRandomNumber(){
    return Math.floor((Math.random() * termData.length))}

let randomNumber = getRandomNumber()

card.innerHTML = '<h2 class="hand front">Click Me!</h2>'

card.addEventListener("click", ()=> {clicked = !clicked
    if (clicked) {
       btn.disabled = true 
        if (clicked = true){
            btn.disabled = false
        }
        card.innerHTML = `<h2 class="hand front">${termData[randomNumber].term}</h2>`
    } else {
        btn.disabled = false
        card.innerHTML = `<h2 class="hand back">${termData[randomNumber].definition}</h2>`
    prevNum = randomNumber
    randomNumber = getRandomNumber()}
    })

btn.addEventListener("click", function(){
    defList.innerHTML += `<li>${termData[prevNum].term}${termData[prevNum].definition}</li>`
})
