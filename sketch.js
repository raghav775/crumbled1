
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1,paperob;
var log1,log2,log3;
function preload()
{
	
}

function setup() {
createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1= new ground(400,600,1900,40);
log1=Bodies.rectangle(1100,560,250,20,{isStatic:true});
World.add(world,log1)

log2=Bodies.rectangle(1000,550,30,70,{isStatic:true});
World.add(world,log2)

log3=Bodies.rectangle(1200,550,30,70,{isStatic:true});
World.add(world,log3)

paperob=new paper(200,450,40)	
 
}


function draw() {
  
  background(0);
  Engine.update(engine)
  rectMode(CENTER)
  ground1.display();
  paperob.display();
  rect(log1.position.x,log1.position.y,250,20);
  rect(log2.position.x,log2.position.y,30,70);
  rect(log3.position.x,log3.position.y,30,70);
  drawSprites();
 
}

function keyPressed (){
	if (keyCode === UP_ARROW) {
		
		Matter.Body.applyForce(paperob.body,paperob.body.position,{x:85,y:-85});
	}
}

