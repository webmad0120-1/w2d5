class Ball {
  constructor(posX, posY, size, isSpecial) {
    this.posX = posX;
    this.posY = posY;
    this.size = size;
    this.speed = randomFloat(1, 5); // --> 3.16
    this.isMoving = false;
    this.isSpecial = isSpecial;

    if (this.isSpecial)
      this.specialColor = `rgba(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(
        0,
        255
      )}, 1)`;
  }

  _paint() {
    ctx.beginPath();
    if (this.isSpecial) {
      ctx.fillStyle = this.specialColor;
    } else {
      if (this.isMoving) {
        ctx.fillStyle = `rgba(0, 255, 0, 1)`;
      } else {
        ctx.fillStyle = `rgba(255, 0, 0, .3)`;
      }
    }

    ctx.arc(this.posX, this.posY, this.size, 0, PI_DOUBLE);
    ctx.fill();
    ctx.closePath();
  }

  show() {
    this._paint();
    this.isMoving = false;
  }

  moveRight() {
    this.posX += this.speed;

    this._paint();
    this.isMoving = true;
  }
}
