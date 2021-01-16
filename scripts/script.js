// welcome! 
// this program plays rock-paper-scissors game with a Player and Computer
// lets begin!

// declare an array of rock-paper-scissors game items
const items = ["Rock", "Paper", "Scissors"];

// set player score and computer score to 0 at the beginning of a game
let computerScore = 0;
let playerScore = 0;
let roundScore = 0;

// select player, computer, and current round score in DOM

let playerScreenScore = document.getElementById("player-score");
let computerScreenScore = document.getElementById("computer-score");
let roundScreenScore = document.getElementById("round-count");


// add event listeners to image buttons

let playerSelection = "currentlyEmpty";

// select image and store assosiated value in a variable
let buttonRock = document.getElementById("button-rock");

// add event listener to the rock image 
buttonRock.addEventListener("click", function() {
// after we clicked a button will happen this:
// assign correspond value to the variable playerSelection after we clicked at image
  playerSelection = "Rock";

// after player made his choise, let computer make its choice too
  // declare computerSelection variable
   let computerSelection = computerPlay();

   // random item select by computer from an [items] array, which are ["Rock", "Paper", "Scissors"]
   function computerPlay() {
     const randomItem = Math.floor(Math.random() * items.length);
     return items[randomItem];
   }

  // so we can call a function like this ALSO????????? maybe ask at odin?
  // and how the hell it works without let??????
  // playGame = playRound(playerSelection, computerSelection);
  let gameResult = playRound(playerSelection, computerSelection);

// we need to play a round of a game first, then if function playRound() returned "draw!" then show draw at score instead of round. 
 checkForDraw(gameResult);
});


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
 // check if it is a draw or not
 if (gameResult === "Draw!") {
  return roundScreenScore.textContent = "Draw!";
} else {
  roundScore++;
  return roundScreenScore.textContent = "Round " + roundScore;
}
}

/////////////////////////////////////////////////////////////////////////////////////
// PAPER
// add event listener to the paper image
let buttonPaper = document.getElementById("button-paper");
// add event listener to the paper image
buttonPaper.addEventListener("click", function() {
  playerSelection = "Paper";
   // declare computerSelection variable
   let computerSelection = computerPlay();

   // random item selecting by computer from an [items] array, which are ["Rock", "Paper", "Scissors"]
   function computerPlay() {
     const randomItem = Math.floor(Math.random() * items.length);
     return items[randomItem];
   }
   let gameResult = playRound(playerSelection, computerSelection);

   // we need to play a round of a game first, then if function playRound() returned "draw!" then show draw at score instead of round. 
    checkForDraw(gameResult);
});

//////////////////////////////////////////////////////////////////
// SCISSORS
let buttonScissors = document.getElementById("button-scissors");
// add event listener to the scissors image
buttonScissors.addEventListener("click", function() {
  playerSelection = "Scissors";
  // declare computerSelection variable
  let computerSelection = computerPlay();

  // random item selecting by computer from an [items] array, which are ["Rock", "Paper", "Scissors"]
  function computerPlay() {
    const randomItem = Math.floor(Math.random() * items.length);
    return items[randomItem];
  }

  let gameResult = playRound(playerSelection, computerSelection);

// we need to play a round of a game first, then if function playRound() returned "draw!" then show draw at score instead of round. 
 checkForDraw(gameResult);
});