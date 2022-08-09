//Pseudo Code for Project 1


/* 

HTML -

- Make basic layout with title, center play-pile, 
    player hands, face card templates, empty alert boxes


Javscript -



/* Create variables for card types */
const values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
const suits = ["D","H","C","S"];

/* Empty array for creating deck and player hands*/
let deck = [];
let centerPile = [];


/* Assign HTML elements to variables */
const playerYDom = document.getElementById("hand-Y");
const playerXDom = document.getElementById("hand-X");
const centerDeck = document.getElementById("centerDeck");
const slapButton = document.getElementById("slapButton");
const drawXButton = document.getElementById("drawXButton");
const gameStatus = document.getElementById("gameStatus");
const currentPlayerDom = document.getElementById("currentPlayer");
const resetButton = document.getElementById("resetButton");

/*Players
- Create a Player class that accepts Player (X or Y) as paramters
as well as a randomized hand (two player arrays, will create later)
*/

class Player {
    constructor (player, hand){
        this.player = player
        this.hand = hand
    }
    // draw (hand)
}

/* Deal hands to players by splitting shuffled deck array in half */
let playerYHand = deck.slice(0, 26);
let playerXHand = deck.slice(26, 52);

let playerX = new Player ('playerX', playerXHand);
let playerY = new Player ('playerY', playerYHand);

/* Create variables for currentPlayer
*/
let currentPlayer = null
if(currentPlayer === null){
    currentPlayer = playerX
}
/* Make the deck
   - Create functions for making a deck 
  - createDeck() function pulls from two arrays to create one deck array
  - shuffleDeck uses .sort() by a range of [-.5, .5) to randomly sort the array */

function createDeck() {
    for(let ix=0; ix<suits.length; ix++){
        for(let iy=0; iy<values.length; iy++){
        deck.push(suits[ix] + '-' + values[iy])
        }
    }return deck
    
    }

function shuffleDeck(deck){
    deck.sort(() => Math.random() - 0.5);
    return deck
} 

// function clearBoard(){

// }




/* Reset the game with resetGame
   - refers to above functions
 */
function resetGame(){
    deck = [];
    centerPile = [];
    createDeck();
    shuffleDeck(deck);
    console.log(deck)
    playerYHand = deck.slice(0, 26);
    playerXHand = deck.slice(26, 52);
    console.log(playerXHand)
    return deck, playerYHand, playerXHand;
}



/* Create draw function referring to player hands 
 */
function draw(playerHand){
    centerPile.push(playerHand[playerHand.length - 1]);
    playerHand.pop(); 
    console.log(centerPile)
    console.log(playerHand)
return playerHand, centerPile
}

function drawPlayerX(){
   if(currentPlayer === "playerX") {
    draw(playerXHand)
    return currentPlayer = "playerY"
}
}
/* Assign buttons to Draw and Reset functions by addEventListener()
*/
drawXButton.addEventListener("click", drawPlayerX)
resetButton.addEventListener("click",resetGame)


/* Create a timer and callback function for determining computer move
   -Also intiatalizes computer draw
*/

let ticks = 5
let interval 

drawXButton.addEventListener('click',function (){
    ticks = 5
    clearInterval(interval);
    interval = setInterval(timerFunction, 500);
    })

function timerFunction(){
    ticks--
    console.log(ticks)
    if(ticks === 0){
        clearInterval(interval);
        draw(playerYHand)
        currentPlayer = "playerX"
        console.log(currentPlayer)
        return currentPlayer
    }
    else {
        currentPlayer = "playerY"
    }
    return ticks
}






/* 

Functions

- Create Function for Winning a round which will transfer the corresponding card
    number from the center array to the corresponding player's hand array


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