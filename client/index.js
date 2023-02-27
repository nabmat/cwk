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

// const petValues = pet.cleanliness + pet.hungerness + pet.sleepiness;

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
  hungerFeedElem.addEventListener('click', feed);

  pet.cleanliness = 100;
  window.setInterval(adjustClean, 100);
  const cleaningElem = document.querySelector('#cleaning');
  cleaningElem.addEventListener('click', playingClean);


  pet.happiness = 100;
  // window.setInterval(updateHappyMeter(), 100);
  // const happyIncElem = document.querySelector('#happiness');
  // happyIncElem.addEventListener('click', playHappy);
}

// Sleep bar
function playing() {
  pet.sleepiness = 100;
  pet.happiness = 100;
}

function adjustSleep() {
  pet.sleepiness = pet.sleepiness - 0.1;
  pet.happiness = pet.happiness - 0.1;
  if (pet.sleepiness < 0) {
    pet.sleepiness = 0;
  }
  if (pet.happiness < 0) {
    pet.happiness = 0;
  }
  updateSleepMeter();
  updateHappyMeter();
}
function updateSleepMeter() {
  const sleepElem = document.querySelector('#sleep');
  sleepElem.value = pet.sleepiness;
}

// Hunger bar
function feed() {
  pet.hungerness = 100;
  pet.happiness = 100;
}

function playingClean() {
  pet.cleanliness = 100;
  pet.happiness = 100;
}

function adjustHunger() {
  pet.hungerness = pet.hungerness - 0.25;
  pet.happiness = pet.happiness - 0.1;
  if (pet.hungerness < 0) {
    pet.hungerness = 0;
  }
  if (pet.happiness < 0) {
    pet.happiness = 0;
  }
  updateHungerMeter();
  updateHappyMeter();
}

function updateHungerMeter() {
  const hungerElem = document.querySelector('#hunger');
  hungerElem.value = pet.hungerness;
}


function adjustClean() {
  pet.cleanliness = pet.cleanliness - 0.1;
  pet.happiness = pet.happiness - 0.1;
  if (pet.cleanliness < 0) {
    pet.cleanliness = 0;
  }
  if (pet.happiness < 0) {
    pet.happiness = 0;
  }
  adjustCleanMeters();
  updateHappyMeter();
}

function adjustCleanMeters() {
  const cleanElem = document.querySelector('#clean');
  cleanElem.value = pet.cleanliness;
}


function updateHappyMeter() {
  const happyElem = document.querySelector('#happy');
  happyElem.value = pet.happiness;
}


init();
