var cvs = document.querySelector("canvas");
var ctx = cvs.getContext('2d');
cvs.width = window.innerWidth;
cvs.height = window.innerHeight;
var v = Math.min(cvs.width, cvs.height),
ctx;
var rotationAngle = 0;

var n = 600;
var k = 185;
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
  ctx.clearRect(0, 0, cvs.width, cvs.height);
  rotationAngle += 0.009;
  for (var i = -n; i <= n; i++) {
    var angle = Math.abs(i) * anglefract + rotationAngle;
    var radius = i / n;
    if (radius !== 0) {
      radius /= Math.sqrt(Math.abs(radius));
    }
    radius *= 0.48 * v;
    var x = cvs.width / 2 + radius * Math.cos(Angle);
    var y = cvs.height / 2 - radius * Math.sin(Angle);
    var color = getRandomColor(radius);
    drawCircle(x, y, color);
  }
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);