let size = 50;
function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
  //white background
  for (let y = 1; y < 9; y++) {
    for (let x = 1; x < 9; x++){
      rect(size*x, size*y, size, size);
      fill(255);
    }
  }
  //top left corner of face
  for (let y = 2; y < 8; y++) {
    for (let x = 2; x < 8; x++){
      rect(size*x, size*y, size, size);
      fill(255, 255, 0);
    }
  }
  //face
  for (let y = 2; y < 8; y++) {
    for (let x = 2; x < 8; x++){
      rect(size*x, size*y, size, size);
      fill(255, 255, 0);
    }
  }
  //eyes
  for (let y = 3; y < 4; y++) {
    for (let x = 2; x < 4; x++){
      rect(size*x, size*y, size, size);
      fill(0);
    }
  }
  //mouth
  for (let y = 3; y < 4; y++) {
    for (let x = 6; x < 7; x++){
      rect(size*x, size*y, size, size);
      fill(255, 0, 0);
    }
  }
  //mouth
  for (let y = 5; y < 6; y++) {
    for (let x = 6; x < 7; x++){
      rect(size*x, size*y, size, size);
      fill(255, 0, 0);
    }
  }
  //mouth
  for (let y = 5; y < 6; y++) {
    for (let x = 3; x < 4; x++){
      rect(size*x, size*y, size, size);
      fill(255, 0, 0);
    }
  }
  //mouth
  for (let y = 6; y < 7; y++) {
    for (let x = 4; x < 5; x++){
      rect(size*x, size*y, size, size);
      fill(255, 0, 0);
    }
  }
  //mouth
  for (let y = 6; y < 7; y++) {
    for (let x = 5; x < 6; x++){
      rect(size*x, size*y, size, size);
      fill(255, 0, 0);
    }
  }
}
