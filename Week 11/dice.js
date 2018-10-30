function setup() {
  createCanvas(480, 120);
  textSize(24);
  textAlign(CENTER);
  background(204);
  var face = rollDice();
  text(face, 160, 60);
  face = rollDice();
  text(face, 320, 60);
}
// rollDice(160, 60);
// rollDice(320, 60);
//this would be used below background to just get the numbers and draw them
//the active code gives you more flexibility... now you can use this function to change stuff and in if else statements


function rollDice(x, y) {
  var number = 1+int(random(6));
  return number;
}
  //text(number, x, y); use this line of code to show number at x and y values
  //int makes sure its an integer not a decimal
  //the 1+ makes sure it's at least one and not .5 or .2 createCanvas
  //overall - this calls a random number between 1 and 6 that is an integer
