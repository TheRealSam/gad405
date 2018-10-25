//DAT405 / GAD405
//01_ProjectSetup
//In this example we see how to create a canvas, set and display
//the frame rate of the rendering system, and use text to
//display the frame count and rate on screen

//Initialization function
function setup() {
  //Set the size of rendering window - pixels
  createCanvas(500, 300);
}

//Rendering function
function draw() {
  //Erase all canvas. Set the color to dark grey
  background(155);

  stroke(255, 0, 255);
  strokeWeight(5);
  line(35, 35, 465, 35);

  stroke(0, 255, 255);
  line(35, 35, 35, 265);

  stroke(255, 165, 0);
  line(465, 35, 465, 265);

  stroke(255, 255, 0);
  line(465, 35, 35, 265);

  stroke(144, 238, 144);
  line(35, 265, 465, 265);

  stroke(0, 255, 0);
  line(465, 265, 35, 35);
  noStroke();

  fill(0, 0, 255);
  ellipse(35, 35, 65, 65);

  fill(255, 0, 0);
  ellipse(465, 35, 65, 65);

  fill(0, 255, 0);
  ellipse(35, 265, 65, 65);

  fill(255, 255, 0);
  ellipse(465, 265, 65, 65);



}
