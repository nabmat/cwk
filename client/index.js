'use strict';

function nameHandler() {
  const userText = document.querySelector('#userText');
  const nameElem = document.querySelector('#petName');
  nameElem.textContent = userText.value;
}


const pet = {
  hungerness: 0,
  sleepiness: 0,
  cleanliness: 0,
  happiness: 0,
};


function play() {
  pet.hungerness = 100;
}


function init() {
  const nameButton = document.querySelector('#setName');
  nameButton.addEventListener('click', nameHandler);

  pet.sleepiness = 100;
  window.setInterval(adjustSleep, 100);
  const sleepingElem = document.querySelector('#sleeping');
  sleepingElem.addEventListener('click', playing);

  pet.hungerness = 100;
  window.setInterval(adjustHunger, 100);
  const hungerFeedElem = document.querySelector('#hungerfeed');
  hungerFeedElem.addEventListener('click', play);

  pet.cleanliness = 100;
  window.setInterval(adjustClean, 100);
  const cleaningElem = document.querySelector('#cleaning');
  cleaningElem.addEventListener('click', playingClean);

  pet.happiness = 100;
  window.setInterval(adjustHappy, 100);
  const happyIncElem = document.querySelector('#happiness');
  happyIncElem.addEventListener('click', playHappy);
}


function playing() {
  pet.sleepiness = 100;
}

function adjustSleep() {
  pet.sleepiness = pet.sleepiness - 0.1;
  if (pet.sleepiness < 0) {
    pet.sleepiness = 0;
  }
  updateSleepMeter();
}

function adjustHunger() {
  pet.hungerness = pet.hungerness - 0.25;
  if (pet.hungerness < 0) {
    pet.hungerness = 0;
  }
  updateHungerMeter();
}

function updateHungerMeter() {
  const hungerElem = document.querySelector('#hunger');
  hungerElem.value = pet.hungerness;
}

function updateSleepMeter() {
  const sleepElem = document.querySelector('#sleep');
  sleepElem.value = pet.sleepiness;
}


init();


// Clean


function playingClean() {
  pet.cleanliness = 100;
}

function adjustClean() {
  pet.cleanliness = pet.cleanliness - 0.1;
  if (pet.cleanliness < 0) {
    pet.cleanliness = 0;
  }
  adjustCleanMeters();
}

function adjustCleanMeters() {
  const cleanElem = document.querySelector('#clean');
  cleanElem.value = pet.cleanliness;
}


function playHappy() {
  pet.happiness = 100;
}
function adjustHappy() {
  pet.happiness = pet.happiness - 0.25;
  if (pet.happiness < 0) {
    pet.happiness = 0;
  }
  updateHappyMeter();
}
function updateHappyMeter() {
  const happyElem = document.querySelector('#happy');
  happyElem.value = pet.happiness;
}
