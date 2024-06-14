/* eslint-disable */

//Logica para crear nueva carta
function getRandomIndex(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getCard() {
  const card = {
    number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
    suit: [
      "bi bi-suit-diamond-fill text-danger",
      "bi bi-suit-heart-fill text-danger",
      "bi bi-suit-club-fill",
      "bi bi-suit-spade-fill"
    ]
  };

  let newcard = {
    number: getRandomIndex(card.number),
    suit: getRandomIndex(card.suit)
  };

  return newcard;
}

//Logica DOM
let root = document.querySelector("#root");
root.className = "container-fluid gap-3";

//Opciones

let optionsContainer = document.createElement("div");
optionsContainer.className = "options d-flex justify-content-center gap-3";

let buttonNewCard = document.createElement("button");
let height = document.createElement("input");
let width = document.createElement("input");

let heightDiv = document.createElement("div");
let widthDiv = document.createElement("div");

heightDiv.appendChild(height);
widthDiv.appendChild(width);
heightDiv.className = "inputs";
widthDiv.className = "inputs";
buttonNewCard.textContent = "Create new card";
width.value = "200px";
height.value = "300px";

optionsContainer.appendChild(heightDiv);
optionsContainer.appendChild(widthDiv);
optionsContainer.appendChild(buttonNewCard);

root.appendChild(optionsContainer);

//Listeners
width.addEventListener("input", changeAllSizes);
height.addEventListener("input", changeAllSizes);
buttonNewCard.addEventListener("click", addCardDom);
setInterval(addCardDom, 10000);

//Cartas
let cardContainer = document.createElement("div");
cardContainer.className = "cardContainer d-flex row justify-content-center";
root.appendChild(cardContainer);
function changeAllSizes() {
  for (let index = 0; index < cardContainer.children.length; index++) {
    cardContainer.children[index].style.width = width.value;
    cardContainer.children[index].style.height = height.value;
  }
}

function addCardDom() {
  let card = getCard();
  let cardDiv = document.createElement("div");
  cardDiv.className = "cardDiv d-flex p-3  m-3 justify-content-between";

  let cardNumber = document.createElement("p");
  let cardSuitUp = document.createElement("i");
  let cardSuitDown = document.createElement("i");

  cardSuitUp.className = `align-self-start text-start m-0 ${card.suit}`;
  cardNumber.className = "align-self-center text-center m-0";
  cardNumber.textContent = card.number;
  cardSuitDown.className = `align-self-end text-end m-0  ${card.suit}`;

  cardDiv.appendChild(cardSuitUp);
  cardDiv.appendChild(cardNumber);
  cardDiv.appendChild(cardSuitDown);
  cardDiv.style.width = width.value;
  cardDiv.style.height = height.value;

  cardContainer.appendChild(cardDiv);
}

let carta = getCard();
console.log(carta);
addCardDom(carta);
