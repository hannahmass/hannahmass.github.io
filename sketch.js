function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
 
  for (let x = 0; x < width; x += 5) {
    stroke('blue')
    strokeWeight(2)
    line(x, 0, x, 400);
  }
  for (let x = 0; x < width; x += 6) {
    line(x, 0, x, 400);
    stroke('red')
    strokeWeight(3)
  }
  for (let y = 0; y < width; y += 10) {
    line(0,y,400, y)
    stroke('green')
    strokeWeight(4)
 
  }
}
