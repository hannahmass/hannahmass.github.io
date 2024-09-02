function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(155, 147, 50);
 
 let x=sin(frameCount * 0.09) * 100 + width/2;
  circle (x, height/2, 50); 
  fill('pink'); 
  
  let g=sin(frameCount * 0.1) *100 + width/2;
  {
    circle(g,height/2, 50);
    fill('orange')}
  let w=sin (frameCount * 0.08) *100 +width/2; 
  {circle (w, height/2, 50)
   fill('purple')
  }
  }
  
  
