const gridContainer = document.querySelector("#gridcontainer");
const regenButton = document.querySelector("#regenbutton");
const rainbowButton = document.querySelector("#rainbowbutton");

let cellColor = "black";
let rainbowMode = false;

function makeGrid(rows, collumns) {
  const cellSize = gridContainer.clientWidth / collumns;
  console.log("Cellsize: " + cellSize);
  for (let i = 0; i < rows * collumns; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    cell.addEventListener("mouseover", () => {
      if (rainbowMode) {
      cell.style.backgroundColor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
      } else {
      cell.style.backgroundColor = cellColor;
      }
    });
    gridContainer.appendChild(cell);
    console.log("Created div");
  }
}

regenButton.addEventListener("click", () => {
  console.log("Regenerating grid");
  let cellNewSize = parseInt(window.prompt("Enter the new grid size:"));

  // Check if input is valid
  if (isNaN(cellNewSize) || cellNewSize < 1 || cellNewSize > 512) {
    alert("Invalid input. Please enter a number between 1 and 100");
    return;
  }

  // Clear grid
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }

  makeGrid(cellNewSize, cellNewSize);
});

rainbowButton.addEventListener("click", () => {
  if (rainbowMode) {
    rainbowMode = false;
    return;
  } else {
    rainbowMode = true;
    return;
  }
});

makeGrid(16, 16)