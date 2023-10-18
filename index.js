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



// Function to populate the DOM with "thing 1" items
function populateCardList() {
    const cardList = document.getElementById("cardList");
    cardList.innerHTML = ""; // Clear existing list

    termData.forEach(item => {
        const cardsItem = document.createElement("li");
        cardsItem.textContent = item.term;

        // Add a click event listener to toggle between "thing 1" and "thing 2"
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

// Populate the initial "thing 1" list
populateCardList();