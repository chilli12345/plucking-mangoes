
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var dayImage,boyImage,boy;
var basket;

function preload()
{
	dayImage=loadImage("Plucking mangoes/1.jpg");
	boyImage=loadImage("Plucking mangoes/boy.png");
	basket=loadImage("Plucking mangoes/OIP (15).png");
}

function setup() {
	createCanvas(1700, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1 = new Mangoes(1350,340,25);
	mango2 = new Mangoes(1300,400,25);
	mango3 = new Mangoes(1200,400,25);
	mango4 = new Mangoes(1400,250,25);
	mango5 = new Mangoes(1250,410,25);
	mango6 = new Mangoes(1250,360,25);
	mango7 = new Mangoes(1520,400,25);
	mango8 = new Mangoes(1300,290,25);
	mango9 = new Mangoes(1420,330,25);
	mango10 = new Mangoes(1410,400,25);
	mango11 = new Mangoes(1480,350,25);
	ground = new Ground(850,690,1700,25);
	tree = new Tree(1350,450,500,500);
	stone = new Stone(300,300,25);

	base2 = new Ground(1050,650,10,50);
	base3 = new Ground(1550,650,10,50);
	 
	launcher = new Launcher(stone.body,{x:240,y:580});
	boy = createSprite(300,635,20,20);
	boy.addImage(boyImage);
	boy.scale=0.1;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(dayImage);
  fill("black"); 
  textSize(15);
  stroke("black"); 
  text ("Shoot the mangoes into the basket, press space for a second chance",100,100);
  ground.display();
  tree.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  stone.display();
  launcher.display();

  base2.display();
  base3.display();
  image(basket,1020,570,600,120);
 
  
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);


  drawSprites(); 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
	if(keyCode === 32)
	{
		Matter.Body.setPosition(stone.body,{x:300,y:300});
		launcher.attach(stone.body);
	}
}

function detectCollision(body1,body2){
   mangoBodyPosition=body2.body.position
   stoneBodyPosition=body1.body.position

   var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,
					  mangoBodyPosition.x,mangoBodyPosition.y);
	
	if(distance<=body2.r+body1.r)
	{
		Matter.Body.setStatic(body2.body,false);
	}
}

