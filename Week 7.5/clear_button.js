var cleared;

function setup() {
  createCanvas(240, 240);
  background(205);

  cleared = createButton('Clear');
  cleared.position(180, 200);
  cleared.mousePressed(clearscreen);

}

function draw() {
  ellipse(mouseX, mouseY, 20, 20)
}

function clearscreen() {
  background(205);
}
