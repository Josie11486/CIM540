var x = 250;
var y = 150;
var d = 10;



function setup() {
  createCanvas(1000,800);
  background(204);
  noFill();
}

function draw(){
// 1. two separeate loops or nested loops



for(var b = 0; b < 620; b+=20){
  for(var c = 0; c < 200; c+=20){
  ellipse (200+b, 400+c, 5, 5);
    }
  }
}
