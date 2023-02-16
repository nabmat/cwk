'use strict';


const pet = { hungerness: 0 };

function clickFunction() {
  const userText = document.querySelector('#userText');
  const entering = document.querySelector('#entering');
  entering.textContent = userText.value;
}

function play() {
  pet.hungerness = 100;
}

function adjustStuff() {
  pet.hungerness = pet.hungerness - 1;
  if (pet.hungerness < 0) {
    pet.hungerness = 0;
  }
  adjustMeters();
}

function adjustMeters() {
  const hungerElem = document.querySelector('#hunger');
  hungerElem.value = pet.hungerness;
}

function init() {
  pet.hungerness = 100;
  window.setInterval(adjustStuff, 100);
  const hungerFeedElem = document.querySelector('#hungerfeed');
  hungerFeedElem.addEventListener('click', play);
}


window.addEventListener('load', init);
