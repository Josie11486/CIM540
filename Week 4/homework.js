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
noFill();
for(var j = 1; j < 3; j++) {
  for(var i = 1; i < 13; i=i+2) {
    ellipse(x*j, y, i*d, i*d);
  }
    }


for(var a = 0; a < 8; a++){
  fill(255,255,255);
  quad(1+29*a, 1+9*a, 30+29*a, 1+9*a, 30+29*a, 10+9*a, 1+29*a, 10+9*a);
}

for(var b = 0; b < 620; b+=20){
  for(var c = 0; c < 200; c+=20){
  noFill();
  line(500, 500, 200+b, 400+c);
  ellipse (200+b, 400+c, 5, 5);
    }
  }
}
