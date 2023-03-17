const playerText = document.querySelector("#playerChoice");
const computerText = document.querySelector("#computerChoice");
const resultText = document.querySelector("#resultText");
const optionBtns = document.querySelectorAll(".optionBtn");
let player;
let computer;
let result;

optionBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    compChoice();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
  })
);

function compChoice() {
  const rand = Math.floor(Math.random() * 3) + 1;
  switch (rand) {
    case 1:
      computer = "Rock";
      break;
    case 2:
      computer = "Paper";
      break;
    case 3:
      computer = "Scissors";
      break;
  }
}

function checkWinner() {
  if (player == computer) {
    return "Draw!";
  } else if (computer == "Rock") {
    return player == "Scissors" ? "You Win!" : "You Loose!";
  } else if (computer == "Scissors") {
    return player == "Rock" ? "You Win!" : "You Loose!";
  } else if (computer == "Paper") {
    return player == "Scissors" ? "You Win!" : "You Loose!";
  }
}
