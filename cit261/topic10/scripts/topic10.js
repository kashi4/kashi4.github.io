
		var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var x = 0, y = 0, value = 2;

requestAnimationFrame(animateFunction);

function animateFunction() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillRect(x, y, 30, 30);

if( x >= 0 ){
  x += value;
  if( x > 150 ) {
    y += value; x -= value;
  }
}

if( y > 150 ) {
  x = 0;
  y = 0;
}

requestAnimationFrame(animateFunction);
}
