var halloween;
var ghosty;
var skull;

function preload() {
  halloween = loadImage('halloween.jpg');
  ghosty = loadImage('ghosty.png');
  skull = loadImage('skull.png');
}

function setup() {
  createCanvas(800, 480);
  background(204);
}

function draw() {
  image(halloween, 0, 0);
  image(skull, 328, 250);

  tint(255, 60);
  image(ghosty, mouseX-120, mouseY-120);

  // tint(255, 20);
}
