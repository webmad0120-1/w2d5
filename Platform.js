class Platform {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  show() {
    ctx.beginPath();
    ctx.fillStyle = `rgb(0, 0, 0, 1)`;
    ctx.rect(this.x - this.w / 2, this.y, this.w, this.h);
    ctx.fill();
    ctx.closePath();
  }
}
