function setup() {
  createCanvas(500,500);
  background(204);
  angleMode(DEGREES);
}
function draw() {
fill(0);
beginShape();
vertex(80,340);//bottom left jaw//
vertex(70,200); //outer left ear//
vertex(100,120);//left ear point//
vertex(140,195);//inner left ear//
vertex(260,195);//inner right ear//
vertex(300,120);//right ear point//
vertex(330,200);//outer right ear//
vertex(320,340);//bottom right jaw//
vertex(200,410); //chin point//
endShape();
fill(225, 225, 0);
ellipse(150, 260, 40, 30); //left eye
ellipse(255, 260, 40, 30); //right eye
fill(255);
ellipse(150, 260, 10, 30); //left pupil
ellipse(255, 260, 10, 30); //right pupil
fill(239, 162, 162);
triangle(200,320,220,300,180,300);
}
