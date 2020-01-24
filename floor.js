let Floor = {
  show: function() {
    ctx.beginPath();
    ctx.moveTo(0, h2 + 50);
    ctx.lineTo(w, h2 + 50);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();
  }
};
