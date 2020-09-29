

import {
    calcOnes, 
    calcTwoes, 
    calcThrees, 
    calcFours, 
    calcFives, 
    calcSixes, 
    onePair, 
    twoPair, 
    threeOfAKind, 
    fourOfAKind, 
    fullHouse, 
    smallStraight, 
    largeStraight, 
    bonus, 
    chance, 
    yatzy} from '/script/YatzyCalc.js';

let players = [""];
let points = ["Ones", "Twoes", "Threes", "Fours", "Fives", "Sixes", "Bonus", "One pair", "Two pairs", "Three of a kind", 
"Four of a kind", "Small straight", "Large straight", "Full house", "Chance", "Yatzee", "Sum"]; 

let maxRolls = 3;
let rolls = 0;

//Player arrays, hvor vi kan smide deres point ind
let lockedPlayer1Array = ["","","","","","","","","","","","","","","",""];
let lockedPlayer2Array = ["","","","","","","","","","","","","","","",""];
let lockedPlayer3Array = ["","","","","","","","","","","","","","","",""];
let lockedPlayer4Array = ["","","","","","","","","","","","","","","",""];
let lockedPlayer5Array = ["","","","","","","","","","","","","","","",""];
let lockedPlayer6Array = ["","","","","","","","","","","","","","","",""];
let lockedPlayer7Array = ["","","","","","","","","","","","","","","",""];
let lockedPlayer8Array = ["","","","","","","","","","","","","","","",""];
let lockedPlayer9Array = ["","","","","","","","","","","","","","","",""];
let lockedPlayer10Array = ["","","","","","","","","","","","","","","",""];

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
            let str = document.createTextNode("");
            let x = row.insertCell();
            x.appendChild(str);
            x.className = "td" + u;
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

//Terning-objekterne sættes ind i et array
let diceArray = [dice1, dice2, dice3, dice4, dice5];

//Funktion til at kaste med terningen
let play = function(){
    return Math.floor(Math.random() * 6) + 1;
    
}

let playerTurn = 1;

// Skifte tur for antal spillere
//document.getElementById("swapPlayer").onclick = function swapTurn(e){
function swapTurn(){
    let e = players;
    noOfRolls = 0; 
    rollButton.disabled = false; 
    if(playerTurn == (e.length - 1)){
        playerTurn = 0; 
        playerTurn++; 
        return e[playerTurn];
    }

    playerTurn++;
    return playerTurn; 
}

function test(){
    console.log("test");
}

let lockResult = function(pointScore, rowNo, cellNo){
    rowNo = rowNo - 1;
    if(cellNo == 1){
        
        lockedPlayer1Array.splice(rowNo, 1, pointScore);
        
        console.log(lockedPlayer1Array);

        for(let i = 1; i < 17; i++)
        {
            let x = document.getElementById("gameTable").rows[i+1].cells;
           
            x[cellNo].innerHTML = lockedPlayer1Array[i];
            //x[cellNo].innerHTML = pointScore;
            //x[cellNo].style.backgroundColor = "lightgrey";
            
            for (let i = 0; i < 17; i++) {
                
                let p = document.getElementById("gameTable").rows[i+1].cells;
                p[cellNo].innerHTML = lockedPlayer1Array[i];
                
            }
        }
    }

    if(cellNo == 2){
        lockedPlayer2Array.splice(rowNo, 1, pointScore);
        
        console.log(lockedPlayer2Array);

        for(let i = 1; i < 17; i++)
        {
            let x = document.getElementById("gameTable").rows[i+1].cells;
           
            x[cellNo].innerHTML = lockedPlayer2Array[i];
            //x[cellNo].innerHTML = pointScore;
            //x[cellNo].style.backgroundColor = "lightgrey";
            
            for (let i = 0; i < 17; i++) {
                
                let p = document.getElementById("gameTable").rows[i+1].cells;
                p[cellNo].innerHTML = lockedPlayer2Array[i];
                
            }
        }

    }




    swapTurn();
    
}

let noOfRolls = 1; 
let rollButton = document.getElementById("rollDices");

// Rolls 5 dices
function rollDices(arr) {

    if(noOfRolls > maxRolls)
    {
        rollButton.disabled = true; 
    }
    else
    {
        
        for (let i = 0; i < arr.length; i++) 
        {
            if(arr[i].isLocked == false){ //Hvis class er locked, så ruller terningen ikke
                arr[i].value = play();
            }
        }
        
        //Terningerne i HTML'en får skudt værdien ind    
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
    
        //Vi udregner de forskellige pointmuligheder
        let smallStraightResult = smallStraight(arr);
        let largeStraightResult = largeStraight(arr);
        let calcOnesResult = calcOnes(arr);
        let calcTwoesResult = calcTwoes(arr);
        let calcThreesResult = calcThrees(arr);
        let calcFoursResult = calcFours(arr);
        let calcFivesResult = calcFives(arr);
        let calcSixesResult = calcSixes(arr);
        let calcOnePairResult = onePair(arr);
        let calcTwoPairResult = twoPair(arr);
        let calcThreeOfAKindResult = threeOfAKind(arr);
        let calcFourOfAKindResult = fourOfAKind(arr);
        let calcFullHouseResult = fullHouse(arr);
        let calcChanceResult = chance(arr);
        let calcBonusResult = bonus(arr);
        let calcYatzyResult = yatzy(arr);
        //let calcSum = 
        
        let resultArray = [calcOnesResult, calcTwoesResult, calcThreesResult, calcFoursResult, calcFivesResult, calcSixesResult, calcBonusResult, calcOnePairResult,
        calcTwoPairResult, calcThreeOfAKindResult, calcFourOfAKindResult, smallStraightResult, largeStraightResult, calcFullHouseResult, calcChanceResult, calcYatzyResult];
        
        
        for(let i = 0; i < resultArray.length; i++)
        {
            let y = i+1;
            
            let x = document.getElementById("gameTable").rows[y].cells;

           x[playerTurn].innerHTML = resultArray[i];
           x[playerTurn].addEventListener("click", function() {
               lockResult(resultArray[i], y, playerTurn);
            });
           
            
        }

        noOfRolls++;


        return arr;

        }
        
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

