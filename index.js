// Declare constants for the grid container and buttons
const gridContainer = document.querySelector("#gridcontainer");
const regenButton = document.querySelector("#regenbutton");
const rainbowButton = document.querySelector("#rainbowbutton");

// Declare variables for cell color and rainbow mode
let cellColor = "black";
let rainbowMode = false;

function makeGrid(rows, collumns) {
  const cellSize = gridContainer.clientWidth / collumns; // Calculate cell size based on grid container width
  for (let i = 0; i < rows * collumns; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    cell.addEventListener("mouseover", () => {
      // Change cell color on mouseover
      if (rainbowMode) {
        cell.style.backgroundColor =
          "hsl(" + Math.random() * 360 + ", 100%, 50%)";
      } else {
        cell.style.backgroundColor = cellColor;
      }
    });
    gridContainer.appendChild(cell); // Append cell to grid container
  }
}

regenButton.addEventListener("click", () => {
  let cellNewSize = parseInt(window.prompt("Enter the new grid size:"));

  // Check if input is valid
  if (isNaN(cellNewSize) || cellNewSize < 1 || cellNewSize > 100) {
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

makeGrid(16, 16);
