'use strict'



let players = ["", "Ole", "Ida", "Jan"];
let points = ["Ones", "Twoes", "Threes", "Fours", "Fives", "Sixes", "Bonus", "One pair", "Two pairs", "Three of a kind", 
"Four of a kind", "Small straight", "Large straight", "Full house", "Chance", "Yatzee", "Sum"]; 

let maxRolls = 3;
let rolls = 0;

//Terningen til et object
class Die {
    constructor(value, isLocked) {
        this.value = value;
        this.isLocked = isLocked;
    }
}

//Funktion til at skyde spillernavne ind i et array
document.getElementById("submitPlayer").onclick = function(){

    let playerName = document.getElementById("addPlayer").value;
   
    players.push(playerName);
    document.getElementById("addedPlayer").innerHTML = playerName + " added to game";
    document.getElementById("addPlayer").value = "";
    
}
/**
 * Start game..
 * - Indlæs pointtavle
 */
document.getElementById("startGame").onclick = function startGame(){

    buildTableHead(gameTable, players);
    
    document.getElementById('gameStart').style.display="none";
    document.getElementById('game').style.display="block";
    buildTablePointRow(gameTable, points, players);
}


/**
 * Oprettelse af table
 */
let gameTable = document.getElementById("gameTable");
let pointsTable = document.getElementById("points");



//Vi bygger table head
function buildTableHead(table, data)
{
    let thead = table.createTHead();

    let row = thead.insertRow();

    for(let i = 0; i < data.length; i++)
    {
        
        let th = document.createElement("th");
        let text = document.createTextNode(data[i]);
        th.appendChild(text);
        row.appendChild(th);
    }

}

//Vi bygger table rækker inkl. point og tomme felter under spillere
function buildTablePointRow(table, data, players){
    
    for(let i = 0; i < data.length; i++)
    {
        let row = table.insertRow();
        let cell = row.insertCell();
       
        let text = document.createTextNode(data[i]);
        cell.appendChild(text);

        for (let u = 1; u < players.length; u++) {
          
            row.insertCell();
        }
    }

}

//Opretter de fem terninger 
let dice1 = new Die();
dice1.value = 0;
dice1.isLocked = false;

let dice2 = new Die();
dice2.value = 0;
dice2.isLocked = false;

let dice3  = new Die();
dice3.value = 0;
dice3.isLocked = false;

let dice4 = new Die();
dice4.value = 0;
dice4.isLocked = false;

let dice5  = new Die();
dice5.value = 0;
dice5.isLocked = false;

let diceArray = [dice1, dice2, dice3, dice4, dice5];

//Funktion til at kaste med terningen
let play = function(){
    return Math.floor(Math.random() * 6) + 1;
    
}

let playerTurn = 0;

// Skifte tur for antal spillere
document.getElementById("swapPlayer").onclick = function swapTurn(e){
    e = players;

    if(playerTurn == (e.length - 1)){
        playerTurn = 0; 
        playerTurn++; 
        console.log(players[playerTurn]);
        return e[playerTurn];
    }
    playerTurn++;
    console.log(e[playerTurn]);

    return e[playerTurn]; 

}



// Rolls 5 dices
function rollDices(arr) {

    for (let i = 0; i < arr.length; i++) {
        if(arr[i].isLocked == false){ //Hvis class er locked, så ruller terningen ikke
            arr[i].value = play();
        }
    }
    console.log(arr);

    
    let dice1Value = document.getElementById("dice1");
    dice1Value.innerHTML = dice1.value; 

    let dice2Value = document.getElementById("dice2");
    dice2Value.innerHTML = dice2.value; 

    let dice3Value = document.getElementById("dice3");
    dice3Value.innerHTML = dice3.value; 

    let dice4Value = document.getElementById("dice4");
    dice4Value.innerHTML = dice4.value; 

    let dice5Value = document.getElementById("dice5");
    dice5Value.innerHTML = dice5.value; 

    
    let smallStraightResult = smallStraight(arr);
    let largeStraightResult = largeStraight(arr);
    let calcOnesResult = calcOnes(arr);
    let calcTwoesResult = calcTwoes(arr);
    let calcThreesResult = calcThrees(arr);
    let calcFoursResult = calcFours(arr);
    let calcFivesResult = calcFives(arr);
    let calcSixesResult = calcSixes(arr);
    let calcOnePairResult = onePair(arr);
    debugger;
     
     
    return arr;
}

/**
 * Kører RollDices() når vi clicker på Roll-knap..
 */
document.getElementById("rollDices").onclick = function() {
    rollDices(diceArray); 
}

//Funktion til at kunne låse terning
let lockDice = function(dice){
    if(dice.isLocked == false){
        dice.isLocked = true;
    }
    else{
        dice.isLocked = false;
    }
}

//Vi sætter låse-funktion på hver terning
document.getElementById("dice1").onclick = function(){ 
    lockDice(dice1);  
}

document.getElementById("dice2").onclick = function(){ 
    lockDice(dice2);  
}

document.getElementById("dice3").onclick = function(){ 
    lockDice(dice3);  
}

document.getElementById("dice4").onclick = function(){ 
    lockDice(dice4);  
}

document.getElementById("dice5").onclick = function(){ 
    lockDice(dice5); 
}



