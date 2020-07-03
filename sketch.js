
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var circle1,dustbin1,dustbin2;
var dustbin3,ground1;



function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;
	
ground1=new Ground(600,height,1200,20);
dustbin1=new Dustbink(1000,320,70,70);
dustbin2=new Dustbinwe(500,200,70,70);
dustbin3=new Dustbinya(650,300,70,70);
circle1=new Circle(900,250,10);


	













	Engine.run(engine);
  
}


function draw() {
 background("white")
ground1.display();
circle1.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();	
  






 
 
}

function keyPressed() {
if(keyCode===UP_ARROW){

	Matter.Body.applyForce(circle1.body,circle1.body.position,{x:45,y:30})


}
}


