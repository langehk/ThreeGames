'use strict';

import {createCookie} from '/script/cookies.js';

let playerName = prompt("Enter your name:");

let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "æ",
  "ø",
  "å",
];

let listOfWords = [
  "eddike",
  "tegnefilm",
  "pirater",
  "international",
  "plateau",
  "paradis",
  "vagabond",
  "betaling",
  "bagagerum",
];

let hangManWord = document.getElementById("hangManWord");
let displayGuesses = document.getElementById("guesses");
let word; // Ordet der skal gættes
let wordArray; // Ordet i et array
let guess; // Vores gæt

let guesses = []; // Liste af gæt
let currentLives; // Vores liv
let globalHiddenArray; // Brugt til at opdatere vores skjulte "array"

// Eventlistener new game
document.getElementById("playBtn").addEventListener("click", newGame);

//Function til at sætte værdi af et element. (Opdaterer teksten, når vi gætter bogstaver)
function setText(id, newvalue) {
  var s = document.getElementById(id);
  s.innerHTML = newvalue;
}



// Returnerer et tilfældigt ord fra vores Array.
// Skal laves så man kun kan trykke en gang. (Opderete et bestemt element?)
function newGame() {
  guesses = [];
  let randomWord = listOfWords[Math.floor(Math.random() * listOfWords.length)];

  convertToLetterArray(randomWord);
  currentLives = 10;
  updateLives();

  
  let all = document.getElementsByClassName("letter");
  /**
   * Enabler vores knapper når vi nulstiller spillet.
   */
  for (let i = 0; i < all.length; i++) {
      all[i].disabled = false;
  }

}

/*
Tager vores ord og laver et array med hver enkelt bogstav.
Derefter laver den enten en "-" eller "_" ud fra hvad ordet indeholder.
Dette bliver smidt ind i vores "wordToGuess".
*/
function convertToLetterArray(word) {
  let letterArray = [];
  let hiddenArray = [];

  for (let i = 0; i < word.length; i++) {
    letterArray.push(word.charAt(i));

    if (letterArray[i] === "-") {
      hiddenArray.push("-");
    } else {
      hiddenArray.push("_");
    }
  }

  wordArray = letterArray; // ["P", "E", "R"];
  setText("hangManWord", hiddenArray.join(" "));
  globalHiddenArray = hiddenArray;
  return hiddenArray; // ["_", "_", "_"];
}

/*
Håndtering af liv/antal forsøg.
*/
function updateLives() {
  let livesText = document.getElementById("lives");

  livesText.innerHTML = "Current lives: " + currentLives;

  if (currentLives < 1) {
    livesText.innerHTML = "Game over!";
    alert("Game over!");

    newGame();
  }

  

  displayGuesses.innerHTML = guesses; // Viser hvilke bogstaver vi har anvendt.
}

/*
Laver en <ul> med alle input på tastaturet.
*/
function loadKeyboard() {
  let myKeyboard = document.getElementById("keyboard");
  let letters = document.createElement("ul");

  for (let i = 0; i < alphabet.length; i++) {
    letters.id = "alphabet";

    let list = document.createElement("button");
    list.classList.add("letter"); //Laver et id til hver knap, så vi kan fange den senere.
    list.innerHTML = alphabet[i]; //Angiver bogstav til hver "button" element.
    myKeyboard.appendChild(letters); //Sætter vores "letters" ind i keyboard div.
    letters.appendChild(list);
  }
}

loadKeyboard();

/*
Event listener på alphabet buttons.
Ser på alle buttons under alphabet "Alphabet" og laver en eventlistener, når vi klikker på en button.
*/
// document.getElementById("alphabet").addEventListener("click", checkLetter); // FEJL !!!


/**
 * Eventlistener UDELUKKENDE på Letter buttons.
 */
let allLetters = document.getElementsByClassName("letter");

for (let i = 0; i < allLetters.length; i++) {
  allLetters[i].addEventListener("click", checkLetter);

}

// Et problem der kan snakkes om - Event listener som kun rammer en button.
// Hvis vi har "alphabet" og ikke "letters" vil vi også ramme vores "spilleplade"

/*
Henter innerHTML på den knap som er blevet trykket.
Og returnerer bogstavet.
- Check om array indeholder bogstavet som vi trykker på
*/
function checkLetter(element) {
  
  let guess = element.srcElement.innerText;
  element.srcElement.disabled = true;

  //Checker om bogstavet allerede er tastet i forvejen..
  if (guesses.includes(guess)) {
    alert("You've already used the letter: " + guess);
    return null;
  }

  
  /**
   * Checker om bogstavet findes i vores array.
   * + Erstatter _ med det indtastede bogstav (guess)
   */
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] === guess) {
      globalHiddenArray.splice(i, 1, guess);
    }
  }

  /**
   * Hvis bogstavet ikke findes i vores array, mister man et liv.
   */
  if (!wordArray.includes(guess)) {
    currentLives--;
  }
  guesses.push(guess);
  setText("hangManWord", globalHiddenArray.join(" "));
  updateLives();


  checkArrayAndWin(globalHiddenArray, wordArray);


  


}

let win = "win";

let checkArrayAndWin = function(arr1, arr2) {
  // Check if the arrays are the same length
	if (arr1.length !== arr2.length) {
    return false;
  }
  
	// Check if all items exist and are in the same order
	for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) 
    return false;
  }
  if(arr1.length == arr2.length)
  {
    alert("You Win!");
    createCookie(playerName, currentLives, 10);

  }
  
  return true;
  }


 