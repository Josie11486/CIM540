function setup() {
  createCanvas(2000,2000);
  background(204);
  angleMode(DEGREES);

}

function draw() {
strokeWeight(0)
fill(0);
//body//
quad(100, 100, 120, 100, 120, 200, 100, 200);
ellipse(110, 85, 25, 25);

fill(0, 204, 255);
// left wing //
quad(100, 100, 30, 50, 30, 250, 100, 200);
//right wing//
quad(120, 100, 190, 50, 190, 250, 120, 200);

//pacman
fill(225,225,0);
arc(400, 100, 80, 80, 45, 315);
arc(500, 100, 80, 80, 65, 300);
arc(600, 100, 80, 80, 45, 320);
arc(700, 100, 80, 80, 10, 320);

//outline
strokeWeight(1);
ellipse(90, 300, 80, 80);

strokeWeight(8);
ellipse(180, 300, 80, 80);

strokeWeight(15);
ellipse(280, 300, 80, 80);
}




// first two numbers are position on the backgroubnd, the second two are size//
