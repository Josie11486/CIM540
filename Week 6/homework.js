var x = 60;
var y = 60;
function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(0);
  fill(255, 255, 255);
  if(keyIsPressed) {
    if(keyCode == LEFT_ARROW) {
      x = x - 5;
    }
    else if(keyCode == RIGHT_ARROW) {
      x = x + 5;
    }
    else if(keyCode == UP_ARROW) {
      y = y - 5;
    }
    else if(keyCode == DOWN_ARROW) {
      y = y + 5;
    }
  }
  stroke(0);
  rect(x, y, 10, 10);


  if(keyIsPressed) {
    if(key=='d') {
      stroke(173,255,47);
      line(x+10, y, 300, y);
    }
  }
}
