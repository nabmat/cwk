'use strict';
let start = false;


/** Displays the name entered and saves it in the local storage.
 * Also displays it in HTML in this case.
 * Displays an error message if name has not been entered.
 */
function nameHandler() {
  const nameInputElem = document.querySelector('#userText');
  const newName = nameInputElem.value;
  if (nameInputElem.value.length === 0) {
    alert('this id not a name');
    // display error message
  } else {
    start = true;
    pet = newPet();
    pet.name = newName;
    localStorage.setItem('myPet', JSON.stringify(pet));
    window.setInterval(savePet, 1000);
    hideElem();
  }
  if (pet.happiness === null) {
    originalValues();
  }
  updateName(newName);
}

function hideElem() {
  document.querySelector('#setName').style.visibility = 'hidden';
  document.querySelector('#userText').style.visibility = 'hidden';
}
/** Creates a new pet. All attributes are set to 0. */
function newPet() {
  return {
    hungerness: 100,
    sleepiness: 100,
    cleanliness: 100,
    happiness: 100,
  };
}

let timer = 0; // should be param of pet
let petAlive;
let checkInput;


function updateName(newName) {
  const nameElem = document.querySelector('#petName');
  nameElem.textContent = newName;
}

function originalValues() {
  pet.happiness = 100;
  pet.sleepiness = 100;
  pet.cleanliness = 100;
  pet.hungerness = 100;
}

function adjustTimer() {
  timer++;
  if (pet.hungerness === 0 || pet.sleepiness === 0) {
    clearInterval(petAlive);
    alert('Your pet was alive for ' + timer + ' seconds');
  }
}


function removeName() {
  updateName('');
  refreshPage();
}

function refreshPage() {
  window.location.reload();
  localStorage.clear();
}


function init() {
  const refresh = document.querySelector('#clearName');
  refresh.addEventListener('click', refreshPage);
  // get the name, display it, hide the name inputs

  if (JSON.parse(localStorage.getItem('myPet'))) { // would be replaced with pet beint stored
    const nameElem1 = document.querySelector('#petName');
    pet = JSON.parse(localStorage.getItem('myPet'));
    nameElem1.textContent = pet.name;
    startPet();

    window.setInterval(savePet, 1000);
  } else {
    checkInput = setInterval(checkStart, 1000);
    const nameButton = document.querySelector('#setName');
    nameButton.addEventListener('click', nameHandler);
  }

  // this should be every 10 seconds
}


function savePet() {
  localStorage.setItem('myPet', JSON.stringify(pet));
}
let pet = JSON.parse(localStorage.getItem('myPet')) ?? newPet();


function checkStart() {
  if (start === true) {
    clearInterval(checkInput);
    startPet();
    petAlive = setInterval(adjustTimer, 1000);
  }
}

function startPet() {
  if (pet.happiness === null) {
    originalValues();
  }
  // pet.sleepiness = 100;
  window.setInterval(decreaseSleep, 100);
  const sleepingElem = document.querySelector('#sleeping');
  sleepingElem.addEventListener('click', playing);

  // pet.hungerness = 100;
  window.setInterval(decreaseHunger, 100);
  const hungerFeedElem = document.querySelector('#hungerfeed');
  hungerFeedElem.addEventListener('click', feed);

  // pet.cleanliness = 100;
  window.setInterval(decreaseClean, 100);
  const cleaningElem = document.querySelector('#cleaning');
  cleaningElem.addEventListener('click', playingClean);

  // pet.happiness = 100;
  const removeNameElem = document.querySelector('#clearName');
  removeNameElem.addEventListener('click', removeName);
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
    localStorage.clear();
    const petStatusBoth = document.querySelector('#petStatus');
    petStatusBoth.textContent = 'Your pet has died due to hunger and lack of sleep, please refresh the page to continue playing';
  } else if (pet.hungerness === 0) {
    localStorage.clear();
    document.querySelector('#hungerfeed').disabled = true;
    document.querySelector('#sleeping').disabled = true;
    document.querySelector('#cleaning').disabled = true;
    document.querySelector('#happiness').disabled = true;
    pet.happiness = 0;
    const petStatusHunger = document.querySelector('#petStatus');
    petStatusHunger.textContent = 'Your pet has died due to starvation, please refresh the page to continue playing';
  } else if (pet.sleepiness === 0) {
    localStorage.clear();
    document.querySelector('#sleeping').disabled = true;
    document.querySelector('#hungerfeed').disabled = true;
    document.querySelector('#cleaning').disabled = true;
    document.querySelector('#happiness').disabled = true;
    pet.happiness = 0;
    const petStatusSleep = document.querySelector('#petStatus');
    petStatusSleep.textContent = 'Your pet has died due to lack of sleep, please refresh the page to continue playing';
    clearInterval(savePet);
  }
}

init();
