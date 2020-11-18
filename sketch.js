const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var g,b1,b2,b3,b4,b5;
var p1,p2;
var B;
var L1,L2,L3,L4;
function setup() {
  createCanvas(1200,400);
 engine=Engine.create();
 world=engine.world;
g=new ground(600,400,1200,20);
b1=new box(700,320,70,70);
b2=new box (920,320,70,70);
p1=new pig(810,350);
L1=new log(810,260,300,20,PI/2);
b3=new box(700,240,70,70);
b4=new box(920,240,70,70);
p2=new pig (810,220);
L2=new log (810,180,300,20,PI/2);
b5=new box (810,160,70,70);
L3=new log(760,120,150,20,PI/7);
L4=new log(870,120,150,20,-PI/7);



B=new bird(100,100);
}

function draw() {
  background(0);  
  Engine.update(engine);
 g.display();

 b1.display();
 b2.display();
 p1.display();
 L1.display();
 b3.display();
 b4.display();
 p2.display();
 L2.display();
 b5.display();
L3.display();
 L4.display();
 
 B.display();
}