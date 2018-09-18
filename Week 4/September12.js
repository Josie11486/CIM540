
var d = 50;


function setup() {
  createCanvas(480, 120);
  background(0);
}


function draw() {
  for(var j = 0; j < 10; j++) {
    for(var i =0; i<20; i++){
      ellipse(i*d, j*d, d, d);
    }
  }
}
