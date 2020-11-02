const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall;
var box1, box2, box3, ground;

function setup() {
    createCanvas(800, 700);

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    paperBall = new Paper(50, 220);
    box1 = new Trashcan(600, 650, 200, 50);
    box2 = new Trashcan(490,620,50,100);
    box3 = new Trashcan(710,620,50,100);
    
    ground = new Trashcan(400, 670, 800, 40);
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);
  paperBall.display();
  box1.display();
  box2.display();
  box3.display();
  ground.display();
}
function keyPressed() {
    if(keyCode == 38) {
        Matter.Body.applyForce(paperBall.body, paperBall.body.position,{x: 55, y:-55});
    }
}
