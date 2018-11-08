
function setup() {
  createCanvas(500, 500);
  frameRate(60)
}

function draw() {
  var size = random(250)
  fill(random(255), 0, random(255), random(255));
  noStroke();
  ellipse(random(500), random(500), size, size);

}
