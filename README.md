# Virtual Pet


## Introduction
This is a virtual pet where users can interact with the pet such as naming the pet, feeding, cleaning, putting the pet to sleep along with the happiness of the pet being dictated by the other attributes. This has been created using Javascript, HTML and CSS. LocalStorage has been used to store the pet name and the pets attributes due to the fact that if the user clicks off the webpage they will still have their pet there as it was. LocalStorage has also been used to hide the input text along with the Enter button. The reason for this is that if they do comeback to the webpage after clicking off then they will not be prompted to enter the name again or press enter. This is the reason why this was done on localStorage side instead of on the server just so the state of the pet is saved. The happiness button does not work due to the fact that its based on the other attributes. This webpage has been designed for mobile users only due to the fact that the majority of the internet traffic is mobile users.


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

- [Introduction](#introduction)
- [Features](#features)
- [Quick start](#quick-start)
- [Layout](#layout)
- [Bugs](#bugs)
- [What's included](#whats-included)
- [Creators](#creator)
- [Thanks](#thanks)


## Quick start

first to install deps
```bash
npm i
```
to start run in terminal

```
npm start
```
then  
- open the server on a webpage which is 
http://localhost:8080/

## Layout

The webpage has been designed specifically for mobile users and looks like this. 

<img src = 'https://user-images.githubusercontent.com/114497854/233987789-ebbef749-c56b-414c-b4ae-b351f607e763.gif' width = '224' height = '437px'>






## Bugs
A list of bugs which have yet to be sorted
- The timer that shows how long the pet has lived for upon the death of the pet will only if the user remains on the webpage, will not show if they click off and come back onto the webpage
- Meter attributes will continue to go down despite the fact that the pet has died


## What's included

```
client
 ┣ hideElements.mjs
 ┣ index.html
 ┣ index.js
 ┗ style.css
 package-lock.json
 package.json
 README.md
 server.mjs
 ```


## Creator

- **up2111821**






## Thanks

Thank you for playing and it is much appreciated that you will go onto this webpage to interact with the pet. There is a huge ton of features which you can enjoy. 
