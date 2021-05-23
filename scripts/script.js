const container = document.getElementById('grid-container');
const resetButton = document.getElementById('reset-button');
const sizeButton = document.getElementById('size-button');
const eraserBtn = document.getElementById('eraser');
const grayBtn = document.getElementById('pen');
const randomBtn = document.getElementById('random');
const colorBtn = document.getElementById('color');

let color = "rgba(0,0,0,1)";
const buttonState= {
  isDefault: true,
  isErase: false,
  isPenMode: false,
  isRainbow: false,
  isColorPicker: false
}


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

const sizeOfGrid = () => {
  let size = Number(prompt("Enter size here (no greater than 100): "));
  createGrid(size);
}
const resetGrid = () => {
    let cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => cell.remove());
    createGrid();
};

const changeColor = (e) => {
  if (e.target.classList == 'cell') {
    defaultEtch(e);
  }
}

const defaultEtch = (e) => {
  return e.target.style.backgroundColor = color;
}

resetButton.addEventListener('click', resetGrid)
sizeButton.addEventListener('click', sizeOfGrid)
createGrid();
