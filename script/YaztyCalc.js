'use strict'

let ones = 0;
    let twoes = 0;
    let threes = 0;
    let fours = 0;
    let fives = 0;
    let sixes = 0;

function checkDices(diceArr){
    let values = diceArr.map(a => a.value);

     ones = 0;
     twoes = 0;
     threes = 0;
     fours = 0;
     fives = 0;
     sixes = 0;


    for(var i = 0; i < values.length; ++i){
        if(values[i] == 1)
        {
            ones++;
        }
        if(values[i] == 2)
        {
            twoes++;
        }
        if(values[i] == 3)
        {
            threes++;
        }
        if(values[i] == 4)
        {
            fours++;
        }
        if(values[i] == 5)
        {
            fives++;
        }
        if(values[i] == 6)
        {
            sixes++;
        }
    }
}


function calcOnes(arr){
    checkDices(arr);
    return ones; 
}

function calcTwoes(arr){
    checkDices(arr);
    return twoes * 2; 
}

function calcThrees(arr){
    checkDices(arr);
    return threes * 3; 
}

function calcFours(arr){
    checkDices(arr);
    return fours * 4; 
}

function calcFives(arr){
    checkDices(arr);
    return fives * 5; 
}

function calcSixes(arr){
    checkDices(arr);
    return sixes * 6; 
}


let pairOne = 0;
let pairTwo = 0;
let pairThree = 0;
let pairFour = 0;
let pairFive = 0;
let pairSix = 0;
let pair;


function onePair(arr)
{
   
    checkDices(arr);
    let points = 0;
    pair = 0;
     
    if(ones >= 2)
    {
        points = 2;
        pairOne = 1;
        pair++;
    }
    if(ones >= 4) {
        points = 2
        pairOne = 2;
        pair = 2;
    }
    if(twoes >= 2)
    {
        points = 4;
        pairTwo = 1;
        pair++;
    }
    if(twoes >= 4) {
        points = 4
        pairTwo = 2;
        pair = 2;
    }
    if(threes >= 2)
    {
        points = 6;
        pairThree = 1;
        pair++;
    }
    if(threes >= 4) {
        points = 6
        pairThree = 2;
        pair = 2;
    }
    if(fours >= 2)
    {
        points = 8;
        pairFour = 1;
        pair++;
    }
    if(fours >= 4)
    {
        points = 8;
        pairFour = 2;
        pair = 2;
    }
    if(fives >= 2)
    {
        points = 10;
        pairFive = 1;
        pair++;
    }
    if(fives >= 4)
    {
        points = 10;
        pairFive = 2;
        pair = 2;
    }
    if(sixes >= 2)
    {
        points = 12;
        pairSix = 1;
        pair++;
    }
    if(sixes >= 4)
    {
        points = 12;
        pairSix = 2;
        pair = 2;
    }
    return points;
}


function twoPair(arr)
{

    let points = 0;
    checkDices(arr);
    let firstPair = onePair(arr);
    if(pair == 2) {
        if(pairOne == 1)
        {
            points += 2;
        }
        if(pairOne == 2)
        {
            points += 4;
        }

        if(pairTwo == 1)
        {
            points += 4;
        }
        if(pairTwo == 2) 
        {
            points += 8;
        }

        if(pairThree == 1)
        {
            points += 6;
        }
        if(pairThree == 2)
        {
            points += 12;
        }

        if(pairFour == 1)
        {
            points += 8;
        }
        if(pairFour == 2)
        {
            points += 16;
        }

        if(pairFive == 1)
        {
            points += 10;
        }
        if(pairFive == 2)
        {
            points += 20;
        }

        if(pairSix == 1)
        {
            points += 12;
        }
        if(pairSix == 2)
        {
            points += 24;
        }

    return points;
}
    return points;
}



let isThreeOfAKind = false;

function threeOfAKind(arr){

    checkDices(arr);
    let points = 0;

    if(ones >= 3)
    {
        points = 3;
        isThreeOfAKind = true;       
    }
    if(twoes >= 3)
    {
        points = 6;
        isThreeOfAKind = true;
    }
    if(threes >= 3)
    {
        points = 9;
        isThreeOfAKind = true;
    }
    if(fours >= 3)
    {
        points = 12;
        isThreeOfAKind = true;
    }
    if(fives >= 3)
    {
        points = 15;
        isThreeOfAKind = true;
    }
    if(sixes >= 3)
    {
        points = 18;
        isThreeOfAKind = true;
    }
    return points;
}

function fourOfAKind(arr){
    checkDices(arr);
    let points = 0;

    if(ones >= 4)
    {
        points = 4;
    }
    if(twoes >= 4)
    {
        points = 8;
    }
    if(threes >= 4)
    {
        points = 12;
    }
    if(fours >= 4)
    {
        points = 16;
    }
    if(fives >= 4)
    {
        points = 20;
    }
    if(sixes >= 4)
    {
        points = 24;
    }
    return points;
}

function fullHouse(arr){

    debugger;
    let values = arr.map(a => a.value);
    
    values.sort();
    let points = 0;

    let var1 = values[0];
    let var2 = values[1];
    let var3 = values[2];
    let var4 = values[3];
    let var5 = values[4];


    if((var1 == var2 && var3 == var5) || (var1 == var3 && var4 == var5)){
        
        for (let i = 0; i < values.length; i++) {
            debugger;
            points += values[i];
        }

    }
    return points;
 
}




function smallStraight(arr){
    checkDices(arr); 
    let points = 0; 
    if(ones == 1 && twoes == 1 && threes == 1 && fours == 1 && fives == 1)
    {
        points = 15;
        return points;
    }
    else 
    {
        points = 0;
        return points;
    }
}



function largeStraight(arr){
    checkDices(arr); 
    let points = 0;
    if(ones == 1 && twoes == 1 && threes == 1 && fours == 1 && fives == 1)
    {
        points = 15;
        return points;
    }
    else 
    {
        points = 0;
        return points;
    }
}


function bonus(arr){
    let result = calcOnes(arr) + calcTwoes(arr) + calcThrees(arr) + calcFours(arr) + calcFives(arr) + calcSixes(arr);
    let points = 0;
    if(result >= 63){
        points = 50;
    }
    return points; 
}


function chance(arr){
    let points = calcOnes(arr) + calcTwoes(arr) + calcThrees(arr) + calcFours(arr) + calcFives(arr) + calcSixes(arr);
    return points;
}

function yatzy(arr){
let points = 0;

let values = arr.map(a => a.value);
    
    values.sort();
    

    let var1 = values[0];
    let var5 = values[4];

    if(var1 == var5){
       points = 50;

    }
    return points;

}
