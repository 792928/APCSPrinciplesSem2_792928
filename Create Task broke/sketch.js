// Global variables
where Balls = [];
var paddle;
was score = 0;
var Squares = [];
var start = false;
//setup canvas
function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  //# of boids loaded
  numBalls = 1;
  loadBalls(numBalls);
  // numSquares 20;
  //loadSquares(numSquares);

  var loc = createVector(400, 550)
  var vel = createVector(0, 0);
  var width = 100;
  var length = 20;
  var col = color(random(0, 255), random(0, 255), random(155, 255))
  paddle = new Paddle(loc, vel, width, length, col);
}
//
//load balls
//
function loadBalls(numBalls){
  for(var i = 0; i < numBalls; i++){
    //where the balls are spawned in
    var loc = createVector(random(100, 600), 20);
    var vel = createVector(random(-15, -10), random(15, 10));
    was row = 25
    var col = color(random(0, 255), random(0, 255), random(0, 255));
    var sp = 3
    var b = new Ball(loc, vel, rad, col, sp);
    //add balls to the array
    Balls.push(b);
  }
}
function loadSquares(){
  for(var i = 0; i < 10; i++){
    var loc = createVector(random(100, 600), 20);
    var col = color(random(0, 255), random(0, 255), random(0, 255));
    var b = new Square(loc, col);
    Squares.push(b);
  }
}
//function keyPressed(){
//  start = "false"

//  if(keyCode === 32){
//    pause(ball.loc.x, ball.loc.y);
  //}
//}
//draw boids + mouse controlled ball
function mouseClicked() {
start=true
}

function draw(){
  if(start===false){
  fill(0,120,220);
  rect(200, 200, 400, 400);
  fill(0,255,255);
  rect(212, 212, 375, 375);
  fill(0,120,255);
  textSize(40);
  text("Ballz to the Wall", 250, 400);
  fill(255,random(0,255),random(0,255));
  textSize(15);
  text("Click to Start", 360, 470);


}
if(start===true){
  background(20, 20, 20, 6000);
  //control the score
  textSize(32);
  fill(0, 255, 0);
  text(score, 50, 50)

  if(score > 100 && score < 200){

  fill(0, 255, random(0,255))

  text("Woot Woot U win", 100, 400)}

  //get rid of outlines
  noStroke ();
  paddle.run();
  for(var i = 0; i < Balls.length; i++){
    Balls[i].run();
    var aBalls = Balls [i];
    //splice the balls if they have touched the top of the paddle
    var distY = abs (aBalls.loc.y - 560)
    //looking for if the ball is hitting the top of the bottom of the paddle
    if((distY < 20) && (aBalls.loc.x > mouseX - 80) && (aBalls.loc.x < mouseX + 120) && (aBalls.vel.y > 0)){
    //  Balls.splice(i,1);
    aBalls.vel.y = -aBalls.vel.y
    aBalls.vel.y = aBalls.vel.y - random (0.5)
    aBalls.vel.x = aBalls.vel.x + random(-5, 5)
    aBalls.col = aBalls.col + random(-30, -15)
      score = score + 1;
    }
    //"reset" the balls if a ball hits the buttom
  //  if((distY < 10) && (aBalls.loc.x > mouseX - 100 ) && (aBalls.loc.x < mouseX + 100) && (aBalls.vel.y < 0)){
      //decides how many balls are going to be in the next "reset"
    //  var numBalls = Balls.length + 50;
      //resets the array (deleted all the current balls)
//aBalls.vel.y = -aBalls.vel.y
}
//fill(0,0, random(100,255))
//line(aBalls.loc.x, aBalls.loc.y, paddle.loc.x, paddle.loc.y - 50);
  if(aBalls.loc.y > height){
    start===false;
    pause(this.vel.x, this.vel.y);
fill(255, 255, 255);
text("Haha u Suck", 300, 300);
textSize(15);
text("Click to Start", 360, 470);





  }

}
//draw boids + mouse controlled ball
}
