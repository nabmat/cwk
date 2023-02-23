'use strict';

function nameHandler() {
  const userText = document.querySelector('#userText');
  const nameElem = document.querySelector('#petName');
  nameElem.textContent = userText.value;
}

// Hunger bar

const pet = {
  hungerness: 0,
  sleepiness: 0,
  cleanliness: 0,
};


function play() {
  pet.hungerness = 100;
}


// function addMeters() {
//   const stat = document.querySelector('#stat');
//   const meterNames = ['hunger', 'sleep', 'cleanliness', 'sleep'];
//   for (const meterName of meterNames) {
//     const meter = document.createElement('meter');
//     meter.min = 0;
//     meter.max = 100;
//     meter.value = 0;
//     meter.low = 20;
//     meter.high = 45;
//     meter.optimum = 50;


//     meter.id = meterName;
//     stat.append(meter);
//   }
// }

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
