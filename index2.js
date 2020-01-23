// Dani Vicario - index2 experiment (canvas)- Thu Jan 23 10:40:59 CET 2020

/** @type HTMLCanvasElement */
const canvasDOMEl = document.getElementById("canvas");

/** @type CanvasRenderingContext2D */
const ctx = canvasDOMEl.getContext("2d");

const w = window.innerWidth;
const h = window.innerHeight;
// eslint-disable-next-line no-unused-vars
const w2 = w / 2;
// eslint-disable-next-line no-unused-vars
const h2 = h / 2;

// eslint-disable-next-line no-unused-vars
const { PI } = Math;
// eslint-disable-next-line no-unused-vars
const PI_DOUBLE = 2 * Math.PI;
// eslint-disable-next-line no-unused-vars
const PI_HALF = Math.PI / 2;

canvasDOMEl.setAttribute("height", window.innerHeight);
canvasDOMEl.setAttribute("width", window.innerWidth);

ctx.save();

let scenario, mario, pipe;

let marioObj = {
  x: 200,
  moveRight: function() {
    this.x += 20;

    obstacles.forEach(obstacleX => {
      if (this.x > obstacleX - 100) this.x = obstacleX - 100;
    });
  },
  moveLeft: function() {
    this.x -= 20;
  }
};

let obstacles = [700];

function drawGame() {
  ctx.clearRect(0, 0, w, h);

  ctx.drawImage(scenario, 0, 0);
  obstacles.forEach(obstacleX => {
    ctx.drawImage(pipe, obstacleX, h2 + 70, 200, 200);
  });

  ctx.drawImage(mario, marioObj.x, h2 + 165, 100, 100);

  ctx.font = "48px serif";
  ctx.fillText(marioObj.x, 50, 50);
}

window.onkeydown = function(e) {
  if (e.keyCode === 39) {
    marioObj.moveRight();
  }

  if (e.keyCode === 37) {
    marioObj.moveLeft();
  }

  drawGame();
};

scenario = new Image();
scenario.src = "scenario.jpg";

scenario.onload = function() {
  mario = new Image();
  mario.src = "pngguru.com.png";

  mario.onload = function() {
    pipe = new Image();
    pipe.src = "pipe.png";
    pipe.onload = function() {
      drawGame();
    };
  };
};
