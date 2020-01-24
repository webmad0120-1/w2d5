/** @type HTMLCanvasElement */
const canvasDOMEl = document.getElementById("game");

/** @type CanvasRenderingContext2D */
const ctx = canvasDOMEl.getContext("2d");

// let's store all browser dimensions in these variables
// so we can draw items in their right place
let w, h, w2, h2, posX;
let balls;
const PI = Math.PI;
const PI_DOUBLE = PI * 2;

class Ball {
  constructor(posX, posY, size, isSpecial) {
    this.posX = posX;
    this.posY = posY;
    this.size = size;
    this.speed = randomFloat(1, 5); // --> 3.16
    this.isMoving = false;
    this.isSpecial = isSpecial;

    if (this.isSpecial)
      this.specialColor = `rgba(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(
        0,
        255
      )}, 1)`;
  }

  _paint() {
    ctx.beginPath();
    if (this.isSpecial) {
      ctx.fillStyle = this.specialColor;
    } else {
      if (this.isMoving) {
        ctx.fillStyle = `rgba(0, 255, 0, 1)`;
      } else {
        ctx.fillStyle = `rgba(255, 0, 0, .3)`;
      }
    }

    ctx.arc(this.posX, this.posY, this.size, 0, PI_DOUBLE);
    ctx.fill();
    ctx.closePath();
  }

  show() {
    this._paint();
    this.isMoving = false;
  }

  moveRight() {
    this.posX += this.speed;

    this._paint();
    this.isMoving = true;
  }
}

// let b1 = new Ball(100, 200, 90);
// let b2 = new Ball(300, 500, 10);

let Scenario = {
  clear: function() {
    ctx.clearRect(0, 0, w, h);
  }
};

function draw() {
  // game engine
  setInterval(() => {
    Scenario.clear();
    balls.forEach((ball, idx) => (idx % 2 ? ball.show() : ball.moveRight()));
  }, 10);
}

// this function sets the proper canvas dimensions
// setting the dimensions to the max viewport's browser dimensions
const setCanvasDimensions = () => {
  w = window.innerWidth;
  h = window.innerHeight;
  w2 = w / 2;
  h2 = h / 2;

  balls = Array(100)
    .fill()
    .map(() => new Ball(randomInt(0, w2), randomInt(0, h), randomInt(10, 100)));

  balls.push(new Ball(randomInt(0, w2), randomInt(0, h), randomInt(10, 100), true));

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
