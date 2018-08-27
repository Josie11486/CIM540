function setup() {
  createCanvas(800,400);
  background(255);
}

function draw() {

  fill(0,255,191);
  ellipse(300, 200, 100, 60); //head//

  fill(255,153,255);
  ellipse(300, 210, 50, 10); //mouth//

  fill(255,255,0);
  ellipse(275, 170, 10, 10); //left eye//
  ellipse(325, 170, 10, 10); //right eye//
}

// first two numbers are position on the backgroubnd, the second two are size//
