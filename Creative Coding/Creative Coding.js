
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
    variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
  }
}
function keyPressed() {
  if(keyCode === LEFT_ARROW) {
    clear();
    r = random(255);
    g = random(255);
    b = random(255);
    background(r, g, b);
  }
}

function variableEllipse(x, y, px, py) {
  var speed = abs(x-px) + abs(y-py);
  stroke(10);
  r = random(255);
  g = random(255);
  b = random(255);
  fill(r, g, b);
  ellipse(x, y, speed, speed);
}
