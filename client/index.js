'use strict';
let start = false;


function nameHandler() {
  start = true;
  const nameInputElem = document.querySelector('#userText');
  const nameElem = document.querySelector('#petName');
  nameElem.textContent = nameInputElem.value;
}


const pet = {
  hungerness: 0,
  sleepiness: 0,
  cleanliness: 0,
  happiness: 0,
};

function originalValues() {
  pet.happiness = 100;
  pet.sleepiness = 100;
  pet.cleanliness = 100;
  pet.hungerness = 100;
}


let timer = 0;
let petAlive;

function adjustTimer() {
  timer++;
  if (pet.hungerness === 0 || pet.sleepiness === 0) {
    clearInterval(petAlive);
    alert('Your pet was alive for ' + timer + ' seconds');
  }
}

function init() {
  // get the name, display it, hide the name inputs
  const checkInput = setInterval(checkStart, 1000);
  const nameButton = document.querySelector('#setName');
  nameButton.addEventListener('click', nameHandler);


  function checkStart() {
    if (start === true) {
      clearInterval(checkInput);
      startPet();
      petAlive = setInterval(adjustTimer, 1000);
    }
  }
}

function startPet() {
  originalValues();


  pet.sleepiness = 100;
  window.setInterval(decreaseSleep, 100);
  const sleepingElem = document.querySelector('#sleeping');
  sleepingElem.addEventListener('click', playing);

  pet.hungerness = 100;
  window.setInterval(decreaseHunger, 100);
  const hungerFeedElem = document.querySelector('#hungerfeed');
  hungerFeedElem.addEventListener('click', feed);

  pet.cleanliness = 100;
  window.setInterval(decreaseClean, 100);
  const cleaningElem = document.querySelector('#cleaning');
  cleaningElem.addEventListener('click', playingClean);

  pet.happiness = 100;
}

// Sleep bar
function playing() {
  pet.sleepiness = 100;
  pet.happiness = 100;
}

function decreaseSleep() {
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
  deathBoth();
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

function decreaseHunger() {
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
  deathBoth();
}

function updateHungerMeter() {
  const hungerElem = document.querySelector('#hunger');
  hungerElem.value = pet.hungerness;
}


function decreaseClean() {
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


function deathBoth() {
  if (pet.hungerness === 0 && pet.sleepiness === 0) {
    const petStatusBoth = document.querySelector('#petStatus');
    petStatusBoth.textContent = 'Your pet has died due to hunger and lack of sleep, please refresh the page to continue playing';
  } else if (pet.hungerness === 0) {
    document.querySelector('#hungerfeed').disabled = true;
    document.querySelector('#sleeping').disabled = true;
    document.querySelector('#cleaning').disabled = true;
    document.querySelector('#happiness').disabled = true;
    pet.happiness = 0;
    const petStatusHunger = document.querySelector('#petStatus');
    petStatusHunger.textContent = 'Your pet has died due to starvation, please refresh the page to continue playing';
  } else if (pet.sleepiness === 0) {
    document.querySelector('#sleeping').disabled = true;
    document.querySelector('#hungerfeed').disabled = true;
    document.querySelector('#cleaning').disabled = true;
    document.querySelector('#happiness').disabled = true;
    pet.happiness = 0;
    const petStatusSleep = document.querySelector('#petStatus');
    petStatusSleep.textContent = 'Your pet has died due to lack of sleep, please refresh the page to continue playing';
  }
}

init();
