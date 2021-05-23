const container = document.getElementById('grid-container');
const resetButton = document.getElementById('reset-button');

const createGrid = (size) => {
  size = size || 16;
  const gridSize = size * size;
  container.style.setProperty('--grid-rows', size);
  container.style.setProperty('--grid-cols', size);
  for (let i = 0; i < gridSize; i++) {
    let cell = document.createElement("div");
    cell.setAttribute("class", "cell");
    cell.setAttribute("id", `${i}`);
    cell.addEventListener('mouseover', changeColor);
    container.appendChild(cell);
  }
};

const clearGrid = () => {
  let size = Number(prompt("What size grid would you like?(The max is 100 x 100)"));
  if (size <= 100) {
    let cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => cell.remove());
    createGrid(size);
  } else {
    alert("Grid size can't be larger than 100");
  }
};

const changeColor = (e) => {
  if (e.target.classList == 'cell') {
    e.target.style.backgroundColor = 'black';
  }
}

const defaultEtch = () => {
  e.target.style.backgroundColor = 'black'
}

resetButton.addEventListener('click', clearGrid)
createGrid();
