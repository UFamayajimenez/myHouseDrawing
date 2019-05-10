function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(107,207, 232);
  drawGrass();
  drawHouse();

  fill(255, 255, 98);
  noStroke();
  circle(0, 0, 75);
  
}


function drawHouse(){
  
  fill(235, 109 , 100); //base
  square(100, 200, 200);
  
  fill(145, 31, 31);
  rect(170, 300, 70, 100); //door
  
  triangle(100, 200, 300, 200, 200, 100); //roof
  
}





function drawGrass(){
  
   fill(181, 255, 131);
  
  var x = 0;
  var y = 25;
  var t = 10;
  
  
  for(var i = 0; i < 16; i++){
  
    triangle(x,399, y, 399, t, 380)
    
    x+=25;
    y+= 25;
    t+= 25;
  }
  
}