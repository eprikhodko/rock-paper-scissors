// welcome! 
// this program plays rock-paper-scissors game with a Player and Computer
// lets begin!

// declare an array of rock-paper-scissors game items
const items = ["Rock", "Paper", "Scissors"];

// set player score, computer score, and round score to 0 at the beginning of a game
let computerScore = 0;
let playerScore = 0;
let roundScore = 0;

// select and cache player, computer, and current round score in DOM in a variables
let playerScreenScore = document.getElementById("player-score");
let computerScreenScore = document.getElementById("computer-score");
let roundScreenScore = document.getElementById("round-count");

// select rock image and store assosiated value in a variable
let buttonRock = document.getElementById("button-rock");
// select paper image and store assosiated value in a variable
let buttonPaper = document.getElementById("button-paper");
// select scissors image and store assosiated value in a variable
let buttonScissors = document.getElementById("button-scissors");

// set item selected by player at empty state
let playerSelection = "currentlyEmpty";

// random item select by computer from an [items] array, which are ["Rock", "Paper", "Scissors"]
function computerSelection() {
  const randomItem = Math.floor(Math.random() * items.length);
  return items[randomItem];
}

// play single round of a game between player and computer
function playRound(playerSelection, computerSelection) {

  playerScreenScore.textContent = "Player: " + playerScore;
  computerScreenScore.textContent = "Computer: " + computerScore;
  

      if (playerSelection === computerSelection) {
        return "Draw!";
      } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        // give a score to the computer first
        computerScore++;
        console.log("You Lose! Paper beats Rock!" + " Player vs PC = " + playerScore + ":" + computerScore)
        // then return computerScore, after we were incremented it
        return computerScreenScore.textContent = "Computer: " + computerScore;
      } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        // give a score to the player
        playerScore++;
        console.log("You Win! Rock beats Scissors!" + " Player vs PC = " + playerScore + ":" + computerScore)
        return playerScreenScore.textContent = "Player: " + playerScore;
      } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore++;
        console.log("You Win! Paper beats Rock!" + " Player vs PC = " + playerScore + ":" + computerScore)
        return playerScreenScore.textContent = "Player: " + playerScore;
      } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computerScore++;
        console.log("You Lose! Scissors beats Paper!" + " Player vs PC = " + playerScore + ":" + computerScore)
        return computerScreenScore.textContent = "Computer: " + computerScore;
      } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        computerScore++;
        console.log("You Lose! Rock beats Scissors!" + " Player vs PC = " + playerScore + ":" + computerScore)
        return computerScreenScore.textContent = "Computer: " + computerScore;
      } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerScore++;
        console.log("You Win! Scissors beats Paper!" + " Player vs PC = " + playerScore + ":" + computerScore)
        return playerScreenScore.textContent = "Player: " + playerScore;
      }
}

function checkForDraw(gameResult) {
  if (gameResult === "Draw!") {
   return roundScreenScore.textContent = "Draw!";
 } else {
   roundScore++;
   return roundScreenScore.textContent = "Round " + roundScore;
 }
}
 
function checkForScore(playerScore, computerScore) {
  if (playerScore >= 5) {
    return roundScreenScore.textContent = "Player Win!";
  } else if (computerScore >= 5) {
    return roundScreenScore.textContent = "Computer Win!";
  }
}

function playerSelectRock() {
    // assign correspond value to the playerSelection variable after we clicked a button 
      playerSelection = "Rock";
    
      // so we can call a function like this ALSO????????? maybe ask at odin?
      // and how the hell it works without let??????
      // playGame = playRound(playerSelection, computerSelection);
    
       let gameResult = playRound(playerSelection, computerSelection());
    // we need to play a round of a game first, then if function playRound() returned "draw!" then show draw at score instead of round. 
     checkForDraw(gameResult);
     checkForScore(playerScore, computerScore); 
}

function playerSelectPaper() {
    playerSelection = "Paper";
  
    let gameResult = playRound(playerSelection, computerSelection());
  
     // we need to play a round of a game first, then if function playRound() returned "draw!" then show draw at score instead of round. 
      checkForDraw(gameResult);
      checkForScore(playerScore, computerScore);
}

function playerSelectScissors() {
    playerSelection = "Scissors";
   
  
    let gameResult = playRound(playerSelection, computerSelection());
  
  // we need to play a round of a game first, then if function playRound() returned "draw!" then show draw at score instead of round. 
   checkForDraw(gameResult);
   checkForScore(playerScore, computerScore);
}


// add event listener to the rock image 
buttonRock.addEventListener("click", playerSelectRock);

// add event listener to the paper image
buttonPaper.addEventListener("click", playerSelectPaper);

// add event listener to the scissors image
buttonScissors.addEventListener("click", playerSelectScissors);