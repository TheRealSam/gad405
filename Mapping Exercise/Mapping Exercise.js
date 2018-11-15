
function setup() {
  frameRate(60);
  createCanvas(500, 500);
}

function draw() {
  var x1 = map(mouseX, 0, 500, 0, 255);
  var y1 = map(mouseY, 0, 500, 0, 255);
  var x2 = map(mouseX, 0, 500, 255, 0);
  var y2 = map(mouseY, 0, 500, 255, 0);
  var c1 = color(255, 0, 0, x1);
  var c2 = color(0, 0, 255, y1);
  var c3 = color(0, 255, 0, x2);
  var c4 = color(255, 255, 0, y2);
  background(0);
  fill(c1);
  rect(0, 0, 250, 250);
  fill(c2);
  rect(250, 250, 250, 250);
  fill(c3);
  rect(250, 0, 250, 250);
  fill(c4);
  rect(0, 250, 250, 250);

}
