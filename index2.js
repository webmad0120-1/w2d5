// Dani Vicario - index2 experiment (canvas)- Thu Jan 23 10:40:59 CET 2020

// eslint-disable-next-line no-unused-vars
const globalCompositeOperationModes = {
  "normal": "source-over",
  "source-in": "source-in",
  "source-out": "source-out",
  "source-atop": "source-atop",
  "destination-over": "destination-over",
  "destination-in": "destination-in",
  "destination-out": "destination-out",
  "destination-atop": "destination-atop",
  "lighter": "lighter",
  "copy": "copy",
  "xor": "xor",
  "multiply": "multiply",
  "screen": "screen",
  "overlay": "overlay",
  "darken": "darken",
  "lighten": "lighten",
  "color-dodge": "color-dodge",
  "color-burn": "color-burn",
  "hard-light": "hard-light",
  "soft-light": "soft-light",
  "difference": "difference",
  "exclusion": "exclusion",
  "hue": "hue",
  "saturation": "saturation",
  "color": "color",
  "luminosity": "luminosity"
};

// eslint-disable-next-line func-names
CanvasRenderingContext2D.prototype.rotateImageFromCenter = function(
  imageCanvas,
  angleInDegrees,
  placeImageInX,
  placeImageInY,
  width,
  height
) {
  this.save();

  if (width === undefined && height === undefined) {
    this.translate(placeImageInX, placeImageInY);
    this.rotate((angleInDegrees * Math.PI) / 180);
    this.drawImage(imageCanvas, -imageCanvas.width / 2, -imageCanvas.height / 2);
  } else {
    this.translate(placeImageInX, placeImageInY);
    this.rotate((angleInDegrees * Math.PI) / 180);
    this.drawImage(imageCanvas, -width / 2, -height / 2, width, height);
  }

  this.restore();
};

// eslint-disable-next-line no-unused-vars
Math.randomFloat = (min, max) => Math.random() * (max - min) + min;
// eslint-disable-next-line no-unused-vars
Math.randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// eslint-disable-next-line no-unused-vars
Math.shuffle = (array, _) => array.sort(() => Math.random() - 0.5);

// eslint-disable-next-line no-unused-vars
function getGlobalCompositeOperationMode() {
  const keys = Object.keys(globalCompositeOperationModes);
  let mode = 0;
  let consoleDone = false;

  // eslint-disable-next-line arrow-parens
  window.onkeydown = e => {
    if (e.keyCode === 39) {
      mode++;
      consoleDone = false;

      if (mode === keys.length) mode = 0;
    }

    if (e.keyCode === 37) {
      mode--;
      consoleDone = false;

      if (mode < 0) mode = keys.length - 1;
    }
  };

  // eslint-disable-next-line no-func-assign
  getGlobalCompositeOperationMode = () => {
    const modeFinal = globalCompositeOperationModes[keys[mode]];

    if (!consoleDone) {
      // eslint-disable-next-line no-console
      console.log("exposure mode to", modeFinal);

      consoleDone = true;
    }

    return modeFinal;
  };

  return getGlobalCompositeOperationMode;
}

// eslint-disable-next-line func-names
CanvasRenderingContext2D.prototype.rotateImageFromCenter = function(
  imageCanvas,
  angleInDegrees,
  placeImageInX,
  placeImageInY,
  width,
  height
) {
  this.save();

  if (width === undefined && height === undefined) {
    this.translate(placeImageInX, placeImageInY);
    this.rotate((angleInDegrees * Math.PI) / 180);
    this.drawImage(imageCanvas, -imageCanvas.width / 2, -imageCanvas.height / 2);
  } else {
    this.translate(placeImageInX, placeImageInY);
    this.rotate((angleInDegrees * Math.PI) / 180);
    this.drawImage(imageCanvas, -width / 2, -height / 2, width, height);
  }

  this.restore();
};

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
    ctx.drawImage(pipe, obstacleX, h2 - 20, 200, 200);
  });

  ctx.drawImage(mario, marioObj.x, h2 - 50 + 130, 100, 100);

  ctx.font = "48px serif";
  ctx.fillText(marioObj.x, 50, 50);
}

window.onkeydown = function(e) {
  if (e.keyCode === 39) {
    marioObj.moveRight();
  }

  if (e.keyCode === 38) {
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
