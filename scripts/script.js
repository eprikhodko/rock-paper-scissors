// welcome! 
// this program plays rock-paper-scissors game with a Player and Computer
// lets begin!

// declare an array of rock-paper-scissors game items
const items = ["Rock", "Paper", "Scissors"];

// set player score and computer score to 0 at the beginning of a game
let computerScore = 0;
let playerScore = 0;

// DOM part
/////////////////////////////////////////////////
// add event listeners to image buttons
/////////////////////////////////////////////////
let playerSelection = "currentlyEmpty";
// select image and store selected image in a variable
let buttonRock = document.getElementById("button-rock");
// add event listener to the rock image
// and what happens here? We add event listener to the rock button image. When user click at image, function fires. 
// first of all it assigns player selected hand to the playerSelection variable. 
// next we declare computerSelection variable
// next computer choose its sign too

buttonRock.addEventListener("click", function() {
  playerSelection = "Rock";
   // declare computerSelection variable
   let computerSelection = computerPlay();

   // random item selecting by computer from an [items] array, which are ["Rock", "Paper", "Scissors"]
   function computerPlay() {
     const randomItem = Math.floor(Math.random() * items.length);
     return items[randomItem];
   }
  console.log(playRound(playerSelection, computerSelection));
});
///////////////////////////////
// buttonRock.addEventListener("click", function () {
//   logIt();
// })

// function logIt() {
//   // console.log("clicked");
//   // console.log(playerScore++ +1);
//   playerScreenScore.textContent = "Player: " + (playerScore++ +1);
// }
/////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// paper
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
  console.log(playRound(playerSelection, computerSelection));
});

//////////////////////////////////////////////////////////////////
// scissores
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
 console.log(playRound(playerSelection, computerSelection));
});

let playerScreenScore = document.getElementById("player-score");
let computerScreenScore = document.getElementById("computer-score");
// play single round of a game between player and computer
function playRound(playerSelection, computerSelection) {

  playerScreenScore.textContent = "Player: " + playerScore;

  computerScreenScore.textContent = "Computer: " + computerScore;
      if (playerSelection === computerSelection) {
        return "Draw!";
      } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        // give a score to the computer
        computerScore++;
        // return "You Lose! Paper beats Rock!" + " Player vs PC = " + playerScore + ":" + computerScore;
        console.log("You Lose! Paper beats Rock!" + " Player vs PC = " + playerScore + ":" + computerScore)
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

