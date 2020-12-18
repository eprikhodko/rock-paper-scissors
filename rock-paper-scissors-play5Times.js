// declare an array of game items
const items = ["Rock", "Paper", "Scissors"];

// play game 5 times
function game() {
  for (let i = 0; i < 5; i++) {

    // ask user for input and make it lowercase
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

    // random item selecting by computer from an [items] array
    function computerPlay() {
      const randomItem = Math.floor(Math.random() * items.length);
      return items[randomItem];
    }

    // log an item choosed by computer to the console
    console.log(computerSelection + "(PC)");
    // play round of a game
    function playRound(playerSelection, computerSelection) {
      if (playerSelection === computerSelection) {
        return "Draw!";
      } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        computerScore++;
        return "You Lose! Paper beats Rock!" + " Player vs PC = " + playerScore + ":" + computerScore;
      } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
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

// Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

// Write a NEW function called game(). Use the previous function inside of this one to play a round of game. 
// function game() should keep score and reports a winner or loser at the end to the console.log

// your program should keep score and reports a winner or loser at the end to the console.log

// your program should keep score and print it to the console.log

// if player win, give him a score and print "Player vs PC = 1:0"
let computerScore = 0;
let playerScore = 0;
// if player win, playerScore++ and print "Player vs PC = 1:0"
// if player win, playerScore++, console.log(playerScore)
// if computer win, give him a score and print "Player vs PC = 0:1"
// if it is a draw, print "Draw!"

// and now I need to add a message at the end which tells us who is winner at the game.





game();
