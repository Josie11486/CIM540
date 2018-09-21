function setup() {
  createCanvas(480, 120);
  background(204);
}


function draw() {
//if mouse clicked within left
if( (mouseIsPressed) && (mouseX > 10) && (mouseX < 40) && (mouseY > 10) && (mouseY < 40)) {
  fill(255, 0, 0); //red
} else {
  fill(255);
}
rect(10, 10, 30, 30);


if( (mouseIsPressed) && (mouseX > 50) && (mouseX < 80) && (mouseY > 10) && (mouseY < 40)) {
  fill(0, 255, 0); //green
} else {
  fill(255);
}
rect(50, 10, 30, 30);

}
