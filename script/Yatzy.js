'use strict'



let players = [""];
let points = ["Ones", "Twoes", "Threes", "Fours", "Fives", "Sixes", "Bonus", "One pair", "Two pairs", "Three of a kind", 
"Four of a kind", "Small straight", "Large straight", "Full house", "Chance", "Yatzee", "Sum"]; 


class Die {
    constructor(value, isLocked) {
        this.value = value;
        this.isLocked = isLocked;
    }
}


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

function buildTablePointRow(table, data, players){
    
    for(let i = 0; i < data.length; i++)
    {
        let row = table.insertRow();
        let cell = row.insertCell();
       
        let text = document.createTextNode(data[i]);
        cell.appendChild(text);

        for (let u = 0; u < players.length; u++) {
          
            row.insertCell();
        }
    }

}


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

let play = function(){
    return Math.floor(Math.random() * 6) + 1;
    
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


    return arr;
}

/**
 * Kører RollDices() når vi clicker på Roll..
 */
document.getElementById("rollDices").onclick = function() {
    rollDices(diceArray); 
}








