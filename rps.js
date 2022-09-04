let computerOptions = ['rock', 'paper', 'scissors'];

function getComputerChoice() {

   let computerResult = computerOptions[Math.floor(Math.random() * 3)];

   return computerResult;

}

function playRound(playerSelection, computerSelection) {

   computerSelection = getComputerChoice();
   playerSelection = prompt("Will you select Rock, Paper, or Scissors?");

   if (playerSelection.toLowerCase() == computerSelection) {
      return "Tie";
   } else if (
      (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors")  || 
      (playerSelection.toLowerCase() == "paper" && computerSelection == "rock")  || 
      (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper")
   ) {
      return "Rare player W";
      ++playerScore;
   } else {
      return "Common player L, plus one to the computer";
      ++computeScore;
   }

}

function game () {

   for (let i = 0; i < 5; i++) {
      console.log (playRound());
   }

   if (playerScore > computeScore) {
      return "Rare player victory";
   } else {
      return "Common computer victory";
   }

   let playerScore = 0;
   let computeScore = 0;

}