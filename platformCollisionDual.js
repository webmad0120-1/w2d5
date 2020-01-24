/** @type HTMLCanvasElement */
const canvasDOMEl = document.getElementById("game");

/** @type CanvasRenderingContext2D */
const ctx = canvasDOMEl.getContext("2d");

const randomFloat = (min, max) => Math.random() * (max - min) + min;
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const shuffle = array => array.sort(() => Math.random() - 0.5);

// let's store all browser dimensions in these variables
// so we can draw items in their right place
let w, h, w2, h2, posX;
let ball;
let platforms = [];
const PI = Math.PI;
const PI_DOUBLE = PI * 2;

let Game = {
  version: "1.0",
  init: function() {
    console.log(`Game version ${this.version} initialised`);

    // this event handler will re-set the canvas dimensions
    // as the browser stretches or shrinks
    window.onresize = this.setCanvasDimensions;

    // here we set the right dimensions for the canvas
    // as we load the app for the first time
    this.setCanvasDimensions();

    this._initEventListeners();

    ball = new Ball(w2, h2, 50);
    ball.setSpeed(1);
    platforms.push(new Platform(w2 - 600, h2 - 200, 40, 350));
    platforms.push(new Platform(w2 + 600, h2 - 200, 40, 350));
  },
  _initEventListeners: function() {
    document.getElementById("accelerate").onclick = function() {
      ball.setAccelerationRate(0.01 * 7);
    };

    document.getElementById("nitro").onclick = function() {
      ball.activateNitro();
    };
  },
  draw: function() {
    // game engine
    setInterval(() => {
      Scenario.clear();

      ball.moveRight();

      platforms.forEach(platform => {
        platform.show();
      });

      // left wall
      if (ball.x <= platforms[0].x + ball.size + platforms[1].w / 2) {
        ball.changeSense();
        ball.x = platforms[0].x + ball.size + platforms[1].w / 2;
      }

      // right wall
      if (ball.x >= platforms[1].x - ball.size - platforms[1].w / 2) {
        ball.changeSense();
        ball.x = platforms[1].x - ball.size - platforms[1].w / 2;
      }
    }, 10);
  },
  // this function sets the proper canvas dimensions
  // setting the dimensions to the max viewport's browser dimensions
  setCanvasDimensions: function() {
    w = window.innerWidth;
    h = window.innerHeight;
    w2 = w / 2;
    h2 = h / 2;

    canvasDOMEl.setAttribute("width", `${w}px`);
    canvasDOMEl.setAttribute("height", `${h}px`);

    this.draw();
  }
};

Game.init();
