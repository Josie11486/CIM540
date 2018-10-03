var button;
var count = 0;

function setup() {
  createCanvas(400, 400);
  textSize(24);
  textAlign(CENTER);
  fill(255);

  button = createButton('increase');
  button.position(300, 200);
  button.mousePressed(increaseCount);

  button = createButton('decrease');
  button.position(300, 300);
  button.mousePressed(decreaseCount);
}

function increaseCount() {
  count += 1;
}

function decreaseCount() {
  count -= 1;
}

function draw() {
  background(0);
  text(count, 120, 120);
}
