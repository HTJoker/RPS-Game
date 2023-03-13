let computer = "";

function compChoice() {
  let rand = Math.floor(Math.random() * 3) + 1;

  switch (rand) {
    case 1:
      computer = "rock";
      break;
    case 2:
      computer = "paper";
      break;
    case 3:
      computer = "scissors";
      break;
  }
  return computer;
}

let hpoints = 0;
let cpoints = 0;

let rounds = Number(prompt("How many rounds\n"));

let i = 0;

while (i < rounds) {
  let comp = compChoice();
  let human = prompt("Choose\n");

  if (human === comp) {
    alert("It is a tie!");
  } else if (human === "paper" && comp === "rock") {
    alert("human wins");
    hpoints += 1;
  } else if (human === "rock" && comp === "scissors") {
    alert("human wins");
    hpoints += 1;
  } else if (human === "scissors" && comp === "paper") {
    alert("human wins");
    hpoints += 1;
  } else {
    alert("Robot wins");
    cpoints += 1;
  }
  i++;
}
alert(`human scored ${hpoints} and Computer scored ${cpoints}`);
