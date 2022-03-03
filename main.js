console.log("MtG Card Graber is working");

const mtgURL = "https://api.scryfall.com/cards/random";

// let randomURL = Math.floor(Math.random() * 10);
// const mtgURL = "https://api.scryfall.com/cards/vow/" + randomURL;

async function fetchCard() {
  const response = await fetch(mtgURL);
  const data = await response.json();

  const mainURL = data.uri;
  console.log("main URL " + mainURL);

  const uriCard = data.image_uris.normal; // CARD SIZE

  const cardTitle = data.name;
  const newName = document.querySelector("#card-name");
  newName.innerText = cardTitle;

  const artist = data.artist;
  const artistName = document.querySelector("#artist");
  artistName.innerText = `Artist - ${artist}`;
  if (artist === null) {
    cardValue.innerText = "Artist Unavailable";
  }

  const set = data.set_name;
  const setName = document.querySelector("#setName");
  setName.innerText = `Set - ${set}`;
  if (set === null) {
    cardValue.innerText = "Set Name Unavailable";
  }

  const released = data.released_at;
  const releaseDate = document.querySelector("#released");
  releaseDate.innerText = `Released - ${released}`;
  if (released === null) {
    cardValue.innerText = "Release Date Unavailable";
  }

  const value = data.prices.usd;
  const cardValue = document.querySelector("#value");
  cardValue.innerText = `Value - $${value}`;
  if (value === null) {
    cardValue.innerText = "Value Unavailable";
  }

  const cardColour = data.color_identity[0];
  console.log("Card Colour = " + cardColour);
  const nameBackground = document.querySelector("h2");

  if (cardColour === "W") {
    nameBackground.style.backgroundColor = "#fff";
    document.querySelector("#wubrg").innerText = "Colour - White";
  } else if (cardColour === "U") {
    nameBackground.style.backgroundColor = "#68b2f7";
    document.querySelector("#wubrg").innerText = "Colour - Blue";
  } else if (cardColour === "B") {
    nameBackground.style.backgroundColor = "#000";
    document.querySelector("#wubrg").innerText = "Colour - Black";
  } else if (cardColour === "R") {
    nameBackground.style.backgroundColor = "#9c1919";
    document.querySelector("#wubrg").innerText = "Colour - Red";
  } else if (cardColour === "G") {
    nameBackground.style.backgroundColor = "#319949";
    document.querySelector("#wubrg").innerText = "Colour - Green";
  } else if (cardColour === undefined) {
    nameBackground.style.backgroundColor = "#f0f8ff";
    document.querySelector("#wubrg").innerText = "Colourless";
  } else {
  }

  placeCard(uriCard);
}
const cardImg = document.querySelector("#card-here");
function placeCard(uri) {
  cardImg.src = uri;
}

fetchCard();

const buttonCard = document.querySelector("#new-card-button");
buttonCard.addEventListener("click", fetchCard, "window.reload");

function buttonToggle() {
  let bigLayout = document.querySelector("#switch");
  bigLayout.classList.toggle("myClass");
  let bigCard = document.querySelector("#card-here");
  bigCard.classList.toggle("big-style");
}

const biggerCard = document.querySelector("#toggle");
biggerCard.addEventListener("click", buttonToggle, "window.reload");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/*

Set the random url to a variable
The variable then produces a specific url that changes each time the page is loaded
Set that URL to a variable to use for all functions

If cards are flip cards or double faced
Create a button that flips them over

*/
