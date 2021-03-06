/** @type HTMLCanvasElement */
const canvasDOMEl = document.getElementById("game");

/** @type CanvasRenderingContext2D */
const ctx = canvasDOMEl.getContext("2d");

// let's store all browser dimensions in these variables
// so we can draw items in their right place
let w, h, w2, h2, posX;
const PI = Math.PI;
const PI_DOUBLE = PI * 2;
let Ball = {
  posX: 0,
  moveRight: function() {
    this.posX++;

    ctx.beginPath();
    ctx.arc(this.posX, h2, 50, 0, PI_DOUBLE);
    ctx.fill();
    ctx.closePath();
  }
};

let Scenario = {
  clear: function() {
    ctx.clearRect(0, 0, w, h);
  }
};

function draw() {
  setInterval(() => {
    Scenario.clear();
    Ball.moveRight();
  }, 10);
}

// this function sets the proper canvas dimensions
// setting the dimensions to the max viewport's browser dimensions
const setCanvasDimensions = () => {
  w = window.innerWidth;
  h = window.innerHeight;
  w2 = w / 2;
  h2 = h / 2;
  posX = w2;
  canvasDOMEl.setAttribute("width", `${w}px`);
  canvasDOMEl.setAttribute("height", `${h}px`);

  draw();
};

const randomFloat = (min, max) => Math.random() * (max - min) + min;
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const shuffle = array => array.sort(() => Math.random() - 0.5);

// this event handler will re-set the canvas dimensions
// as the browser stretches or shrinks
window.onresize = setCanvasDimensions;

// here we set the right dimensions for the canvas
// as we load the app for the first time
setCanvasDimensions();
