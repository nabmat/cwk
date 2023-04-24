/** Hides all of the element of the eyes by selecting the html element and hiding it through the use of none */
export function hideEyes() {
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
export function hideButtons() {
  document.querySelector('#hungerfeed').disabled = true;
  document.querySelector('#sleeping').disabled = true;
  document.querySelector('#cleaning').disabled = true;
  document.querySelector('#happiness').disabled = true;
}

/** Hides input box and enter button once user types and enters in name */
export function hideUserInput() {
  document.querySelector('#setName').style.visibility = 'hidden';
  document.querySelector('#userText').style.visibility = 'hidden';
  localStorage.setItem('hideInput', true);
}
