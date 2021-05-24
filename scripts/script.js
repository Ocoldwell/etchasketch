const container = document.getElementById("grid-container");
const buttonContainer = document.getElementById("button-container");

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

const toRGBA = (red, green, blue, alpha = 1.0) => {
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};

const randomRGB = () => {
  return Math.floor(Math.random() * 256);
};

const rainbowEtch = (e) => {
  e.target.style.backgroundColor = toRGBA(
    randomRGB(),
    randomRGB(),
    randomRGB()
  );
};

const defaultEtch = (e) => {
  e.target.style.backgroundColor = "black";
};

const eraseEtch = (e) => {
  e.target.style.backgroundColor = container.style.backgroundColor;
};

const drawColor = (e) => {
  if (buttonState.default) {
    defaultEtch(e);
  } else if (buttonState.rainbow) {
    rainbowEtch(e);
  } else if (buttonState.pen) {
    penEtch(e);
  } else if (buttonState.erase) {
    eraseEtch(e);
  }
};

const buttonState = {
  rainbow: false,
  default: true,
  pen: false,
  erase: false,
};

const buttonStateHandle = (e) => {
  for (const [key] of Object.entries(buttonState)) {
    if (key != e.target.value) {
      buttonState[key] = false;
    } else {
      buttonState[key] = true;
    }
  }
};

const handleClick = (e) => {
  switch (e.target.value) {
    case "reset":
      resetGrid();
      break;
    case "resize":
      sizeOfGrid();
      break;
    case "erase":
      buttonStateHandle(e);
      break;
    case "pen":
      buttonStateHandle(e);
      break;
    case "rainbow":
      buttonStateHandle(e);
      break;
    case "default":
      buttonStateHandle(e);
      break;
  }
};

buttonContainer.addEventListener("click", handleClick);
createGrid();