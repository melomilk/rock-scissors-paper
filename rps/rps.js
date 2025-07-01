const playerDisplay = document.getElementById ("player-choice");
const computerDisplay = document.getElementById ("computer-choice");
const resultDisplay = document.getElementById ("resultDisplay");

const choices = ["rock", "paper", "scissors"];

function Game (playerChoice) {

  const computerChoice  = choices[Math.floor(Math.random() * 3)];

  const getResult = (playerChoice, computerChoice) =>
  playerChoice === computerChoice ? "IT'S A TIE" :
  (playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE";

  const result = getResult(playerChoice, computerChoice);
  resultDisplay.textContent = result;
  playerDisplay.textContent = `PLAYER: ${playerChoice}`; 
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;

  resultDisplay.style.backgroundColor =
  result === "IT'S A TIE"  // was missing !
    ? "blue"
    : result === "YOU WIN!" // was missing !
    ? "green"
    : "red";
  resultDisplay.style.border = "2px solid transparent";
  resultDisplay.style.color = "white";
}
