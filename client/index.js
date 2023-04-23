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
/** Hides input box and enter button once user types and enters in name */
function hideElem() {
  document.querySelector('#setName').style.visibility = 'hidden';
  document.querySelector('#userText').style.visibility = 'hidden';
  saveuserInput();
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


/** Variables that called for different functions  */
let timer = 0;
let petAlive;
let checkInput;
let score = 0;


/** Adds 1 to the scoreboard each time the user interacts with the pet through the buttons */
function updateScore() {
  score++;
  const scoreValue = document.querySelector('#scoreValue');
  scoreValue.textContent = score + ' ';
  saveScoreValue();
  // Just need to work on localstorage
}
/** Displays the users petname back to them replacing the header 1 tag */
function updateName(newName) {
  const nameElem = document.querySelector('#petName');
  nameElem.textContent = newName;
}

/** If the pet does not have any values set to it then this function will start the pet off with full attributes */
function originalValues() {
  pet.happiness = 100;
  pet.sleepiness = 100;
  pet.cleanliness = 100;
  pet.hungerness = 100;
}

/** If the pets hunger and or the sleep level is 0 then stop the timer  */
function adjustTimer() {
  timer++;
  if (pet.hungerness === 0 || pet.sleepiness === 0) {
    clearInterval(petAlive);
    alert('Your pet was alive for ' + timer + ' seconds');
  }
}

/** LocalStorage function which sets the input elements to remain hidden despite the uesr refreshing */
function saveuserInput() {
  localStorage.setItem('hideInput', true);
}
function saveScoreValue() {
  localStorage.setItem('savingScore', score);
}

/** This function is called when the user hits reset pet it will get rid of the name and call the refreshPage function */
function removeName() {
  updateName('');
  refreshPage();
}

/** This function is called when the user hits reset pet, the game will restart by getting rid of all previous meter values */
function refreshPage() {
  window.location.reload();
  localStorage.clear();
}

/** Allows the user to reset the pet causing them to restart
 * Saves the pet's name, attributes to localStorage every 1 second
 * if the user clicks enter and there is a name in the input field then it runs the nameHandler function which displays the name to the user
 */
function init() {
  const refresh = document.querySelector('#resetPet');
  refresh.addEventListener('click', refreshPage);
  const hideInput = localStorage.getItem('hideInput');
  if (hideInput) {
    hideElem();
  }
  const scoreValues = (localStorage.getItem('savingScore'));
  if (scoreValues) {
    score = JSON.parse(scoreValues);
    updateScore();
  }
  if (JSON.parse(localStorage.getItem('myPet'))) {
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

/** Stores the pet object to localstorage by converting it into a JSON string
 * Gets the function of newpet from localstorage by parsing the JSON string back into a javascript object
*/
function savePet() {
  localStorage.setItem('myPet', JSON.stringify(pet));
}
let pet = JSON.parse(localStorage.getItem('myPet')) ?? newPet();

/** Checks if the boolean is true then stop checkign for user input as its already entered
 * Start the pet and set a timer which will count down till the pets death
  */
function checkStart() {
  if (start === true) {
    clearInterval(checkInput);
    startPet();
    petAlive = setInterval(adjustTimer, 1000);
  }
}
/** If the pet does not have any values then the function gives it values starting from 100
 * Clls several decrease functions which reduce the pets attributes over time
 * When the user clicks on a button such as feed, sleep or clean then it will add values to the meter and also add 1 each time to the scoreboard
 * If the user decides to click reset it will remove the name of the pet along with all of its values and clear it from localStorage
*/
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
  removeNameElem.addEventListener('click', removeName);
}

/** Each time the sleep button is clicked the value of the sleep meter will be set to 100
 * The happiness meter will also be set to 100 if the sleep button is clicked
*/
function playing() {
  pet.sleepiness = 100;
  pet.happiness = 100;
}
/** Decreases the sleep meter over time along with the happiness meter */
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

/** Each time the hunger button is clicked the value of the hunger meter will be set to 100
 * The happiness meter will also be set to 100 if the hunger button is clicked
*/function feed() {
  pet.hungerness = 100;
  pet.happiness = 100;
}
/** Each time the clean button is clicked the value of the clean meter will be set to 100
 * The happiness meter will also be set to 100 if the clean button is clicked
*/
function playingClean() {
  pet.cleanliness = 100;
  pet.happiness = 100;
}
/** Decreases the hunger meter over time along with the happiness meter */
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
/** Updates the value of the hunger meter to what the pets hunger value currently is
 * The numerical value of the hunger meter is represented within the scoreboard
*/
function updateHungerMeter() {
  const hungerElem = document.querySelector('#hunger');
  hungerElem.value = pet.hungerness;
  const hungerValue = document.querySelector('#hungerValue');
  hungerValue.textContent = '  ' + pet.hungerness;
}

/** Decreases the cleanliness meter over time along with the happiness meter */
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
/** Updates the value of the clean meter to what the pets clean value currently is
 * The numerical value of the clean meter is represented within the scoreboard
*/
function adjustCleanMeters() {
  const cleanElem = document.querySelector('#clean');
  cleanElem.value = pet.cleanliness;
  const cleanValue = document.querySelector('#cleanValue');
  cleanValue.textContent = '  ' + pet.cleanliness;
}

/** Updates the value of the happiness meter to what the pets happiness value currently is which is based upon the other attributes of the pet
 * The numerical value of the happiness meter is represented within the scoreboard
*/
function updateHappyMeter() {
  const happyElem = document.querySelector('#happy');
  happyElem.value = pet.happiness;
  const happinessValue = document.querySelector('#happinessValue');
  happinessValue.textContent = '  ' + pet.happiness;
}


/** Hides all of the element of the eyes by selecting the html element and hiding it through the use of none */
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
/** Disables the use of the buttons */
function hideButtons() {
  document.querySelector('#hungerfeed').disabled = true;
  document.querySelector('#sleeping').disabled = true;
  document.querySelector('#cleaning').disabled = true;
  document.querySelector('#happiness').disabled = true;
}
/** If the value of the pets hunger and or the sleep value is 0 then it will do the following
 * Clear localStorage
 * Hide the eyes by stopping it from blinking
 * Shows different status messsages to inform the user of the pets cause of death
 * Stops the timer from when the pet started
 */
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
