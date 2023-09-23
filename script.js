let primaryGridSize = 16;
let color = 'black';

const colorPicker = document.querySelector('#colorpicker');
const btnRainbow = document.querySelector('.btn-rainbow');
const btnEraser = document.querySelector('.btn-eraser');
const btnClear = document.querySelector('.btn-clear');
const btnReset = document.querySelector('.btn-reset');

colorPicker.oninput = (e) => changeColor(e.target.value);
btnRainbow.onclick = () => changeColor('rainbow');
btnEraser.onclick = () => changeColor('white');
btnClear.onclick = () => clearGrid();
btnReset.onclick = () => resetSize(newGridSize);

let isMouseClicked = false;
document.body.onmousedown = () => (isMouseClicked = true);
document.body.onmouseup = () => (isMouseClicked = false);

function createGrid(gridSize) {
  const gridContainer = document.querySelector('.grid-container');
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    gridSquare.addEventListener('mouseover', squareColor);
    gridSquare.addEventListener('mousedown', squareColor);
    gridContainer.appendChild(gridSquare);
  }
  const gridSizeContainer = document.querySelector('.grid-size-container');
  gridSizeContainer.textContent = `${gridSize} × ${gridSize}`;
}

function resetSize(newGridSize) {
  while (newGridSize < 16 || newGridSize > 100) {
    newGridSize = prompt('Grid size should be between 16 to 100 only', '16');
  }
  clearGrid();
  createGrid(newGridSize);
}

function squareColor(e) {
  if (e.type === 'mouseover' && !isMouseClicked) return;
  if (color === 'rainbow') {
    let hslColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    e.target.style.backgroundColor = hslColor;
  } else {
    e.target.style.backgroundColor = color;
  }
}

function changeColor(choice) {
  color = choice;
}

function clearGrid() {
  let allSquares = document.querySelectorAll('.grid-square');
  allSquares.forEach((gridSquare) => {
    gridSquare.style.backgroundColor = 'white';
  });
}

window.onload = () => {
  createGrid(primaryGridSize);
};
