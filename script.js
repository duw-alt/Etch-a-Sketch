const container = document.querySelector('.container')
const para = container.querySelector('p')
let displayGridSize = document.querySelector('span');

let blackDrawing = true;
let colorDrawing = false;



function askSize() {
  container.innerHTML = '';
  let getGridSize = prompt('Enter the grid size (1-100):')
  let gridSize = 16;
  
  
  if (getGridSize <= 100 && getGridSize > 0) {
    gridSize = getGridSize;
    createGrid(gridSize)
    displayGridSize.textContent = `Current grid size is ${gridSize} x ${gridSize}`
    para.appendChild(displayGridSize)
  } 
  else {
    alert('Please enter a valid value.')
    return askSize()
  }

  if(getGridSize === null || getGridSize === ""){
    createGrid(gridSize)
    return null
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

createGrid(16) 











