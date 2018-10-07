var halloween;
var ghosty;
var skull;
var x = 0;
var y = 0;
var z = 0;
var easing = 0.02;
var angle = 0;
var faster;
var slower;
var s = 315;

function preload() {
  halloween = loadImage('halloween.jpg');
  ghosty = loadImage('ghosty.png');
  skull = loadImage('skull.png');
}

function setup() {
  createCanvas(800, 480);

  faster = createButton('>');
  faster.position(360, 370);
  faster.mousePressed(increaseCount);

  slower = createButton('<');
  slower.position(315, 370);
  slower.mousePressed(decreaseCount);

  //when you click trick the skull will spin faster
  //when you click treat, uhhhh
}

function increaseCount() {
  z += 5;
}

function decreaseCount() {
  z += -5;
}

function draw() {
  image(halloween, 0, 0);

push();
imageMode(CENTER);
  translate(350, 315);
   rotate(radians(angle));
  // rotate(angle);
  image(skull, 0, 0);
  angle += z;
pop();

  tint(255, 50);
  var targetX = (mouseX-200)-x;
  x += targetX*easing;

  var targetY = (mouseY-100)-y;
  y += targetY*easing;

  image(ghosty, x, y);

  textSize(12);
  fill(255);
  text('ROUND', s, 410);
  text('AND ROUND', s, 425);
  text('AND ROUND SHE GOES', s, 440);
}
