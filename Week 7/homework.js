var sky;
var unicorn;

function preload() {
  sky = loadImage('sky.jpg')
  unicorn = loadImage('unicorn.jpg')
}

function setup() {
  createCanvas(500, 500);
  background(255);
}

function draw() {
  image(sky, 0, 0);

  tint(255, 20);
  image(unicorn, 0, 0);
}
