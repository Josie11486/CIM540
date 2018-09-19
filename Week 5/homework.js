var x = 50;
var y = 50;
var s = 10;
var d = 50;


function setup() {
  createCanvas(500,500);
  background(204);
}


function draw() {

rect(x, y, s, s);
rect(x+d, y, 2*s, 2*s);
rect(x+d+d+15, y, 3*s, 3*s);
}
