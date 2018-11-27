
var size;
var x, y;


function setup() {
  createCanvas(500, 500);
  frameRate(30);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  //background(random(255), random(255), random(255), random(255));
  x = random(500);
  y = random(500);
  size = random(100, 200);
  customShape();
  square();
}
  //var size = random(250)
  //fill(random(255), 0, random(255), random(255));
  //noStroke();
  //ellipse(random(500), random(500), size, size);
  //fill(random(255), random(255), 0, random(255));
  //noStroke();
  //rect(random(500), random(500), size, size);
function customShape(){
  fill(random(255), random(255), random(255));
  stroke(random(255), random(255), random(255), random(255));
  strokeWeight(5);
  ellipse(x, y, size, size);
  fill(random(255), random(255), random(255));
  stroke(random(255), random(255), random(255), random(255));
  ellipse(x, y, size/1.2, size/1.2);
  fill(random(255), random(255), random(255));
  stroke(random(255), random(255), random(255), random(255));
  ellipse(x, y, size/1.4, size/1.4);
  fill(random(255), random(255), random(255));
  stroke(random(255), random(255), random(255), random(255));
  ellipse(x, y, size/2, size/2);
  fill(random(255), random(255), random(255));
  stroke(random(255), random(255), random(255), random(255));
  ellipse(x, y, size/4, size/4);


}
function square(){
  fill(0,0,0)
//fill(random(255), random(255), random(255), random(255));
  stroke(255);
//strokeWeight(25);
  rect(x, y, size, size);
//fill(random(255), random(255), random(255), random(255));
  stroke(0);
//strokeWeight(25);
  rect(x, y, size/1.2, size/1.2);
//fill(random(255), random(255), random(255), random(255));
  stroke(255);
//strokeWeight(25);
  rect(x, y, size/1.4, size/1.4);
//fill(random(255), random(255), random(255), random(255));
  stroke(0);
//strokeWeight(25);
  rect(x, y, size/2, size/2);
//fill(random(255), random(255), random(255), random(255));
  stroke(255);
//strokeWeight(25);
  rect(x, y, size/4, size/4);
}
