/** @type HTMLCanvasElement */
const canvasDOMEl = document.getElementById("game");

/** @type CanvasRenderingContext2D */
const ctx = canvasDOMEl.getContext("2d");

// let's store all browser dimensions in these variables
// so we can draw items in their right place
let w, h, w2, h2;
const PI = Math.PI;
const PI_DOUBLE = PI * 2;

const Art = {
  line: (x, y, x1, y1) => {
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1);
    // ctx.lineWidth = randomFloat(1, 4);
    // ctx.strokeStyle = `rgba(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}, 1)`;
    ctx.lineWidth = 10;
    ctx.lineJoin = "miter";
    ctx.strokeStyle = `white`;
    ctx.stroke();
  },
  lineWithCircles: function() {
    let factor = -100;
    Array(Math.round(w))
      .fill()
      .forEach((_, angle) => {
        ctx.beginPath();
        // factor -= -1;

        ctx.arc(angle, h2 + (200 + factor) * Math.sin((angle * PI) / 180), 5, 0, PI_DOUBLE);
        ctx.fillStyle = `rgba(0,0,0,.1)`;
        ctx.fill();
        ctx.closePath();
      });
  },
  diana: function(x, y, r) {
    Array(10)
      .fill()
      .forEach((_, idx) => {
        if (r - 20 * idx < 0) return;

        ctx.beginPath();
        ctx.arc(x, y, r - 20 * idx, 0, PI_DOUBLE);
        ctx.fillStyle =
          idx % 2
            ? `rgba(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}, 1)`
            : "white";
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.closePath();
      });
  }
};

// this function sets the proper canvas dimensions
// setting the dimensions to the max viewport's browser dimensions
const setCanvasDimensions = () => {
  w = window.innerWidth;
  h = window.innerHeight;
  w2 = w / 2;
  h2 = h / 2;
  canvasDOMEl.setAttribute("width", `${w}px`);
  canvasDOMEl.setAttribute("height", `${h}px`);

  draw();
};

const randomFloat = (min, max) => Math.random() * (max - min) + min;
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const shuffle = array => array.sort(() => Math.random() - 0.5);

function draw() {
  // Array(1)
  //   .fill()
  //   .forEach(() => {
  //     // Art.diana(randomInt(0, w), randomInt(0, h), randomInt(50, 200));
  //     // Art.lineWithCircles();

  //     // cross
  //     // Art.line(w2, h2, w2, h2 - 300);
  //     // Art.line(w2, h2, w2 + 300, h2);
  //     // Art.line(w2, h2, w2, h2 + 300);
  //     // Art.line(w2, h2, w2 - 300, h2);
  //     // end cross

  //     ctx.rotate((10 * PI) / 180);
  //     Art.line(w2, h2, w2 + 500, h2);
  //   });

  // bicho start
  // for (let angle = 0; angle < 360; angle += 1) {
  //   ctx.save();
  //   ctx.translate(w2, h2);
  //   ctx.rotate((angle * PI) / 180);
  //   Art.line(0, 0, randomInt(300, 500), 0);
  //   ctx.restore();
  // }
  // bicho end

  // zizgag starts
  // for (let y = 0; y < 100; y++) {
  //   for (let x = 0; x < 40; x++) {
  //     ctx.save();
  //     ctx.translate(x * 100, y * 50);
  //     // ctx.rotate((randomInt(0, 360) * PI) / 180);
  //     Art.line(0, 0, 50, -50);
  //     Art.line(50, -50, 100, 0);
  //     ctx.restore();
  //   }
  // }

  // ctx.lineJoin = "round";
  // ctx.strokeStyle = "white";
  // ctx.lineWidth = 10;
  // ctx.beginPath();
  // ctx.moveTo(0, h2);
  // for (let x = 0, odd = 0; x < w; x += 50, odd++) {
  //   ctx.lineTo(x, odd % 2 ? 50 + h2 : h2);
  // }
  // ctx.stroke();
  // ctx.closePath();
  // // zizgag ends
  Art.lineWithCircles();
}

// this event handler will re-set the canvas dimensions
// as the browser stretches or shrinks
window.onresize = setCanvasDimensions;

// here we set the right dimensions for the canvas
// as we load the app for the first time
setCanvasDimensions();
