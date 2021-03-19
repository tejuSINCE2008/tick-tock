var hr,mn,sc,HrAngle,MnAngle,ScAngle
function setup() {
  createCanvas(800,400);
 angleMode(DEGREES);
}

function draw() {
  background("black");
  translate (200,200); 
  rotate (-90) ;
  hr=hour();
  mn=minute();
  sc=second();
  ScAngle=map(sc,0,60,0,360);
  MnAngle=map(mn,0,60,0,360);
  HrAngle=map(hr%12,0,12,0,360);
  push ()
    rotate(ScAngle);
    stroke ("blue")
    strokeWeight(6)
    line (0,0,100,0)
    pop ()
    push ()
    rotate(MnAngle);
    stroke ("green")
    strokeWeight(6)
    line (0,0,75,0)
    pop ()
    push ()
    rotate(HrAngle);
    stroke ("red")
    strokeWeight(6)
    line (0,0,55,0)
    pop ()
  strokeWeight(10);
noFill();
stroke("blue");
arc (0,0,300,300,0,ScAngle);
stroke("green");
arc (0,0,280,280,0,MnAngle);
stroke("red");
arc (0,0,260,260,0,HrAngle);
  drawSprites();
}