'use strict';
let start = false;


/** Displays the name entered and saves it in the local storage.
 * Also displays it in HTML in this case.
 * Displays an error message if name has not been entered.
 */
function nameHandler() {
  const nameInputElem = document.querySelector('#userText');
  const newName = nameInputElem.value;
  const userName = document.querySelector('#userName');
  if (nameInputElem.value.length === 0) {
    alert('this id not a name');
    // display error message
  } else {
    start = true;
    pet = newPet();
    pet.name = newName;
    userName.textContent = newName + '\'s' + ' ' + 'stats';
    localStorage.setItem('myPet', JSON.stringify(pet));
    window.setInterval(savePet, 1000);
    hideElem();
  }
  if (pet.happiness === null) {
    originalValues();
  }
  updateName(newName);
}
/** Hides input box and enter element once user types and enters in name */
function hideElem() {
  document.querySelector('#setName').style.visibility = 'hidden';
  document.querySelector('#userText').style.visibility = 'hidden';
}
/** Creates a new pet. All attributes are set to 100. */
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
let score = 0;

function updateScore() {
  score++;
  const scoreValue = document.querySelector('#scoreValue');
  scoreValue.textContent = score + ' ';
  // Just need to work on localstorage
}

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
  const refresh = document.querySelector('#resetPet');
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
  window.setInterval(decreaseSleep, 100);
  const sleepingElem = document.querySelector('#sleeping');
  sleepingElem.addEventListener('click', () => {
    playing();
    updateScore();
  });

  window.setInterval(decreaseHunger, 100);
  const hungerFeedElem = document.querySelector('#hungerfeed');
  hungerFeedElem.addEventListener('click', () => {
    feed();
    updateScore();
  });

  window.setInterval(decreaseClean, 100);
  const cleaningElem = document.querySelector('#cleaning');
  cleaningElem.addEventListener('click', () => {
    playingClean();
    updateScore();
  });

  const removeNameElem = document.querySelector('#resetPet');
  removeNameElem.addEventListener('click', removeName, updateScore);
}
// Sleep bar
function playing() {
  pet.sleepiness = 100;
  pet.happiness = 100;
}

function decreaseSleep() {
  pet.sleepiness = pet.sleepiness - 0.25;
  pet.happiness = pet.happiness - 0.11;
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
  const sleepValue = document.querySelector('#sleepValue');
  sleepValue.textContent = '  ' + pet.sleepiness;
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
  pet.happiness = pet.happiness - 0.11;
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
  const hungerValue = document.querySelector('#hungerValue');
  hungerValue.textContent = '  ' + pet.hungerness;
}


function decreaseClean() {
  pet.cleanliness = pet.cleanliness - 0.25;
  pet.happiness = pet.happiness - 0.11;
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
  const cleanValue = document.querySelector('#cleanValue');
  cleanValue.textContent = '  ' + pet.cleanliness;
}


function updateHappyMeter() {
  const happyElem = document.querySelector('#happy');
  happyElem.value = pet.happiness;
  const happinessValue = document.querySelector('#happinessValue');
  happinessValue.textContent = '  ' + pet.happiness;
}

function hideEyes() {
  const petBlink1 = document.querySelector('#eye1');
  const petBlink2 = document.querySelector('#eye2');
  const petBlink3 = document.querySelector('#eye1-fill');
  const petBlink4 = document.querySelector('#eye2-fill');
  petBlink1.style.display = 'none';
  petBlink2.style.display = 'none';
  petBlink3.style.display = 'none';
  petBlink4.style.display = 'none';
}

function hideButtons() {
  document.querySelector('#hungerfeed').disabled = true;
  document.querySelector('#sleeping').disabled = true;
  document.querySelector('#cleaning').disabled = true;
  document.querySelector('#happiness').disabled = true;
}

function deathBoth() {
  if (pet.hungerness === 0 && pet.sleepiness === 0) {
    localStorage.clear();
    hideEyes();
    const petStatusBoth = document.querySelector('#petStatus');
    petStatusBoth.textContent = 'Your pet has died due to hunger and lack of sleep, please refresh the page to restart';
  } else if (pet.hungerness === 0) {
    localStorage.clear();
    hideEyes();
    const petStatusHunger = document.querySelector('#petStatus');
    hideButtons();
    pet.happiness = 0;
    petStatusHunger.textContent = 'Your pet has died due to starvation, please refresh the page to restart';
  } else if (pet.sleepiness === 0) {
    localStorage.clear();
    hideEyes();
    hideButtons();
    pet.happiness = 0;
    const petStatusSleep = document.querySelector('#petStatus');
    petStatusSleep.textContent = 'Your pet has died due to lack of sleep, please refresh the page to restart';
    clearInterval(savePet);
  }
}

init();
