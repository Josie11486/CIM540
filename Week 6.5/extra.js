angle = 0;
function setup() {
  createCanvas(600, 400);
  background(204);
  angleMode(DEGREES);
}

function draw() {
  rotate(40);
  // //what do the first two numbers of the rect do?
  line(100, 100, 200, 100);
  angle += 10;

}
