var angle = 0;

function setup() {
  createCanvas(480, 120);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  fill(0, 0, 255);

  for(var x = 0; x < width; x+=10) {
    var y = sin(angle+x);
    ellipse(x, height/2+y*30, 10, 10);
  }
  angle+=10;
}
