
function setup() {
  frameRate(60);
  createCanvas(1000, 600);
  background(0);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  if(mouseIsPressed) {
    circle(mouseX, mouseY, pmouseX, pmouseY);
    circle(mouseX/2, mouseY, pmouseX/2, pmouseY);
  }
}
function keyPressed() {
  if(key == " ") {
    clear();
    r = random(255);
    g = random(255);
    b = random(255);
    background(r, g, b);
  }
}

function circle(x, y, px, py) {
  var distance = abs(x-px) + abs(y-py);
  stroke(r, g, b);
  strokeWeight(2);
  r = random(255);
  g = random(255);
  b = random(255);

  r2 = random(255);
  g2 = random(255);
  b2 = random(255);
  fill(r, g, b);
  ellipse(x, y, distance, distance);
  fill(r2, g2, b2);
  ellipse(x, y, distance/2, distance/2);
}
