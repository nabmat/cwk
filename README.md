# Virtual Pet


## Introduction
This is a virtual pet where users can interact with the pet such as naming the pet, feeding, cleaning, putting the pet to sleep along with the happiness of the pet being dictated by the other attributes. LocalStorage has been used to store the pet name and the pets attributes due to the fact that if the user clicks off the webpage they will still have their pet there as it was. LocalStorage has also been used to hide the input text along with the Enter button. The reason for this is that if they do comeback to the webpage after clicking off then they will not be prompted to enter the name again or press enter. This is the reason why this was done on localStorage side instead of on the server just so the state of the pet is saved. The happiness button does not work due to the fact that its based on the other attributes. 


## Features
- Buttons to feed the pet, make the pet sleep, clean the pet
- Happiness is based soley on the other attributes
- Attributes are viewable to the user both visually and numerically. 
- User can name their pet 
- Reset button if user decides to restart playing or if the pet has died 
- If the pet has died user can refresh the page to have a new pet and will have to name it again
- The name and attributes are saved so if a user clicks off the webpage or refreshes the web page whilst the pet is alive the attributes and the name will remain
- The status of thet pet is displayed to the user. If the pet dies then it will tell the user the reason of death. 
- The pet blinks through the use of animations and stops blinking once the pet has died 
- Design has been made specifically for mobile users
- If the user does not type in a name and presses enter the game will not run until the user has typed in a name



## Table of contents

- [Quick start](#quick-start)
- [Introduction](#introduction)
- [Status](#status)
- [What's included](#whats-included)
- [Creators](#creators)
- [Thanks](#thanks)


## Quick start

first to install deps
```bash
npm i
```
then do 
- npm start in terminal
- open the server on a webpage which is 
http://localhost:8080/

## Layout

The webpage has been designed specifically for mobile users and looks like this. 





## What's included

```
client
 ┣ Images
 ┃ ┗ pet svg.svg
 ┣ index.html
 ┣ index.js
 ┗ style.css
 package-lock.json
 package.json
 README.md
 server.mjs
 ```


## Creators

- up211821






## Thanks

Thank you for playing and it is much appreciated that you will go onto this webpage to interact with the pet. There is a huge ton of features which you can enjoy. 
