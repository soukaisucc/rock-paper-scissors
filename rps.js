let computerOptions = ['rock', 'paper', 'scissors'];

function getComputerChoice() {

   let computerResult = computerOptions[Math.floor(Math.random() * 3)];

   return computerResult;

}

function playRound(playerSelection, computerSelection) {

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));