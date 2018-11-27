
var size;
function setup() {
  frameRate(60);
  createCanvas(500, 500);
}

function draw() {
  var y1 = map(mouseY, 0, height, 0, 255);
  var x1 = map(mouseX, 0, width, 0, 255);
  var y2 = map(mouseY, 0, height, 255, 0);

  var c1 = color(255, 215, 0);
  var c2 = color(255, 20, 147, y1);
  var c3 = color(255, 20, 147, x1);
  var c4 = color(0, 255, 255, y2);

  size = 50;
  background(0);

  for (let y = 0; y < height; y+=size) {
    for (let x = 0; x < width; x+=size){

      if(mouseX>x && mouseX<x+size && mouseY>y && mouseY<y+size) fill(c1);
      else if (mouseX>x && mouseX<x+size && mouseX < width) fill(c2);
      else if (mouseY>y && mouseY<y+size && mouseY < height) fill(c3);
      else fill(c4);
      rect(x, y, size, size);

      }

    }
  }
