'use strict'
import {createCookie} from '/script/cookies.js';

let playerName = prompt("Enter your name");

let y = Math.floor( Math.random() * 1000 + 1 );
console.log( y );

let guess = 0;

// Functions

let maxGuess = function () {
  document.getElementById( "result" )
    .innerHTML = 'Sorry, you used all of your guesses.';
  document.getElementById( "guessForm" )
    .style.display = "none";
  document.getElementById( "tryAgainForm" )
    .style.display = "block";
}

let tryAgain = function () {
  document.getElementById( "tryAgainForm" )
    .style.display = "none";
  document.getElementById( "guessForm" )
    .style.display = "block";
  y = Math.floor( Math.random() * 1000 + 1 );
  guess = 0;
  document.getElementById( "guesses" )
    .innerHTML = 'number of guesses: ' + guess;
  console.log( y );
}

//if guess is to small
let smaller = function () {
  if ( guess === 10 ) {
    maxGuess();
  } else {
    document.getElementById( "result" )
      .innerHTML = "Try a bigger number.";
    console.log( 'number of guess: ' + guess );
  }
}

//if guess is to big
let bigger = function () {
  if ( guess === 10 ) {
    maxGuess();
  } else {
    document.getElementById( "result" )
      .innerHTML = "Try a smaller number.";
    console.log( 'number of guess: ' + guess );
  }
}

//if guess is correct
let correct = function () {
  if ( guess === 1 ) {
    document.getElementById( "result" )
      .innerHTML = `CONGRATULATIONS!!! you guessed the right number with ${guess} guess.`;
    document.getElementById( "result" )
      .style.paddingTop = 0;
    document.getElementById( "guessForm" )
      .style.display = "none";
    document.getElementById( "tryAgainForm" )
      .style.display = "block";
  } else {
    document.getElementById( "result" )
      .innerHTML = `CONGRATULATIONS!!! you guessed the right number with ${guess} guesses.`;
    document.getElementById( "guessForm" )
      .style.display = "none";
    document.getElementById( "tryAgainForm" )
      .style.display = "block";
      createCookie(playerName, guess, 10);
  }
}

let result = function () {
  var x = document.getElementById( "guessField" )
    .value;

  if ( x === "" ) {
    document.getElementById( "result" )
      .innerHTML = 'You have to write something in the text field';
    guess++;
  } else if ( x == y ) {
    guess++;
    correct();
  } else if ( x > y ) {
    guess++;
    bigger();
  } else {
    guess++;
    smaller();

  }
}

export{result, tryAgain, guess}; 