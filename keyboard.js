// Dani Vicario - keyboard experiment (canvas)- Thu Oct 31 13:07:46 CET 2019
function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/** @type HTMLCanvasElement */
var canvasDOMEl = document.getElementById("canvas");

/** @type CanvasRenderingContext2D */
var ctx = canvasDOMEl.getContext("2d");

var w = window.innerWidth;
var h = window.innerHeight;
var w2 = w / 2;
var h2 = h / 2;

var PI = Math.PI;
var PI_DOUBLE = 2 * Math.PI;
var PI_HALF = Math.PI / 2;

canvasDOMEl.setAttribute("height", window.innerHeight);
canvasDOMEl.setAttribute("width", window.innerWidth);

let coords = {
  x: w2,
  y: h2
};

let radius = 100;
let color = "black";

function drawCircle(color) {
  ctx.clearRect(0, 0, w, h);

  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(coords.x, coords.y, radius, 0, PI_DOUBLE);
  ctx.fill();
  ctx.closePath();
}

let speed = 30;

window.onkeydown = function(e) {
  switch (e.key) {
    case "ArrowRight":
      coords.x += speed;
      break;
    case "ArrowUp":
      coords.y -= speed;

      if (coords.y < -radius) {
        coords.y = h + radius;
      }
      break;
    case "ArrowLeft":
      coords.x -= speed;
      break;
    case "ArrowDown":
      coords.y += speed;

      if (coords.y > h + radius) {
        coords.y = -radius;
      }

      break;
  }

  if (e.code === "Space") {
    color = "red";
  }

  drawCircle(color);
};
