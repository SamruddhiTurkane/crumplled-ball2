
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;

function setup() {
	var canvas = createCanvas(1350, 600);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//paper = new Paper(100,60,40,10);

	ground = new Ground(500,590,13000,10);

	dustbin = new Dustbin(1210,600);

	paper = new Paper(200, 400, 50);
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background("white");
  
  Engine.update(engine);

  paper.display();

  ground.display();

 dustbin.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position, {x:85,y:-85})
	}
}


