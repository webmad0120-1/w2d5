// Dani Vicario - buttons experiment (canvas)- Thu Oct 31 13:27:53 CET 2019
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

function gameHandler() {
  let posX = 0;
  let intervalID;

  function animate() {
    intervalID = setInterval(() => {
      ctx.clearRect(0, 0, w, h);

      ctx.beginPath();
      ctx.arc(posX++, h2, randomInt(25, 25), 0, PI_DOUBLE);
      ctx.fill();
      ctx.closePath();

      ctx.beginPath();
      ctx.moveTo(0, h2 + 25);
      ctx.lineTo(w, h2 + 25);
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.moveTo(0, h2 - 25);
      ctx.lineTo(w, h2 - 25);
      ctx.stroke();
      ctx.closePath();
    }, 1);
  }

  document.querySelector("#start").onclick = function() {
    animate();
  };

  document.querySelector("#stop").onclick = function() {
    clearInterval(intervalID);
  };
}


gameHandler()