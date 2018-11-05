function setup() {
  createCanvas(480, 240);
  background(204);
  angleMode(DEGREES);
}

function draw() {
  ellipse (100, 100, 80, 80);
  ellipse (85, 90, 5, 5);
  ellipse (115, 90, 5, 5);
  arc (100, 100, 40, 40, 45, 135);
}

function smiley(initX, initY, size) {
  this.x = initX;
  this.y = initY;
  this.size = size;

  this.smile = function() {
    ellipse(this.x, this.y, this.size, this.size);

  }
}
