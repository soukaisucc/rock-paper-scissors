let playerScore = 0;
let computerScore = 0;

let computerOptions = ['rock', 'paper', 'scissors'];

function getComputerChoice() {

   let computerResult = computerOptions[Math.floor(Math.random() * 3)];

   return computerResult;

}

function playRound(playerSelection, computerSelection) {

   if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
      computerScore++;
      return 'Computer W';
   } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
      playerScore++;
      return 'Player W';
   } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
      playerScore++;
      return 'Player W';
   } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
      computerScore++;
      return 'Computer W';
   } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
      computerScore++;
      return 'Computer W';
   } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
      playerScore++;
      return 'Player W';
   } else {
      return 'Tied';
   }

}

function game () {

   for (let i = 0; i < 5; i++) {
      let playerSelection = prompt('Will you select Rock, Paper, or Scissors?');
      let computerSelection = getComputerChoice();
      console.log(playRound(playerSelection,computerSelection));
   }

   if (playerScore > computerScore) {
      console.log('Rare player victory. Score of ' + playerScore + ' to '  + computerScore);
   } else if (computerScore > playerScore) {
      console.log('Common player L. Score of ' + playerScore + ' to '  + computerScore); 
   } else {
      console.log('Tied the game!');
   }

}

game();