class Ball {
  constructor(x, y, size, isSpecial) {
    this.x = x;
    this.y = y;
    this.size = size;
    // this.speed = randomFloat(1, 5); // --> 3.16
    this.speed = 2;
    this.isMoving = false;
    this.isSpecial = isSpecial;
    this.accelerationRate = 0;

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

    ctx.arc(this.x, this.y, this.size, 0, PI_DOUBLE);
    ctx.fill();
    ctx.closePath();
  }

  show() {
    this._paint();
    this.isMoving = false;
  }

  setAccelerationRate(acc) {
    this.accelerationRate = acc;
  }

  stop() {
    this.setSpeed(0);
    this.setAccelerationRate(0);
  }

  setSpeed(speed) {
    this.speed = speed;
  }

  activateNitro() {
    this.speed += 10;
  }

  moveRight() {
    this.speed += this.accelerationRate;
    if (this.speed < 0) this.speed = 0;
    this.x += this.speed;

    this._paint();
    this.isMoving = true;
  }

  moveDown() {
    this.speed += this.accelerationRate;
    if (this.speed < 0) this.speed = 0;
    this.y += this.speed;

    this._paint();
    this.isMoving = true;
  }
}
