//rain

var x = 80;
var y  = 0;
var speed = 5;

function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(0);
  stroke(255);

  currentTime = millis();
  if(currentTime > 2000){
      y += speed;
    line(x, y, x, y+20);
    line(2*x, y-30, 2*x, y+20-30);
    line(3*x, y+50, 3*x, y+20+50);
    line(4*x, y-10, 4*x, y+20-10);
      if(y > height) {
        y = 0;
        x = random(120, width);
      }
    }
  }
