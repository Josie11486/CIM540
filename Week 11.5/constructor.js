//constructor for Spaceship
function Spaceship(initX, initY) {
  //properties: location (x, y)
  this.x = initX;
  this.y = initY;
  //methods: move() and display()
  this.move = function() {
  this.x += random(-5, 5);
  }
  this.display = function() {
    ellipse(this.x, this.y, 10, 10);
  }
}

var ship;

function setup() {
  createCanvas(480, 120);
  background(204);
  ship = new Spaceship(width/2, height/2);
}

function draw() {
  ship.move();
  ship.display();
}
