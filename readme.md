# Etch-A-Sketch

I wanted to practice my Vanilla Javascript and DOM manipulation skills so I decided to do this project from The Odin Project.
I was a little rusty and it was good to practice DOM manipulation. I had originally decided on trying a class based approach
but on reflection found the functional approach to be cleaner.

The main functionality that I implemented lies in how my grid was generated:

```Javascript
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
```

The size parameter is set at 16 as requested in the challenge by default due to the 'or' operator and if the size parameter is passed in, this allows for the grid to generate a new size. This only allows for square grids and if I wanted to extend this I could add additional parameters for individual rows and columns. The setting of the property using css-variables allows my grid-layout to generate the correct amount of rows and columns by using:

```CSS
  grid-template-rows: repeat(var(--grid-rows), 1fr);
  grid-template-columns: repeat(var(--grid-cols), 1fr);
```

More to come on color generation.
