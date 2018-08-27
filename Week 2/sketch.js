function setup() {
  createCanvas(800,400);
  background(255);
}

function draw() {
fill(0);
quad(100, 100, 120, 100, 120, 200, 100, 200); //body//
ellipse(110, 85, 25, 25);

fill(0, 204, 255);
quad(100, 100, 30, 50, 30, 250, 100, 200) // left wing //
quad(120, 100, 190, 50, 190, 250, 120, 200) //right wing//

}
// first two numbers are position on the backgroubnd, the second two are size//
