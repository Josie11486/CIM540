//timer

var y  = 60;
var speed = 5;


function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(0);

  currentTime = millis();
  if(currentTime > 2000) {
    y += speed;
    if(y > height) {
      y = 0;
    }
  }
  fill(255, 255, 0);
  ellipse(width/2, y, 30, 30);
}
