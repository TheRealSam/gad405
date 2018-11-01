//console.log("X: " + x + "Y: " + y)
let size = 50;
let size1 = 30;


function setup() {
  createCanvas(500, 500);
  frameRate(100)
}

function draw() {
  stroke(random(255),random(255), random(255));
  strokeWeight(2);
  background(255, 0, 0);
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++){
      rect(size*x, size*y, size, size);
      fill(random(255),random(255), random(255));
      stroke(random(255),random(255), random(255));
      strokeWeight(5);
      rect(size*x+10, size*y+10, size, size);
      fill(random(255),random(255), random(255));
      rect(size*x+20, size*y+20, size, size);
      fill(random(255),random(255), random(255));
      rect(size*x+30, size*y+30, size, size);
      fill(random(255),random(255), random(255));
      rect(size*x+40, size*y+40, size, size);
      fill(random(255),random(255), random(255));

    }
}
for (let y = 0; y < 10; y++) {
  for (let x = 0; x < 10; x++){
    rect(size*x-50, size*y-50, size1, size1);
    fill(random(255),random(255), random(255));
    rect(size*x-40, size*y-40, size1, size1);
    fill(random(255),random(255), random(255));
    rect(size*x-30, size*y-30, size1, size1);
    fill(random(255),random(255), random(255));
    rect(size*x-20, size*y-20, size1, size1);
    fill(random(255),random(255), random(255));
    rect(size*x-10, size*y-10, size1, size1);
    fill(random(255),random(255), random(255));
  }
}
}
