function setup() {
  createCanvas(800,400);
  background(204);
  ellipse(100, 100, 30, 30);
}

function draw() {

  ellipse(400, 200, 100, 100); //body//
  ellipse(400, 120, 60, 60); //head//
  ellipse(390, 110, 10, 10); //left eye//
  ellipse(410, 110, 10, 10); //right eye//
}

// first two numbers are position on the backgroubnd, the second two are size//
