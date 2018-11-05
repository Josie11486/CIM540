function setup() {
  createCanvas(480, 120);
  textSize(24);
  textAlign(CENTER);
  background(204);
  var number = rollDice();

if(number == 1) {
  fill(255, 0, 0);
} else if(number == 2) {
  fill(0, 0, 255);
} else if(number == 3) {
  fill(0, 255, 0);
} else {
  fill(255, 0, 255);
}
rect(100, 10, 50, 50)
rect(150, 10, 50, 50)
rect(100, 60, 50, 50)
rect(150, 60, 50, 50)
}

function rubiks(x, y, g, s) {

}

function rollDice() {
  var number = 1+int(random(4));
  return number;
}
