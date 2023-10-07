const btnRock = document.querySelector(".js-rock-button");
const btnPaper = document.querySelector(".js-paper-button");
const btnScissors = document.querySelector(".js-scissors-button");
const yourMove = document.querySelector(".your-moves");
const computerMove = document.querySelector(".js-moves");
const resultMove = document.querySelector(".result");
const playerScore = document.querySelector(".player-score");
const compScore = document.querySelector(".computer-score");
const resetBtn = document.querySelector(".reset-score-button");
const options = ["Rock", "Paper", "Scissors"];

const randomNumber = () => {
  return Math.trunc(Math.random() * options.length);
};

let playerPoint = 0;

let compPoint = 0;

btnRock.addEventListener("click", () => {
  const userMove = "Rock";
  yourMove.textContent = userMove;
  const compMove = options[randomNumber()];
  computerMove.textContent = compMove;
  if (compMove === "Rock") {
    resultMove.textContent = "It a tie";
  } else if (compMove === "Paper") {
    resultMove.textContent = "You lose!!!";
    compPoint += 1;
    compScore.textContent = compPoint;
  } else if (compMove === "Scissors") {
    resultMove.textContent = "You win!!!";
    playerPoint += 1;
    playerScore.textContent = playerPoint;
  }
});

btnPaper.addEventListener("click", () => {
  yourMove.textContent = "Paper";
  const compMove = options[randomNumber()];
  computerMove.textContent = compMove;
  if (compMove === "Paper") {
    resultMove.textContent = "It a tie";
  } else if (compMove === "Rock") {
    resultMove.textContent = "You win!!!";
    playerPoint += 1;
    playerScore.textContent = playerPoint;
  } else if (compMove === "Scissors") {
    resultMove.textContent = "You lose!!!";
    compPoint += 1;
    compScore.textContent = compPoint;
  }
});

btnScissors.addEventListener("click", () => {
  yourMove.textContent = "Scissors";
  const compMove = options[randomNumber()];
  computerMove.textContent = compMove;
  if (compMove === "Paper") {
    resultMove.textContent = "You win!!!";
    playerPoint += 1;
    playerScore.textContent = playerPoint;
  } else if (compMove === "Rock") {
    resultMove.textContent = "You lose!!!";
    compPoint += 1;
    compScore.textContent = compPoint;
  } else if (compMove === "Scissors") {
    resultMove.textContent = "It a tie";
  }
});

resetBtn.addEventListener("click", () => {
  resultMove.textContent = "Not yet a win";
  playerScore.textContent = 0;
  compScore.textContent = 0;
  computerMove.textContent = "";
  yourMove.textContent = "";
});
