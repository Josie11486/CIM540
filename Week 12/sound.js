var music;

var images = [];
var questionMark;
var x = 400;
var index = 0;

function preload() {
  images[0] = loadImage('name1.jpg');
  images[1] = loadImage('name2.jpg');
  images[2] = loadImage('name3.jpg');
  questionMark = loadImage('name4.jpg');
  music = loadSound("sound name.mp3");
  music.setLoop(true);
}

function setup() {
  createCanvas(480, 240);
  frameRate(5);
  music.play();
}
