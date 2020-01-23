// Dani Vicario - animatedCircle experiment (canvas)- Thu Oct 31 12:36:28 CET 2019
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

canvasDOMEl.onclick = function(e) {
  createCircle(w2, h2, "red");
};

/** @type CanvasRenderingContext2D */
var ctx = canvasDOMEl.getContext("2d");

var w = window.innerWidth;
var h = window.innerHeight;
var w2 = w / 2;
var h2 = h / 2;
let circles = [];

var PI = Math.PI;
var PI_DOUBLE = 2 * Math.PI;
var PI_HALF = Math.PI / 2;

canvasDOMEl.setAttribute("height", window.innerHeight);
canvasDOMEl.setAttribute("width", window.innerWidth);

class Circle {
  constructor(r, x, y, speed, color) {
    this.r = r;
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = speed * 5;
  }

  moveRight() {
    this.x += this.speed;
  }
}

function createCircle(x, y, color = "black") {
  let speed = randomFloat(0.1, 0.5);
  circles.push(new Circle(50, x, y, speed, color));
}

for (let i = 1; i <= 8; i+=2) {
  createCircle(100, 100 * i);
}

let x = 0;
let counter = 0;
let bullets = 10;

var startTime, endTime;

function start() {
  startTime = new Date();
}

function end() {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds
  var seconds = Math.round(timeDiff);
  return seconds;
}

function gameOver() {
  alert("game over");
}

window.onkeydown = function(e) {
  // if (e.code.toLowerCase() === "space") {
  if (e.code === "Space") {
    bullets--;

    if (bullets < 0) {
      gameOver();
    }
  }
};

let camelImg = new Image();
camelImg.src = "camel.png";

camelImg.onload = function() {
  start();

  setInterval(() => {
    ctx.clearRect(0, 0, w, h);

    circles.forEach(circle => {
      // ctx.beginPath();
      // circle.moveRight();
      // ctx.fillStyle = circle.color;
      // ctx.arc(circle.x, circle.y, circle.r, 0, PI_DOUBLE);
      // ctx.fill();
      // ctx.closePath();

      circle.moveRight();
      ctx.drawImage(camelImg, circle.x, circle.y);
    });

    // ****************************
    // draw text
    // ****************************

    // color the text
    ctx.fillStyle = "black";
    ctx.font = "30px Georgia";
    // ctx.fillText("string", x, y); => x, y are coordinates where the text
    // is going to appear
    ctx.fillText("Bullets: " + bullets + " - Time: " + end(), 20, 40);
  }, 1);
};
