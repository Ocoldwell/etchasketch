export class Grid {
  constructor(size) {
    this.size = 16 || size;
    this.gridSize= this.size * this.size;
    this.container = document.querySelector("#grid-container");
  }
  
  createGrid = () => {
    let gridWidth = this.container.style.offsetWidth / this.size;
    console.log(gridWidth);
    // this.container.style.gridTemplateRows()
    // this.container.style.setProperty()
    for (let i = 1; i < this.gridSize; i++) {
      let cell = document.createElement("div");
      cell.setAttribute("class", "cell");
      cell.setAttribute("id", `${i}`);
      // cell.addEventListener('mouseover', setColor);
      this.container.appendChild(cell);
    }
  };

  clearGrid = () => {
    size = Number(
      prompt("How many rows would you like?</br>(The max is 100.)")
    );
    if (size <= 100) {
      let cells = document.querySelectorAll(".cell");
      cells.forEach((cell) => cell.remove());
      this.createGrid(size);
    } else {
      alert("Grid size can't be larger than 100");
    }
  };
}
