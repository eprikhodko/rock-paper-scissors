// welcome! 
// this program plays rock-paper-scissors game with a Player and Computer
// lets begin!

// DOM part
/////////////////////////////////////////////////
// add event listeners to image buttons
/////////////////////////////////////////////////
let playerSelection = "currentlyEmpty";
// select image and store selected image in a variable
let buttonRock = document.getElementById("button-rock");
// add event listener to the rock image
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

let buttonScissors = document.getElementById("button-scissors");
// add event listener to the paper image
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

// game part
//////////////////////////////////////////////////

// declare an array of rock-paper-scissors game items
const items = ["Rock", "Paper", "Scissors"];

 // set player score and computer score to 0 at the beginning of a game
 let computerScore = 0;
 let playerScore = 0;

    
   

//if user clicked "rock-button" then let playerSelection === "rock"
// else if user clicked "paper-button" then let playerSelection === "paper"
// else if user clicked "scissors-button" then let playerSelection === "scissors"

    // play single round of a game between player and computer
    function playRound(playerSelection, computerSelection) {
      if (playerSelection === computerSelection) {
        return "Draw!";
      } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        // give a score to the computer
        computerScore++;
        return "You Lose! Paper beats Rock!" + " Player vs PC = " + playerScore + ":" + computerScore;
      } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        // give a score to the player
        playerScore++;
        return "You Win! Rock beats Scissors!" + " Player vs PC = " + playerScore + ":" + computerScore;
      } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore++;
        return "You Win! Paper beats Rock!" + " Player vs PC = " + playerScore + ":" + computerScore;
      } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computerScore++;
        return "You Lose! Scissors beats Paper!" + " Player vs PC = " + playerScore + ":" + computerScore;
      } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        computerScore++;
        return "You Lose! Rock beats Scissors!" + " Player vs PC = " + playerScore + ":" + computerScore;
      } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerScore++;
        return "You Win! Scissors beats Paper!" + " Player vs PC = " + playerScore + ":" + computerScore;
      }
    }
//////////////////////////////////////////////////////
    // console.log(playRound(playerSelection, computerSelection));
////////////////////////////////////////////////////
  
// looks like I could add statistics here, and it should execute after looping game() function for a 5 times.
///////////////////////////////////////
// console.log(playerScore, computerScore);
// and after testing looks like it works!
///////////////////////////////

// report winner after 5 rounds of a game to the console.log
if (playerScore > computerScore) {
  console.log("Player Win!");
} else if (computerScore > playerScore) {
  console.log("Computer Win!");
} else {
  ///////////////////////////////////
  // console.log("Draw!");
  ////////////////////////////////////
}




// set player score and computer score to 0 at the beginning of a game
// this variables placed here for an example. They can exist at the end of the program and still it will run fine. Interesting! Uncomment those two variables below and comment those two at the beginning of program to see that everything still work fine.
// let computerScore = 0;
// let playerScore = 0;

// call a function playRound(playerSelection, computerSelection) that will play rock-paper-scissors game for 1 round.
// playRound(playerSelection, computerSelection);

// when user clicks on button fire function playRound