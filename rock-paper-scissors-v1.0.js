// declare an array of game items
const items = ["Rock", "Paper", "Scissors"];

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

//random item selecting by computer from an [items] array
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
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return "You Win! Scissors beats Paper";
  }
}

console.log(playRound(playerSelection, computerSelection));

//test comment for commit
