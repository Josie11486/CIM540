var grass;

function preload() {
  grass = loadImage('grass.jpg');
}

function setup() {
  createCanvas(500, 500);
  background(230);
}

function draw() {
  noStroke();
  fill(200);
  rect(10, 10, 50, 100);
  fill(120);
  ellipse(45, 30, 10, 10);
  ellipse(25, 45, 10, 50);
  triangle(60, 30, 70, 70, 60, 70);
  stroke(20);
  line(40, 80, 59, 80);
}
