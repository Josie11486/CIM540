var x = 240;
var y = 150;
var d = 30;



function setup() {
  createCanvas(600,300);
  background(204);
  strokeWeight(2);

}

function draw() {
  // commands that run as many times as defined.
  //var counter = start_point ; counter < stop_point ; increment in counter
// for(var i = 1; i < 21; i=i+2){
//   ellipse(x, y, i*d, i*d);
// }

// for(var i = 1; i < 5; i++)
//   rect(x+i*30, y, d, d)
//
// for(var i = 1; i < 25; i++)
//   line(100+i*10, 250, 100+i*10, 300)


for(var i = 20; i < 400; i +=20){
  fill (255,0,0);
  line(i, 0, i + i/2, 80);
  ellipse(i + i/2, 80, 10, 10);
}
