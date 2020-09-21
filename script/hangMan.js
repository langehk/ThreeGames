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
let word; // Ordet det skal gættes
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
  let randomWord = listOfWords[Math.floor(Math.random() * listOfWords.length)];
  convertToLetterArray(randomWord);
  currentLives = 10;
  updateLives();
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
  setText("hangManWord", hiddenArray);
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
  }
}

/*
Laver en <ul> med alle input på tastaturet.
*/
function keyboard() {
  myKeyboard = document.getElementById("keyboard");
  letters = document.createElement("ul");

  for (let i = 0; i < alphabet.length; i++) {
    letters.id = "alphabet";

    list = document.createElement("button");
    list.id = "letter"; //Laver et id til hver knap, så vi kan fange den senere.
    list.innerHTML = alphabet[i]; //Angiver bogstav til hver "button" element.
    myKeyboard.appendChild(letters); //Sætter vores "letters" ind i keyboard div.
    letters.appendChild(list);
  }
}

keyboard(); // Load keyboard

/*
Event listener på alphabet buttons...
SER PÅ ALLE I VORES "Alphabet" og laver en eventlistener, når vi klikker på en button "letter."
*/
document.getElementById("alphabet").addEventListener("click", checkLetter);

/*
Henter innerHTML på den knap som er blevet trykket.
Og returnerer bogstavet.
- Check om array indeholder bogstavet som vi trykker på
*/
function checkLetter(element) {
  let guess = element.srcElement.innerHTML;

  for (let i = 0; i < wordArray.length; i++) {
    // HENTER INDEX UD HVOR DEN ER === VORES GUESS
    if (wordArray[i] === guess) {
      globalHiddenArray.splice(i, 1, guess); // Erstatter _ med det bogstav vi har indtastet.
    }
  }

  if (!wordArray.includes(guess)) {
    currentLives--;
  }

  guesses.push(guess); //Smider vores get i en liste. - Mangler at blive printet.

  setText("hangManWord", globalHiddenArray);

  // Hvis ordet ikke indeholder bogstavet, skal der trækkes 1 fra lives
  // + skal tilføjes til en liste over anvendte bogstaver. som skal vises (rød skrift??)

  updateLives();

  return guess;
}
