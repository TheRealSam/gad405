
function setup() {
  frameRate(60);
  createCanvas(1000, 600);
  background(0);
}

function draw() {
  variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
}

function variableEllipse(x, y, px, py) {
  var speed = abs(x-px) + abs(y-py);
  stroke(speed);
  fill(random(255), random(255), random(255));
  ellipse(x, y, speed, speed);
}
