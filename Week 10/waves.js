var angle = 0;
var x = 0;

function setup() {
  createCanvas(480, 120);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  var y = sin(angle);
  ellipse(x, height/2+y*height/3, 20, 20);
  // height/2 = the first cirlce starts in the middle of the screen
  // y is there bc thats the wave function
  // y is multiplied by 1/3 height becuase... idk but the number its divided by determines the height of the wave
  angle += 20;
  x += 10;
  if(x > width) {
    x = 0;
  }
}
