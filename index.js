const gridContainer = document.querySelector('#gridcontainer');

function makeGrid(rows, collumns) {
  const cellSize = gridContainer.clientWidth / collumns;
  console.log('Cellsize: ' + cellSize);
  for (let i = 0; i < rows * collumns; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    cell.addEventListener('mouseover', () => {
      cell.style.backgroundColor = 'black';
    });
    gridContainer.appendChild(cell);
    console.log('Created div');
  }
}

makeGrid(16, 16);