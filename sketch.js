
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = Engine.world;
  
   var ball_options = {
    isStatic: false,
    restitution: 0.3,
    friction: 0
  }
   var ground_options = {
     isStatic: true
   };
  
  
  ground = Bodies.rectangle(200,300,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

//Fun
function draw() {
  background(51);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);

	if(keyWentDown("up_arrow")){
		// ball.applyForce(ball.Body,0,0,0,)
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.5,y:0});
	}
  
  
}

