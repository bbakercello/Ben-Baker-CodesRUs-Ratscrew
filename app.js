//Pseudo Code for Project 1


/* 

HTML -

- Make basic layout with title, center play-pile, 
    player hands, face card templates, empty alert boxes


Javscript -

Players

- Create a Player class that accepts Player (X or Y) as paramters
as well as a randomized hand (two player arrays, will create later)

*/
class Player {
    constructor (player, hand){
        this.player = player
        this.hand = hand
    }
    // draw ()
}


/* Create variables for card types */
const values = ["A","1","2","3","4","5","6","7","8","9","10","J","Q","K"];
const suits = ["D","H","C","S"];

/* Empty array for creating deck*/
let deck = [];

/* Assign HTML elements to variables */
const playerYHand = document.querySelector("#hand-Y")
const playerXHand = document.querySelector("#hand-X") 
const centerDeck = document.querySelector("#centerDeck")

/* Create Player functions within player class 
    (createDeck, Draw, Draw-Face, Start Game, Create Deck, Shuffle Deck) */

function createDeck() {
    for(let ix=0; ix<suits.length; ix++){
        for(let iy=0; iy<values.length; iy++){
        deck.push(suits[ix] + '-' + values[iy])
        }
    }return deck
}
console.log(createDeck())


/*
Start/Reset

- Create a Start/Restart Game function which randmizes the deck 
    (a hidden array) into two player arrays

- The arrays are lists of class instances
    - (for example - "4OfHearts" would be a instance of the Number class)



Card Classes

- Create a Number Card Class which accepts a number and suit as its paramter

- Create a Face Card class which accepts a Face type  and suit as its parameter
    Within the class, create a Face Function that accepts the face type (as a number)
    as the paramter




Functions

- Create Function for Winning a round which will transfer the corresponding card
    number from the center array to the corresponding player's hand array

- Draw function moves a number from one array into the center play array and initializes
    compare booleans 
    - changes contents of center play pile to reflect the drawn card values

- "If" statements that compare cards within the Draw function
    - If two simultaneous or sandwiched cards are drawn, a timer function
     is initiated
    - If a face card is drawn, the Draw Face function is initliazed

- "If" statements focus in on array integer and class information 
    - (for example - centerPileArray[i].number would be the number of the card )




Slap Mechanic!

 - Create this timer which counts down from 1 second. If either player
    slaps before the timer runs out, that player receives the whole center pile

- Assign the slap to spacebar to a function (Slap())




Win Conditions 

- All 52 cards are in one players hands

// 


const test = [1,2,3,4,5,6,7];

const arrShuffle = (arr) => {
    const newIdx = Math.floor(Math.random()*arr.length);
    const shuffled = [];
    for (var i = 0; i < arr.length; i++) {
        shuffled.splice(newIdx, 0, arr[i]);
    }

    return shuffled;
}

*/