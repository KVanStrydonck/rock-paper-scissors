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
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock") {
      if (computerChoice === "Rock") {
        console.log("You both chose rock, it's a draw!");
      }

      if (computerChoice === "Paper") {
        console.log("You lose, paper beats rock!");
        computerScore++;
      }

      if (computerChoice === "Scissors") {
        console.log("You win, rock beats scissors!");
        humanScore++;
      }
    }

    if (humanChoice === "Paper") {
      if (computerChoice === "Rock") {
        console.log("You win, paper beats rock!");
        humanScore++;
      }

      if (computerChoice === "Paper") {
        console.log("You both chose paper, it's a draw!");
      }

      if (computerChoice === "Scissors") {
        console.log("You lose, scissors beat paper!");
        computerScore++;
      }
    }

    if (humanChoice === "Scissors") {
      if (computerChoice === "Rock") {
        console.log("You lose, rock beats scissors!");
        computerScore++;
      }

      if (computerChoice === "Paper") {
        console.log("You win, scissors beat paper!");
        humanScore++;
      }

      if (computerChoice === "Scissors") {
        console.log("You both chose scissors, it's a draw!");
      }
    }
  }

  for (let round = 1; round < 6; round++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  console.log("\n");
  console.log("Computer score: " + computerScore);
  console.log("Human score: " + humanScore);

  if (humanScore > computerScore) {
    console.log("You won!");
  }

  if (computerScore > humanScore) {
    console.log("Computer won!");
  }

  if (computerScore === humanScore) {
    console.log("It's a draw!");
  }
}

playGame();
