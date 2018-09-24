var x = 240;

function setup() {
  createCanvas(480, 180);
}

function draw() {

  if (keyIsPressed) {
    if(keyCode == LEFT_ARROW){
      x = x - 5;
    }
    if(keyCode == RIGHT_ARROW){
      x = x + 5;
    }
  }
//red rect
fill(255, 0, 255) ;
//when key is pressed, 3rd value must change
rect(0, 0, x, height);

//blue rect
fill(57, 255, 20);
//when keuy is pressed, 1st and 3rd values must change
rect(x, 0, width-x, height);

fill(57, 255, 20);
text('PRESS ARROW <---', 30, 100);
}


  // background(0);
  // if(keyIsPressed) {
  //   text(key, 60, 80);
  // }

  // fill(255,255,0);

//   if(keyIsPressed) {
//     if(key=='s') {
//   //LINE 1
//   textSize(40);
//   text('A NEW HOPE', 400, 40);
//   //LINE2
//   textSize(15);
//   text('LINE 2', 400, 80);
//   //LINE3
//   textSize(25);
//   text('LINE 3', 400, 115);
//   //LINE4
//   textSize(35);
//   text('LINE 3', 400, 160);
// } else {
//   text('try again bitch', 400, 100);
// }
// }
