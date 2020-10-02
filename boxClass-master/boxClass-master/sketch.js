const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var ground;
var mousy,zizzy;
var weak1,weak2,weak3,weak4;
var egglina;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    ground = new Ground(600,height,1200,20);
    mousy = new Piggy(810,350);
    zizzy = new Piggy(810,220);
    weak1 = new Plank(810,260,300,PI/2);
    weak2 = new Plank(810,180,300,PI/2);
    weak3 = new Plank(760,120,150,PI/7);
    weak4 = new Plank(870,120,150,-PI/7);
    egglina = new Bird(100,100);
    


}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    mousy.display();
    zizzy.display();
    weak1.display();
    weak2.display();
    weak3.display();
    weak4.display();
    egglina.display();
}
