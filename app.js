"use strict";

window.addEventListener("load", start);

let bottles = [];
let newBottleArray = [];
let newBottle;

async function start() {
  console.log("JS kører");
  bottles = await getJsonFile();
  console.log(bottles);
  newBottleArray === bottles;
  console.log(newBottleArray);
  makeRandomBottleSequence();
  document.querySelector("#start-game-button").addEventListener("click", setTimeOutToAddNewBottle);
  document.querySelector("#bottle-container, div:last-child").addEventListener("click", bottleClicked);
}

async function getJsonFile() {
  const response = await fetch("bottle.json");
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}

// ====== Make random bottle number =============
function makeRandomBottleSequence() {
  let randomBottleNumber = Math.random() * 2;
  console.log(randomBottleNumber);
  randomBottleNumber = Math.floor(randomBottleNumber);
  console.log(randomBottleNumber);
  newBottle = bottles[randomBottleNumber];
  console.log(newBottle);
  newBottleArray.push(newBottle);
  console.log(bottles);
  if (newBottleArray.length >= 10) {
    showBottles(newBottleArray);
  } else {
    makeRandomBottleSequence();
  }
}

// ====== Show bottles =============
function showBottles(bottleList) {
  document.querySelector("#bottle-container").innerHTML = "";
  for (const bottle of bottleList) {
    const bottleHtml = /*html*/ `<img class = "bottles" src="${bottle.image}">`;
    document.querySelector("#bottle-container").insertAdjacentHTML("beforeend", bottleHtml);
  }
  const bottles = document.querySelectorAll("bottles");
  for (const bottle of bottles) {
    bottles.addEventListener("click", bottleClicked);
  }
}

function setTimeOutToAddNewBottle() {
  console.log("start game-button clicked");
  const timeOut = setTimeout(addNewBottle, 2000);
}

function addNewBottle() {
  newBottleArray.shift();
  console.log("shift object from array");
  console.log(newBottleArray);
  showBottles(newBottleArray);
  newBottle = generateNewBottle();
  newBottleArray.push(newBottle);
  console.log("push new object to array");
  console.log(newBottle);
  console.log(newBottleArray);
  showBottles(newBottleArray);
  const timeOut = setTimeout(addNewBottle, 1500);
}

// ====== Bottle clciked function =============
function bottleClicked() {
  console.log("bottle clicked");
  const bottleClicked = this;
  console.log(bottleClicked);
  document.querySelector("#bottle-container, div").addEventListener("click", zoomOutFunction);
}


// ====== Zoom-out class added to specific bottle =============
function zoomOutFunction() {
  console.log("zoom-out-function activated");
  const bottle = event.target;
  console.log(bottle);
  bottle.classList.add("zoom-out");
}

// ====== Generate new random bottle to array ============= 
function generateNewBottle() {
  let randomBottleNumber = Math.random() * 2;
  console.log(randomBottleNumber);
  randomBottleNumber = Math.floor(randomBottleNumber);
  console.log(randomBottleNumber);
  newBottle = bottles[randomBottleNumber];
  console.log(newBottle);
  return newBottle;
}