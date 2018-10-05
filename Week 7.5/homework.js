var halloween;
var ghosty;
var skull;
var offset = 0;
var easing = 0.05;

function preload() {
  halloween = loadImage('halloween.jpg');
  ghosty = loadImage('ghosty.png');
  skull = loadImage('skull.png');
}

function setup() {
  createCanvas(800, 480);
}

function draw() {
  image(halloween, 0, 0);
  image(skull, 328, 250);

  tint(255, 60);
  var dx = (mouseX-150)-offset;
  offset += dx*easing;
  image(ghosty, mouseX-120, mouseY-120);

  // tint(255, 20);
}
