"use strict";

window.addEventListener("load", start);

let bottles = [];
let newBottleArray = [];

async function start() {
  console.log("JS kører");
  bottles = await getJsonFile();
  console.log(bottles);
  newBottleArray = bottles;
  console.log(newBottleArray);
  document.querySelector("#start-game-button").addEventListener("click", setTimeOutToAddNewBottle);
  makeRandomBottleSequence();
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
  let newBottle = bottles[randomBottleNumber];
  console.log(newBottle);
  newBottleArray.push(newBottle);
  console.log(bottles);
  if (newBottleArray.length >= 10) {
    showBottles(newBottleArray);
    // moveBottles(newBottle);
  } else {
    makeRandomBottleSequence();
  }
}

// ====== Show bottles =============
function showBottles(bottleList) {
  document.querySelector("#bottle-container").innerHTML = "";
  for (const bottle of bottleList) {
    const bottleHtml = /*html*/ `<img src="${bottle.image}">`;
    document.querySelector("#bottle-container").insertAdjacentHTML("beforeend", bottleHtml);
  }
}

function setTimeOutToAddNewBottle() {
  console.log("start game-button clicked");
  const timeOut = setTimeout(addNewBottle, 2000);
}

function addNewBottle() {
  console.log("pop object from array");
  newBottleArray.pop();
  console.log(newBottleArray);
  showBottles(newBottleArray);
  newBottleArray.unshift(bottles[0]);
  console.log(newBottleArray);
  showBottles(newBottleArray);
}