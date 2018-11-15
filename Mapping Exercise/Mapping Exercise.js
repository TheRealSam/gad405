
function setup() {
  frameRate(60);
  createCanvas(500, 500);
}

function draw() {
  var x1 = map(mouseX, 0, 500, 0, 255);
  var y1 = map(mouseY, 0, 500, 0, 255);
  var x2 = map(mouseX, 0, 500, 255, 0);
  var y2 = map(mouseY, 0, 500, 255, 0);
  var c1 = (255, 0, 0, x1);
  var c2 = (0, 0, 255, y1);
  var c3 = (0, 255, 0, x2);
  var c4 = (255, 255, 0, y2);
  background(0);
  fill(c1, 0, 0);
  rect(0, 0, 250, 250);
  fill(0, 0, c2);
  rect(250, 250, 250, 250);
  fill(0, c3, 0);
  rect(250, 0, 250, 250);
  fill(c4, c4, 0);
  rect(0, 250, 250, 250);

}
