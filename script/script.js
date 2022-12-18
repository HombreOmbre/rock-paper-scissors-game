const getComputerChoice = () => {
  let randomComputerChoice = Math.round(Math.random() * (3 - 1)) + 1;

  if (randomComputerChoice === 1) {
    return "rock";
  } else if (randomComputerChoice === 2) {
    return "paper";
  } else return "scissors";
};

function playRound(playerSelection, computerSelection) {
  let correctUserInput = validationOfUserInput(playerSelection);

  switch (true) {
    case correctUserInput === computerSelection:
      return `It's a Draw!`;
      break;

    case correctUserInput === "rock" && computerSelection === "scissors":
      return `You win! Rock beats scissors`;
      break;

    case correctUserInput === "rock" && computerSelection === "paper":
      return `You lose! Paper beats Rock`;
      break;

    case correctUserInput === "paper" && computerSelection === "rock":
      return `You win! Paper beats Rock`;
      break;

    case correctUserInput === "paper" && computerSelection === "scissors":
      return `You lose! Scissors beats Paper`;
      break;

    case correctUserInput === "scissors" && computerSelection === "paper":
      return `You win! Scissors beats Paper`;
      break;

    case correctUserInput === "scissors" && computerSelection === "rock":
      return `You lose! Rock beats Scissors`;
      break;

    default:
      return correctUserInput;
  }
}

function getPlayerChoice() {
  let playerChoice = prompt("Select and type one of: Rock, Paper, Scissors");
  return playerChoice;
}

function validationOfUserInput(playerSelection) {
  let lowerCasePlayerInput = playerSelection.toLowerCase();

  if (
    lowerCasePlayerInput === "rock" ||
    lowerCasePlayerInput === "paper" ||
    lowerCasePlayerInput === "scissors"
  ) {
    return lowerCasePlayerInput;
  } else return `Wrong choice!`;
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
