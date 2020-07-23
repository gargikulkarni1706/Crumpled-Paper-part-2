
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var dustbin, paper; 
var ground;
var box1;

function setup() {
  var canvas = createCanvas(1500, 700);

 	engine = Engine.create();
	world = engine.world;

	box1 = new Dustbin(1300, 550);
  //box2 = new Dustbin(1200, 530, 100, 20, PI/2);
	//box3 = new Dustbin(1400, 630, 100, 20, PI/2);
	ground = new Ground(width/2, 690, 1500, 20)
  paper = new Paper(50, 500);

   
 } 


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  box1.display();
  //box2.display();
  //box3.display();
  ground.display();
  paper.display();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body, paper.body.position, {x:125, y:-125})
  }
}