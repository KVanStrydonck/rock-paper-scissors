let humanScore = 0;
let computerScore = 0;

let roundResult = "";

const roundResultDiv = document.querySelector("#Round-Result");
const runningScoreDiv = document.querySelector("#Running-Score");
const winnerDiv = document.querySelector("#Winner");

function getComputerChoice() {
  let n = Math.round(Math.random() * 3);

  if (n < 1) {
    return "Rock";
  } else if (n < 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  return prompt("Rock, Paper or Scissors?");
}

function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock") {
      if (computerChoice === "Rock") {
        roundResult = "You both chose rock, it's a draw!";
      }

      if (computerChoice === "Paper") {
        roundResult = "You lose, paper beats rock!";
        computerScore++;
      }

      if (computerChoice === "Scissors") {
        roundResult = "You win, rock beats scissors!";
        humanScore++;
      }
    }

    if (humanChoice === "Paper") {
      if (computerChoice === "Rock") {
        roundResult = "You win, paper beats rock!";
        humanScore++;
      }

      if (computerChoice === "Paper") {
        roundResult = "You both chose paper, it's a draw!";
      }

      if (computerChoice === "Scissors") {
        roundResult = "You lose, scissors beat paper!";
        computerScore++;
      }
    }

    if (humanChoice === "Scissors") {
      if (computerChoice === "Rock") {
        roundResult = "You lose, rock beats scissors!";
        computerScore++;
      }

      if (computerChoice === "Paper") {
        roundResult = "You win, scissors beat paper!";
        humanScore++;
      }

      if (computerChoice === "Scissors") {
        roundResult = "You both chose scissors, it's a draw!";
      }
    }

    roundResultDiv.textContent = roundResult;

    runningScoreDiv.innerHTML = "Human score: " + humanScore + "<br>Computer score: " + computerScore;

    if (humanScore > 4) {
      winnerDiv.textContent = "Human won!";
    }

    if (computerScore > 4) {
      winnerDiv.textContent = "Computer won!";
    }
  }

  const rockBtn = document.querySelector("#Rock");
  const paperBtn = document.querySelector("#Paper");
  const scissorsBtn = document.querySelector("#Scissors");

  rockBtn.addEventListener("click", () => {
    playRound("Rock", getComputerChoice());
  });

  paperBtn.addEventListener("click", () => {
    playRound("Paper", getComputerChoice());
  });

  scissorsBtn.addEventListener("click", () => {
    playRound("Scissors", getComputerChoice());
  });

  const resetBtn = document.querySelector("#Reset");

  resetBtn.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;

    roundResult = "";

    roundResultDiv.textContent = "";
    runningScoreDiv.innerHTML = "";
    winnerDiv.textContent = "";
  });
}

playGame();
