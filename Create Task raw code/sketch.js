//  Global variables
var balls = [];
var bricks = [];
var score = 0;
var mouseLoc;
var paddle;
var a=0;
var start = false;
var game = false;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(50, 0, 50);
  text("your score" + score, 60, 60)
  paddle = new Paddle (createVector (width/2,700), createVector (-.1,.1), 200,15, color(255,0,255)); //creates paddle

   loadBalls(1);
   loadBricks(20);
}
function loadBricks (numBricks){ // loads all the balls in the array and creates new balls for the array
  for (var i = 0; i < numBricks; i++ ){
    for (var row = 0; row < numBricks; row++)
    var b = 50;
    var z = 50;
    var loc = createVector(b, z);
    var rad = 50;
    var col = color(50, 70, 230);
	var brick = new Brick (loc, rad, col);
	bricks.push(brick);
}}
function loadBalls (numBalls){ // loads all the balls in the array and creates new balls for the array
  for (var i = 0; i < numBalls; i++){
    var loc = createVector(random(0,800), 20);
    var vel = createVector(random(-3,3), random(-2,2));
    var rad = 25;
    var col = color(random(0,255), random(0,255), random(0,255));
	var ball = new Ball (loc, vel,rad, col);
	balls.push(ball);
  }

}
if(start===false){
function mouseClicked() {
start=true
}
}


//  The draw function is called
function draw() {


if(start===false){
  fill(25,25,25);
  rect(200, 200, 400, 400);
  fill(150,25,230);
  rect(212, 212, 375, 375);
  fill(190,100,125);
  textSize(40);
  text("Ballz to the Wall", 280, 400);
  fill(190,100,125);
  textSize(15);
  text("Click to Start", 280, 370);


}


  if(start===true){
background(20,20,20);
text(score, 50, 50);
noStroke ();
paddle.run ();
for (var i = 0; i < bricks.length; i++){
  bricks[i].run();

}
for (var i = 0; i < balls.length; i++){
  balls[i].run();
  //balls bounce
  var ballA = balls[i];
  var y = ballA.loc.y;
  var x = ballA.loc.x;
  //distance of the paddle and ball
  var distY = abs (paddle.loc.y- y);
  if(ballA.loc.y > paddle.loc.y+200){
    game = true
    start = false
  }
  //distance of paddle ends
//  if ((distY <2) && (x>paddle.loc.x) && (x<paddle.loc.x+250)){ // allows ball to bounce off of paddle but we dont want this
  //  ballA.vel.y = -ballA.vel.y;
    var lowerEdge = paddle.loc.y + paddle.l ;//lower left paddle y coord value
    var upperEdge = paddle.loc.y //upper paddle value
    var lEdge = paddle.loc.x ; // paddle left edge x value
    var rEdge = paddle.loc.x + paddle.w ; //right edge x value

    if ((x > lEdge) && (x < rEdge) &&  (y < lowerEdge) &&  (y > upperEdge) && (ballA.vel.y > 0)){
      //fix to find if ball a is between avalue and a value and if y is between something and something.
      ballA.vel.y = -ballA.vel.y;

      score = score + 1;
    //  if(balls.length === 0){

    //  }

    } // boundaries
//     if ((x > lEdge) && (x < rEdge) &&  (y < lowerEdge) &&  (y > upperEdge) && (ballA.vel.y < 0)){
// this.vel.y = -this.vel.y
//     ballA.vel.y = -ballA.vel.y;
//       for (var i = 0; i < balls.length; i++){
//         balls.run
//
//       }
//     }
//  }
}
}
if(game===true){

    fill(25,25,25);
    rect(200, 200, 400, 400);
    fill(150,25,230);
    rect(212, 212, 375, 375);
    fill(190,100,125);
    textSize(30);
    text("Ctrl + R to restart", 280, 400);
    fill(190,100,125);
    textSize(15);
    text("u dum", 280, 370);

}}
