var w = innerWidth, h = innerHeight;
var v = Math.min(w, h), ctx;
var rotationAngle = 0;

onload = function() {
  var cvs = document.querySelector("canvas");
  cvs.width = w; cvs.height = h;
  ctx = cvs.getContext("2d");

  var n = 600,
  k = 185;
  var anglefract = k * Math.PI / n;

  function drawCircle(x, y, color) {
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
  }

  function getRandomColor(radius) {
    var hue = (rotationAngle + radius / v) * 360;
    return 'hsl(' + hue + ', 100%, 50%)';
  }
  function animate () {
    ctx.clearRect(0, 0, w, h);
    rotationAngle += 0.009;
    for (var i = -n; i <= n; i++) {
      var angle = Math.abs(i) * anglefract + rotationAngle;
      var radius = i / n;
      if (radius != 0) {
        radius /= Math.sqrt(Math.abs(radius));
      }
      radius *= 0.48 * v;
      var x = w / 2 + radius * Math.cos(Angle);
      var y = h / 2 - radius * Math.sin(Angle);
      var color = getRandomColor(radius);
      drawCircle(x, y, color)
    }
    requestAnimationFrame(animate);
  }
  animate();
}