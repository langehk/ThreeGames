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


let pairOne = false;
let pairTwo = false;
let pairThree = false;
let pairFour = false;
let pairFive = false;
let pairSix = false;
let pair;


function onePair(arr)
{
    checkDices(arr);
    let points = 0;
    pair = 0;
     
    if(ones >= 2)
    {
        points = 2;
        pairOne = true;
        pair++;
    }
    if(twoes >= 2)
    {
        points = 4;
        pairTwo = true;
        pair++;
    }
    if(threes >= 2)
    {
        points = 6;
        pairThree = true;
        pair++;
    }
    if(fours >= 2)
    {
        points = 8;
        pairFour = true;
        pair++;
    }
    if(fives >= 2)
    {
        points = 10;
        pairFive = true;
        pair++;
    }
    if(sixes >= 2)
    {
        points = 12;
        pairSix = true;
        pair++;
    }
    return points;
}


function twoPair(arr)
{

    let points = 0;
    checkDices(arr);
    let firstPair = onePair(arr);
if(pair == 2) {
    if(pairOne == true)
    {
        points += 2;
    }
    if(pairTwo == true)
    {
        points += 4;
    }
    if(pairThree == true)
    {
        points += 6;
    }
    if(pairFour == true)
    {
        points += 8;
    }
    if(pairFive == true)
    {
        points += 10;
    }
    if(pairSix == true)
    {
        points += 12;
    }
    return points;
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
