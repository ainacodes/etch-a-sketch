let primaryGridSize = 16;
let isMouseClicked = false;

const gridContainer = document.querySelector('.grid-container');
const gridSizeContainer = document.querySelector('.grid-size-container');
const btnReset = document.querySelector('.btn-reset');

function createGrid(gridSize) {
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');

    gridSquare.addEventListener('mousedown', () => {
      isMouseClicked = true;
    });

    gridSquare.addEventListener('mouseup', () => {
      isMouseClicked = false;
    });

    gridSquare.addEventListener('mouseover', (e) => {
      if (isMouseClicked) {
        gridSquare.style.backgroundColor = 'black';
      }
    });

    gridContainer.appendChild(gridSquare);
  }
  gridSizeContainer.textContent = `${gridSize} × ${gridSize}`;
}

function resetSize() {
  let newGridSize = prompt(
    'Please enter new grid size between 16 to 100.',
    '16'
  );
  while (newGridSize < 16 || newGridSize > 100) {
    newGridSize = prompt('Grid size should be between 16 to 100 only!');
  }

  while (gridContainer.hasChildNodes()) {
    gridContainer.removeChild(gridContainer.firstChild);
  }

  createGrid(newGridSize);
}

window.onload = () => {
  createGrid(primaryGridSize);
};
