import {termData, acronyms} from "./data.js"

const defList = document.getElementById("def-list")
const card = document.getElementById('card')
const btn = document.getElementById("btn")
let clicked = false
const list = []
let prevNum
let acronymCounter = 0
let acronymClicked = true

function getAcronymRandomNumber(){
    return Math.floor((Math.random() * acronyms.length))
}

function getRandomNumber(){
    return Math.floor((Math.random() * termData.length))}

let randomNumber = getRandomNumber()

card.innerHTML = '<h2 class="hand front">Click Me!</h2>'

card.addEventListener("click", ()=> {clicked = !clicked
    if (clicked) {
        if (clicked = true){
        }
        card.innerHTML = `<h2 class="hand front">${termData[randomNumber].term}</h2>`
    } else {
        card.innerHTML = `<h2 class="hand back">${termData[randomNumber].definition}</h2>`
    prevNum = randomNumber
    randomNumber = getRandomNumber()}
    })

// btn.addEventListener("click", function(){
//     defList.innerHTML += `<li>${termData[prevNum].term}${termData[prevNum].definition}</li>`
// })



// Function to populate the DOM with "term" items
function populateCardList() {
    const cardList = document.getElementById("cardList");
    cardList.innerHTML = ""; // Clear existing list

    termData.forEach(item => {
        const cardsItem = document.createElement("li");
        cardsItem.textContent = item.term;

        // Add a click event listener to toggle between "term" and "definition"
        cardsItem.addEventListener("click", () => {
            if (item.toggled) {
                item.toggled = false;
                cardsItem.textContent = item.term;
            } else {
                item.toggled = true;
                cardsItem.textContent = item.definition;
            }
        });

        cardList.appendChild(cardsItem);
    });
}

// Populate the initial "term" list
populateCardList();

function acronymCardDisplay(){
    document.getElementById("acronym-card").innerHTML = `<h2>${acronyms[acronymCounter].short}</h2>`
}

acronymCardDisplay()

document.getElementById("prev-btn").addEventListener("click", ()=> {
    acronymClicked = true
    if (acronymCounter >= 0){
        acronymCounter--
    }
    acronymCardDisplay()
})

document.getElementById("next-btn").addEventListener("click", ()=> {
    acronymClicked = true
    if (acronymCounter <= acronyms.length){
        acronymCounter++
    }
    acronymCardDisplay()
})

document.getElementById("acronym-card").addEventListener("click", ()=>{
    acronymClicked = !acronymClicked
    if (acronymClicked === false) {
        document.getElementById("acronym-card").innerHTML = `<h2>${acronyms[acronymCounter].long}</h2>`
    }
    if (acronymClicked) {
        document.getElementById("acronym-card").innerHTML = `<h2>${acronyms[acronymCounter].short}</h2>`
    }
})

document.getElementById("restart").addEventListener("click", ()=>{
    acronymClicked = true
    acronymCounter = 0 
    acronymCardDisplay()

})

document.getElementById("random").addEventListener("click", ()=> {
    acronymClicked = true
    acronymCounter = getAcronymRandomNumber()
    acronymCardDisplay()

})