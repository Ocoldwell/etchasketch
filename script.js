class Grid {
  container = document.querySelector('#grid-container');
  columns;
  rows;
  gridSize;
  setGridSize =(columns, rows)=> {
    this.columns = 16 || columns;
    this.rows = 16 || rows;
    this.gridSize = this.columns *this.rows;
  }

  createGrid = () => {
    container.style.setProperty('--grid-rows', this.rows);
    container.style.setProperty('--grid-columns', this.columns);
    for (let i = 0; i < (this.gridSize); i++) {
      let cell = document.createElement('div');
      cell.setAttribute("class","cell");
      cell.setAttribute("id", `${i}`);
      cell.addEventListener('mouseover', setColor);
      this.container.appendChild(cell);
    }
  }

  clearGrid = () => {
    size = Number(prompt('How many rows would you like?</br>(The max is 100.)'))
    if (size <= 100) {
        let cells = document.querySelectorAll(".cell")
        cells.forEach(cube => cube.remove());
        this.createGrid(size)
    } else {
        alert("Grid size can't be larger than 100")
    }
  }
};