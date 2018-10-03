var buttonDown;
var buttonUp;
var count = 120;

function setup() {
  createCanvas(240, 240);

  buttonUp = createButton('Down');
  buttonUp.position(180, 200);
  buttonUp.mousePressed(countup);

  buttonDown = createButton('Up');
  buttonDown.position(0, 200);
  buttonDown.mousePressed(countdown);
}

function countup() {
  count += 5;
}

function countdown() {
  count -= 5;
}

function draw() {
  background(205);
  fill(0, 255, 255);
  ellipse(120, count, 40, 40);
}
