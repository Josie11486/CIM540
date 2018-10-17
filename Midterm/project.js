var halloween;
var ghosty;
var skull;
var x = 0;
var y = 0;
var z = 1;
var easing = 0.03;
var angle = 0;
var faster;
var slower;
var b = 460;
var c = 480;
var s = 30;
var t = 555;
var direction = 1;

function preload() {
  halloween = loadImage('halloween.jpg');
  ghosty = loadImage('ghosty.png');
  skull = loadImage('skull.png');
  candy = loadImage('candy.png')
  lightning = loadImage('lightning.png');
  cheshire = loadImage('cheshire.png');
}

function setup() {
  createCanvas(1100, 660);
}

function draw() {

  push(); //only applies tint to certain stuff//
  tint(255, 50);
  image(halloween, 0, 0);

//skull
push();
imageMode(CENTER);
  translate(485, 430);
   rotate(radians(angle));
  // rotate(angle);
  tint(255, 150);
  image(skull, 0, 0);

  if(keyIsPressed) {
    if(keyCode == LEFT_ARROW) {
      z = z + 1;
    }
    else if(keyCode == RIGHT_ARROW) {
      z = z - 1;
    }
    else if(keyCode == DOWN_ARROW) {
      z = 0;
    }
  }
  angle += z;
pop();

push();
  var targetX = (mouseX-200)-x;
  x += targetX*easing;

  var targetY = (mouseY-100)-y;
  y += targetY*easing;

  tint(255, 50);
  image(ghosty, x, y);
pop();

  textSize(15);
  fill(255);
  text('INSTRUCTIONS:', s, t);
  text('USE THE ARROW KEYS TO SPIN THE SKULL', s, t+25);
  text('PRESS THE "C" KEY TO REVEAL THE CHESHIRE CAT', s, t+50);
  text('CLICK THE MOUSE FOR SPOOKY LIGHTNING', s, t+75);

//Make an instructions box,
if(keyIsPressed) {
  if(key=='c') {
    image(cheshire, 595, 270);
  }
}
pop();

if (mouseIsPressed) {
  for(var d = 0; d < 1000; d+=200){
    for(var e = 0; e < 620; e+=200){
    image(lightning, 0+d, 0+e);
      }
    }
  }

if(keyIsPressed) {
  if(key=='c') {
    image(cheshire, 595, 270);
  }
}

}
