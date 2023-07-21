"use strict"

window.addEventListener("load", start);

let bottles = [];

async function start() {
    console.log("JS kører");
    bottles = await getJsonFile();
    console.log(bottles);
    showBottles(bottles);
}

async function getJsonFile() {
    const response = await fetch("bottle.json");
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
}

function showBottles(bottleList) {
  for (const bottle of bottleList) {
    const bottleHtml = /*html*/ `<img src="${bottle.image}">`;
    document.querySelector("#bottle-container").insertAdjacentHTML("beforeend", bottleHtml);
  }
}