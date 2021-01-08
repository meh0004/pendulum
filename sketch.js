const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
var sling;


function setup() {
	createCanvas(3000,800);
 canvas = createCanvas(windowWidth / 2, windowHeight / 1.5);
    pendulum1 = new pendulum(90,100,40,40); 
	pendulum2 = new pendulum(90,100,40,40);
	pendulum3 = new pendulum(90,100,40,40);
	pendulum4 = new pendulum(90,100,40,40);
	pendulum5 = new pendulum(90,100,40,40);
	sling = new Sling(ball.body,{x:500,y:50});
	
 let canvasmopuse = Mouse.create( canvas.elt);
 canvasmopuse.pixelDensity();
 let options = {
	 mouse: canvasmouse
 };
 mConstraint = MouseConstraint.create(engine, options);
 World.add(world,mConstraint);
}

function draw() {
	background("black"); 
	engine = Engine.create();
	world = engine.world; 
	pendulum1.display();
	pendulum2.display();	
	pendulum3.display();
	pendulum4.display();
	pendulum5.display();
	sling.display();

}

function mouseDragged() {
	Matter.Body.setPosition(pendulum1.body,{ x: mouseX, y: mouseY });
}