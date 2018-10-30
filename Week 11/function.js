function setup() {
  createCanvas(480, 480);
  background(204);
  drawABox(0);
  drawABox(20);
  drawABox(40);
  drawABox(60);
  drawABox(80);
  drawABox(100);
  drawABox(120);
  drawABox(140);
  drawABox(160);
  drawABox(180);
  drawABox(200);
  drawABox(220);
  drawABox(240);



}

function drawABox(x) {
  fill(x+30, 100, 255);
  rect(x+20, 20, 20, 20);
}
