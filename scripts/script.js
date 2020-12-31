// welcome! 
// this program plays rock-paper-scissors game with a Player and Computer
// lets begin!

// declare an array of rock-paper-scissors game items
const items = ["Rock", "Paper", "Scissors"];

 // set player score and computer score to 0 at the beginning of a game
 let computerScore = 0;
 let playerScore = 0;

// play game 5 times
function game() {
  for (let i = 0; i < 5; i++) {

    // ask user for an input and make it lowercase
    let playerSelection = prompt("rock, paper, or scissors? Which one you choose?").toLowerCase();

    // capitalize first letter of user input string
    playerSelection = capitalizeFirstLetter(playerSelection);

    function capitalizeFirstLetter(playerSelection) {
        return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    }

    // log an item choosed by player to the console
    console.log(playerSelection + "(Player)");
    
    // declare computerSelection variable
    let computerSelection = computerPlay();

    // random item selecting by computer from an [items] array, which are ["Rock", "Paper", "Scissors"]
    function computerPlay() {
      const randomItem = Math.floor(Math.random() * items.length);
      return items[randomItem];
    }

    // log an item choosed by computer to the console
    console.log(computerSelection + "(PC)");

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

    console.log(playRound(playerSelection, computerSelection));
  }
// looks like I could add statistics here, and it should execute after looping game() function for a 5 times.
console.log(playerScore, computerScore);
// and after testing looks like it works!

// report winner after 5 rounds of a game to the console.log
if (playerScore > computerScore) {
  console.log("Player Win!");
} else if (computerScore > playerScore) {
  console.log("Computer Win!");
} else {
  console.log("Draw!");
}


}

// set player score and computer score to 0 at the beginning of a game
// this variables placed here for an example. They can exist at the end of the program and still it will run fine. Interesting! Uncomment those two variables below and comment those two at the beginning of program to see that everything still work fine.
// let computerScore = 0;
// let playerScore = 0;

// call a function game() that will play rock-paper-scissors game for 5 times.
game();
