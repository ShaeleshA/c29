const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope ;
var fruitBody ; 
var fruitCon ;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rope = new Rope(6,{x:245,y:30})
  var fruitOptions = {
    density : 0.0018
  }

  fruitBody = Bodies.circle(300,300,15,fruitOptions)
  fruitCon = new Link(rope,fruitBody)
  Matter.Composite.add(rope.body,fruitBody)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  ground.show();
  rope.show();
  ellipse(fruitBody.position.x,fruitBody.position.y,15)
  Engine.update(engine);
  

 
   
}
