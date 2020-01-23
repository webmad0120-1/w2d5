// Dani Vicario - canvas2 experiment (canvas)- Thu Oct 31 11:40:27 CET 2019
function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/** @type HTMLCanvasElement */
let canvasDOMEl = document.getElementById("canvas");

/** @type CanvasRenderingContext2D */
let ctx = canvasDOMEl.getContext("2d");

let w = window.innerWidth * 1;
let h = window.innerHeight * 1;
let w2 = w / 2;
let h2 = h / 2;

const PI = Math.PI;
const PI_DOUBLE = 2 * Math.PI;
const PI_HALF = Math.PI / 2;

function setCanvasDimensions() {
  canvasDOMEl.setAttribute("height", h);
  canvasDOMEl.setAttribute("width", w);
}

window.onresize = setCanvasDimensions;

setCanvasDimensions();

let posX = 0;
let red = 0;

function drawSinChart() {
  Array(w)
    .fill()
    .forEach((x, idx) => {
      posX += 1;
      ctx.beginPath();
      ctx.arc(
        posX,
        h2 + 100 * Math.cos((idx * Math.PI) / 180),
        1,
        0,
        PI_DOUBLE
      );
      ctx.fillStyle = `
    rgba(${(red += 0.25)}, 0, 0, 1)`;
      ctx.fill();
      ctx.closePath();
    });
}

class ConcentricCircles {
  constructor(nCircles) {
    for (var i = nCircles; i >= 1; i--) {
      ctx.beginPath();
      ctx.fillStyle = `rgba(${randomInt(0, 255)}, ${randomInt(
        0,
        255
      )}, ${randomInt(0, 255)}, 1)`;
      ctx.arc(0, 0, i * 20, 0, PI_DOUBLE);
      ctx.fill();
      ctx.closePath();
    }
  }
}

setInterval(() => {
    ctx.save();
    ctx.translate(randomInt(0, w), randomInt(0, h));
    new ConcentricCircles(randomInt(5, 5));
    ctx.restore();
}, 10)


// Array(1000)
//   .fill()
//   .forEach(() => {
//     ctx.save();
//     ctx.translate(randomInt(0, w), randomInt(0, h));
//     new ConcentricCircles(randomInt(5, 15));
//     ctx.restore();
//   });
