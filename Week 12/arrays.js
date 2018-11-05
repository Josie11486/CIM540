var x = [];
var y = [];
var hit = [];
//empty brackets makes them arrays!

function setup() {
  createCanvas(480, 240);
  angleMode(DEGREES);
  for(var i = 0; i < 10; i++) {
    x[i] = random(20, width-20);
    y[i] = random(20, height-20);
    hit[i] = 0;
  }
}

function draw() {
  background(0);
  fill(255, 255, 0);

  for(var i = 0; i < 10; i++) {
    if(hit[i] == 0) {
      arc(x[i], y[i], 20, 20, 45, 315);
    }
  }

if(mouseIsPressed) {
  for(var i = 0; i < 10; i++) {
    if(mouseX >(x[i]-10) && mouseX<(x[i]+10) && mouseY>(y[i]-10) && mouseY<y[i]+10)) {
      hit[i] = 1;
    }
  }
}
}
