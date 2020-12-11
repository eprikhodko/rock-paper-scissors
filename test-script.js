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

//play round of a game
function playRound(playerSelection, computerSelection) {
  // your code here!
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
