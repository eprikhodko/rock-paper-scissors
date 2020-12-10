const hands = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  const randomHand = Math.floor(Math.random() * hands.length);
  return hands[randomHand];
}
