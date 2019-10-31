// Dani Vicario - bounce experiment (canvas)- Thu Oct 31 13:58:17 CET 2019

function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
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
  x: 0,
  y: h2
};

let radius = 50;
let sense = 1;
let lineColor = "black";
let rightLimit = w2 + randomInt(0, 300)

setInterval(() => {
  ctx.clearRect(0, 0, w, h);

  ctx.moveTo(rightLimit, 0);
  ctx.lineTo(rightLimit, h);
 
  if (sense === 1) {
    ctx.strokeStyle = "black";
  } else {
    ctx.strokeStyle = "red";
  }
  
//   ctx.lineWidth = 50
  ctx.stroke();

  ctx.beginPath();
//   ctx.lineWidth = 1
  coords.x = coords.x + sense;

  if (coords.x >= rightLimit - radius) {
    sense = -1;
  }

  if (coords.x < radius) {
    sense = 1;
  }
  ctx.arc(coords.x, coords.y, 50, 0, PI_DOUBLE);
  ctx.fill();
  ctx.closePath();
}, 1);
