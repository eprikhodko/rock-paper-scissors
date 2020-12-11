//declare an array of hands
const hands = ["Rock", "Paper", "Scissors"];

//random hands selecting by computer
function computerPlay() {
  const randomHand = Math.floor(Math.random() * hands.length);
  return hands[randomHand];
}

//ask user for input
let playerSelection = prompt("rock, paper, or scissors? Which one you choose?");

//make user input lowercase
playerSelection = playerSelection.toLowerCase();

//capitalize first letter
function capitalizeFirstLetter(playerSelection) {
  return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
}

playerSelection = capitalizeFirstLetter(playerSelection);

//play round of a game
function playRound(playerSelection, computerSelection) {
  // compare input from user and input from computer.
  // if  playerSelection === computerSelection return string "Draw!"
  if playerSelection === computerSelection {
    return "Draw!";
  }
  // else if playerSelection === "Rock" && computerSelection === "Paper" return string "You Lose! Paper beats Rock"
  // else if playerSelection === "Rock" && computerSelection === "Scissors" return string "You Win! Rock beats Scissors"
  // else if playerSelection === "Paper" && computerSelection === "Rock" return string "You Win! Paper beats Rock"
  // else if playerSelection === "Paper" && computerSelection === "Scissors" return string "You Lose! Scissors beats Paper"
  // else if playerSelection === "Scissors" && computerSelection === "Rock" return string "You Lose! Rock beats Scissors"
  // else if playerSelection === "Scissors" && computerSelection === "Paper" return string "You Win! Scissors beats Paper"
}

const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
