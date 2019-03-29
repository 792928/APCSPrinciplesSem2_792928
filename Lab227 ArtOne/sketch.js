// Dean Davis



//  Global variables
var b1;
var balls = [];
var toggle=true;
var opacity=2;
// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  loadBalls(6);  //  !!!!!!!!!!  this is a function call
  b1 = new Ball(createVector(width/2, height/2), createVector(2,5),
  25,
  color(255,0,0));
  loadBalls(10);
}

function draw() {
  if(toggle){
    background(20,20,20,opacity);

    b1.run();
    for(var i=0; i<balls.length; i++){
      balls[i].run();
  }


  }

}

function loadBalls(numBalls){

    for(var i = 0; i < numBalls; i++){
        var loc = createVector(random(width), random(height));
        var vel = createVector(random(-3,3), random(-3,3));
        var radius = random(10,20);
        var col = color(random(255), random(255), random(255),10);
        balls.push(new Ball(loc, vel, radius, col));

    }
console.log(balls);
}
function mousePressed(){
  toggle=!toggle
}
