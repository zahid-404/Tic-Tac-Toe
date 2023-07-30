// All Variables
const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");

let currentPlayer;
let gameGrid;

// Winning positions combinations
const winningPositions = [
  [0, 1, 2], // Horizontal top row
  [3, 4, 5], // Horizontal middle row
  [6, 7, 8], // Horizontal bottom row
  [0, 3, 6], // Vertical left column
  [1, 4, 7], // Vertical middle column
  [2, 5, 8], // Vertical right column
  [0, 4, 8], // Diagonal from top-left to bottom-right
  [2, 4, 6], // Diagonal from top-right to bottom-left
];

// intial status when page loads
initGame();

// function for intialising the new game
function initGame() {
  currentPlayer = "X";
  gameGrid = ["", "", "", "", "", "", "", "", ""];
  boxes.forEach((box, index) => {
    box.innerText = "";
    box.style.pointerEvents;
    box.classList = `box box${index + 1}`;
  });
  newGameBtn.classList.remove("active");
  gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

// make boxes clickable
boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    handleClick(index);
  });
});

// function for filling values in  boxes
function handleClick(index) {
  if (gameGrid[index] === "") {
    boxes[index].innerText = currentPlayer;
    gameGrid[index] = currentPlayer;
    boxes[index].style.pointerEvents = "none";

    // swapping player turn
    swapTurn();

    // checking if someone win or not
    checkGameOver();
  }
}

// function for swapping player
function swapTurn() {
  if (currentPlayer === "X") currentPlayer = "0";
  else currentPlayer = "X";

  gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

// function for checking game over or not
function checkGameOver() {
  newGameBtn.classList.add("active");
  let answer = "";

  winningPositions.forEach((position) => {
    // all 3 boxes should be non empty and exactly same in value
    if (
      (gameGrid[position[0]] !== "" ||
        gameGrid[position[1]] !== "" ||
        gameGrid[position[2]] !== "") &&
      gameGrid[position[0]] === gameGrid[position[1]] &&
      gameGrid[position[1]] === gameGrid[position[2]]
    ) {
      // check if winner is X
      if (gameGrid[position[0]] === "X") answer = "X";
      else answer = "0";

      // disable pointer events
      boxes.forEach((box) => {
        box.style.pointerEvents = "none";
      });

      // make green if X/0 is winner
      boxes[position[0]].classList.add("win");
      boxes[position[1]].classList.add("win");
      boxes[position[2]].classList.add("win");
    }
  });

  // if we have a winner
  if (answer !== "") {
    gameInfo.innerText = `Winner Player - ${answer}`;
    newGameBtn.classList.add("active");
    return;
  }

  // when there is no winner/tie
  let fillCount = 0;
  gameGrid.forEach((box) => {
    if (box !== "") fillCount++;
  });

  // board is filled, game is tie
  if (fillCount === 9) {
    gameInfo.innerText = "Game Tied!";
    newGameBtn.classList.add("active");
  }
}
// new game button
newGameBtn.addEventListener("click", initGame);
