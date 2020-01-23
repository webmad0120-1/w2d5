const canvasDOMEl = document.querySelector("#game");

// let's store all browser dimensions in these variables
// so we can draw items in their right place
let w, h, w2, h2;

// this function sets the proper canvas dimensions
// setting the dimensions to the max viewport's browser dimensions
const setCanvasDimensions = () => {
  w = window.innerWidth;
  h = window.innerHeight;
  w2 = w / 2;
  h2 = h / 2;
  canvasDOMEl.style.width = `${w}px`;
  canvasDOMEl.style.height = `${h}px`;
};

// this event handler will re-set the canvas dimensions
// as the browser stretches or shrinks
window.onresize = setCanvasDimensions;

// here we set the right dimensions for the canvas
// as we load the app for the first time
setCanvasDimensions();
