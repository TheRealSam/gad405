//setting up the canvas colour and size etc
function setup() {
  //fps of 60 so it runs smooth
  frameRate(60);
  createCanvas(841, 594);
  //intial background colour black
  background(0);
  //variables for random colours
  r = random(255);
  g = random(255);
  b = random(255);
}

//clicking mouse it draws circles based on speed they get bigger or smaller
function draw() {
  if(mouseIsPressed) {
    //the first part is location of circle where ever the mouse is and second bit is size
    circle(mouseX, mouseY, pmouseX, pmouseY);
  }
  //variable for text and what it says
  var t = 'Press Spacebar to clear canvas'
  textSize(20);
  //t is the text first 2 numbers position then second size of textbox
  text(t, 640, 530, 200, 200);
}
//the key is Spacebar and this clears the canvas and sets random background colour
function keyPressed() {
  if(key == " ") {
    clear();
    r = random(255);
    g = random(255);
    b = random(255);
    background(r, g, b);
  }
}

//this is the function for creating the circles
function circle(x, y, px, py) {
  //this is the speed part making the size be determined by speed of mouse
  var distance = abs(x-px) + abs(y-py);
  stroke(r, g, b);
  strokeWeight(2);
  //first set of variables for bigger circle
  r = random(255);
  g = random(255);
  b = random(255);

//second set of colours so the inner circle is different colour or else it is the same
  r2 = random(255);
  g2 = random(255);
  b2 = random(255);
  //this is the big circle
  fill(r, g, b);
  ellipse(x, y, distance, distance);
  //this is the smaller inner circle
  fill(r2, g2, b2);
  ellipse(x, y, distance/2, distance/2);
}
