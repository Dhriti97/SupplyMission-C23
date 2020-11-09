var helicopterIMG, helicopterSprite, packageSprite,packageIMG,red1Sprite,red2Sprite,red3Sprite;
var packageBody,ground,red1Body,red2Body,red3Body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
	
	red1Sprite=createSprite(260,620,20,80);
	red1Sprite.shapeColor="red";
	red2Sprite=createSprite(360,650,210,20);
	red2Sprite.shapeColor="red";
	red3Sprite=createSprite(470,620,20,80);
	red3Sprite.shapeColor="red";
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.74, isStatic:true});
	World.add(world, packageBody);
	
	red1Body = Bodies.rectangle(260,620,20,80,{isStatic:true});
	World.add(world,red1Body);

	red2Body = Bodies.rectangle(360,650,210,20,{isStatic:true});
	World.add(world,red2Body);

	red3Body = Bodies.rectangle(470,620,20,80,{isStatic:true});
	World.add(world,red3Body);
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  
  packageSprite.collide(red2Sprite);



  keyPressed();
  drawSprites();
  
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false);
    
  }
}



