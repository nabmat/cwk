'use strict'
const pet = { hungerness: 0 };

function clickFunction() {
    let userText = document.querySelector('#userText');
    let entering = document.querySelector('#entering');
    entering.innerHTML = userText.value;
}

function play() {
    pet.hungerness = 100;
}
function death(){
    document.createElement("Your pet has died rip....")



}

function adjustStuff() {
    pet.hungerness = pet.hungerness - 1;
    if (pet.hungerness < 0) {
        pet.hungerness = 0;
    }
    // pet.hungerness = Math.max(0, --pet.hungerness);
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




// function hungerbarFeed() {
//     const hunger = document.getElementById('hungerfeed');
//     hunger.addEventListener('click', clickFeed,);
// }
// function clickFeed(){
//     const low = document.getElementById('hunger');
//     low.style.width='200px';
// }


window.addEventListener('load', init);