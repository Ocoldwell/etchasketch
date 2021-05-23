const container = document.getElementById("grid-container");
const buttonContainer = document.getElementById("button-container");

const toRGBA=(red, green, blue, alpha = 1.0)=> {
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`
}
let ink = toRGBA(0, 0, 0);

const randomRGB = () => {
    return Math.floor(Math.random() * 256);
  };

const rainbowGenerator = (e) => {
  e.target.style.backgroundColor = toRGBA(randomRGB(),randomRGB(), randomRGB());
};

const createGrid = (size) => {
  size = size || 16;
  const gridSize = size * size;
  container.style.setProperty("--grid-rows", size);
  container.style.setProperty("--grid-cols", size);
  for (let i = 0; i < gridSize; i++) {
    let cell = document.createElement("div");
    cell.setAttribute("class", "cell");
    cell.setAttribute("id", `${i}`);
    cell.addEventListener("mouseover", drawColor);
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

const drawColor = (e) => {
  rainbowGenerator(e);
 }


const defaultEtch = () => {
  ink = "black"
};

const eraseEtch = () => {
  ink = container.style.backgroundColor;
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
      eraseEtch()
      break;
    case "pen":
    
      break;
    case "rainbow":
      rainbowGenerator()
      break;
    case "color":
     
      break;
    case "default":
      defaultEtch()
      break;
  }
};
buttonContainer.addEventListener("click", handleClick);
// resetButton.addEventListener('click', resetGrid)
// sizeButton.addEventListener('click', sizeOfGrid)
// eraserButton.addEventListener('click', eraseColor)
createGrid();
