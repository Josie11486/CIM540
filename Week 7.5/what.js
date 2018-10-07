var angle = 0.0;

function setup() {
  createCanvas(200, 200);
  background(204);
}

function draw() {
  translate(100, 100);
  rotate(angle);
	rect(-25, -25, 50, 50);
  angle += 0.1;

}
