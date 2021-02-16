
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const  Constraint = Matter.Constraint;
var rope1,rope2,rope3,rope4,rope5;
var base;
var bob1,bob2,bob3,bob4,bob5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
base = new Ground(390,310,240,10);
bob1 = new Bob(390,450,30);
bob2 = new Bob(350,450,30);
bob3 = new Bob(310,450,30);
bob4 = new Bob(430,450,30);
bob5 = new Bob(470,450,30);

rope1 = new Rope(bob1.body,{x:390,y:310});
rope2 = new Rope(bob2.body,{x:340,y:310});
rope3 = new Rope(bob3.body,{x:280,y:310});
rope4 = new Rope(bob4.body,{x:440,y:310});
rope5 = new Rope(bob5.body,{x:490,y:310});
	Engine.run(engine);
  
  

}


function draw() {
  
  background(0);
  base.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
  
}

function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(bob3.body, {x: mouseX , y: mouseY});
  //}
}



