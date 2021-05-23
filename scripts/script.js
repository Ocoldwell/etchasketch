const container = document.getElementById("grid-container");
const buttonContainer = document.getElementById("button-container");

let ink = "black";
const createGrid = (size) => {
  size = size || 16;
  const gridSize = size * size;
  container.style.setProperty("--grid-rows", size);
  container.style.setProperty("--grid-cols", size);
  for (let i = 0; i < gridSize; i++) {
    let cell = document.createElement("div");
    cell.setAttribute("class", "cell");
    cell.setAttribute("id", `${i}`);
    cell.addEventListener("mouseover", cellColor);
    container.appendChild(cell);
  }
};

const sizeOfGrid = () => {
  let size = Number(prompt("Enter size here (no greater than 100): "));
  createGrid(size);
};
const resetGrid = () => {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => cell.remove());
  createGrid();
};

const cellColor = (e) => {
  e.target.style.backgroundColor = ink;
 }

const randomRGB = () => {
    return Math.floor(Math.random() * 256);
  };

const rainbowGenerator = () => {
  return `rgba(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
};

const defaultEtch = (e) => {
  e.target.style.backgroundColor = "black"
};

const eraseEtch = () => {
  return container.style.backgroundColor;
};

//Click Handler using inheritance.
const handleClick = (e) => {
  switch (e.target.value) {
    case "reset":
      resetGrid();
      break;
    case "resize":
      sizeOfGrid();
      break;
    case "erase":
      ink = eraseEtch()
      break;
    case "pen":
    
      break;
    case "rainbow":
      
      break;
    case "color":
     
      break;
    case "default":
      break;
  }
};
buttonContainer.addEventListener("click", handleClick);
// resetButton.addEventListener('click', resetGrid)
// sizeButton.addEventListener('click', sizeOfGrid)
// eraserButton.addEventListener('click', eraseColor)
createGrid();
