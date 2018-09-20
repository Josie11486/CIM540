function setup(){
  createCanvas(300, 300);
  background(204);
}

function draw() {
  //drawing code
  // background(204)
  // ellipse(mouseX, mouseY, 10, 10);
  // line(mouseX, mouseY, pmouseX, pmouseY);

  // var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
  // strokeWeight(weight);
  // line(mouseX, mouseY, pmouseX, pmouseY)

  // var draw_rect = true;
  // if(draw_rect) {
  //   rect(100, 100, 100, 100);
  // }
  //   else{
  //     ellipse(10, 10, 10, 10)
  //   }


// if (mouseY > 0); {
//   fill(255, 0, 0);
// }
// if (mouseX > 100) {
//   fill(0, 0, 255);
// }
// if (mouseX > 200) {
//   fill(0, 255, 0)
// }
// ellipse(mouseX, mouseY, 10, 10);


// if(mouseX < 150) {
//  fill(255, 0, 0); //red
// } else {
//  fill(0, 0, 255); //blue
// }
//
// ellipse(mouseX, mouseY, 10, 10);
// }

if(mouseY > 200) {
fill(0, 255, 0); //green
} else {
 if(mouseY > 100) {
 fill(0, 0, 255); //blue
 } else {
 fill(255, 0, 0); //red
 }
}

ellipse(mouseX, mouseY, 10, 10);
}
