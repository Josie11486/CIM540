function preload() {
  pink = loadImage('pink.jpg');
  fish = loadImage('fish.png');
}

function setup() {
  createCanvas(800, 600);
}

function draw() {

  image(pink, 0, 0);
  image(fish, mouseX-120, mouseY-120);
}
