var halloween;
var ghosty;
var skull;
var x = 0;
var y = 0;
var z = 5;
var easing = 0.02;
var angle = 0;
var faster;
var slower;
var b = 460;
var c = 480;
var s = 30;
var t = 555;

function preload() {
  halloween = loadImage('halloween.jpg');
  ghosty = loadImage('ghosty.png');
  skull = loadImage('skull.png');
  candy = loadImage('candy.png')

}

function setup() {
  createCanvas(1100, 660);


  slower = createButton('<');
  slower.position(b, c);
  slower.mousePressed(decreaseCount);

  faster = createButton('>');
  faster.position(b+30, c);
  faster.mousePressed(increaseCount);

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

  push();

  tint(255, 50);
  image(halloween, 0, 0);

push();
imageMode(CENTER);
  translate(485, 430);
   rotate(radians(angle));
  // rotate(angle);
  tint(255, 150);
  image(skull, 0, 0);
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
  text('CLICK THE ARROWS TO SPIN SKULL', s, t+25);
  text('PRESS THE "T" KEY TO TRICK OR TREAT', s, t+50);
  text('PRESS THE "L" KEY FOR SPOOKY LIGHTNING', s, t+75);

//Make an instructions box,

pop();

  // for(var d = 20; d < 1100; d+=200){
  //   for(var e = 20; e < 620; e+=200){
  //   image(candy, 0+d, 0+e);
  //     }
  //   }


}
