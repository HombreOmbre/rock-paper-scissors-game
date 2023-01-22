const getComputerChoice = () => {
  let randomComputerChoice = Math.round(Math.random() * (3 - 1)) + 1;
  switch (randomComputerChoice) {
    case 1:
      return "rock";
      break;

    case 2:
      return "paper";
      break;

    case 3:
      return "scissors";
      break;
  }
};

function playRound(playerSelection, computerSelection) {
  switch (true) {
    case playerSelection === computerSelection:
      return 0; // It's a draw
      break;

    case playerSelection === "rock" && computerSelection === "scissors":
      return 1; // Player win
      break;

    case playerSelection === "rock" && computerSelection === "paper":
      return 2; // Computer win
      break;

    case playerSelection === "paper" && computerSelection === "rock":
      return 1;
      break;

    case playerSelection === "paper" && computerSelection === "scissors":
      return 2;
      break;

    case playerSelection === "scissors" && computerSelection === "paper":
      return 1;
      break;

    case playerSelection === "scissors" && computerSelection === "rock":
      return 2;
      break;
  }
}

function game(e) {
  finalResult.textContent = "";
  let playerChoice = this.dataset.choice;
  let computerChoice = getComputerChoice();
  let oneGame = playRound(playerChoice, computerChoice);

  switch (oneGame) {
    case 0:
      resultOfOneGame.textContent = `It's a draw!`;
      gameScore.textContent = `${playerCounter} : ${computerCounter}`;
      break;

    case 1:
      resultOfOneGame.textContent = `You win this round!`;
      playerCounter++;
      gameScore.textContent = `${playerCounter} : ${computerCounter}`;
      break;

    case 2:
      resultOfOneGame.textContent = `Computer win this round!`;
      computerCounter++;
      gameScore.textContent = `${playerCounter} : ${computerCounter}`;
      break;
  }

  if (playerCounter === 5) {
    finalResult.textContent = `You win the whole game!`;
    playerCounter = 0;
    computerCounter = 0;
    gameScore.textContent = "";
    resultOfOneGame.textContent = "";
  } else if (computerCounter === 5) {
    finalResult.textContent = `Computer win the whole game!`;
    playerCounter = 0;
    computerCounter = 0;
    gameScore.textContent = "";
    resultOfOneGame.textContent = "";
  }
}

const buttons = document.querySelectorAll(".btn");
const resultOfOneGame = document.querySelector(".result_game");
const gameScore = document.querySelector(".score");
const finalResult = document.querySelector(".final_result");
let playerCounter = 0;
let computerCounter = 0;

buttons.forEach((button) => button.addEventListener("click", game));
