const container = document.querySelector('.container')
let displayGridSize = document.querySelector('span');

let blackDrawing = true;
let colorDrawing = false;

let gridSize = 16; 

function askSize() {
  let newSize = prompt('Enter the grid size (1-100):');

  if (newSize === null || newSize === '') {
    return; 
  }

  if (newSize >= 1 && newSize <= 100) {
    container.innerHTML = '';
    gridSize = newSize;
    createGrid(newSize);
    displayGridSize.textContent = `Current grid size is: ${newSize} x ${newSize}`;
  } 
  else {
    alert('Please enter a valid value (1-100).');
  }
}


function createGrid(gridSize) {
  for (let i = 0; i < (gridSize * gridSize); i++) {
    const cell = document.createElement('div');
    cell.style.flexBasis = 100 / gridSize + '%';
    container.appendChild(cell);
  }
} 


function getRandomColor() {
  return `hsl(${Math.random() * 360}, 100%, 80%)`
}

function toRandomColor() {
  colorDrawing = true;
  blackDrawing = false;
}

function toBlack() {
  colorDrawing = false;
  blackDrawing = true;
}


container.addEventListener('mouseover', (event) => {
  const hoveredElement = event.target;
  
  if (hoveredElement !== container) {
    hoveredElement.style.backgroundColor = colorDrawing ? getRandomColor() : 'black';
  }
});

function clearGrid() {
  container.innerHTML = '';
  createGrid(gridSize)
}

createGrid(gridSize) 











