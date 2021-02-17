const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




var engine, world;
var dartboard, dart;
var hand;
var hit10, hit10_1, hit20, hit20_1, hit50;

var score = 0;

function setup(){
    var canvas = createCanvas(1200,400);

    engine = Engine.create();

    world = engine.world;

    dartboard = new Dartboard(900, 70, 70, 70);

    dart = new Dart(250,50);

    hand = new Hands(dart.body,{x:250, y:50});

    //here is one of the variables I have tred to put next to the dartboard.
    hit10 = createSprite(750, 100, 10, 50);

}

function draw(){
background(255, 255, 255)
    
        noStroke();
        textSize(35)
        fill("black")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);

    //strokeWeight(4);

    dartboard.display();

    dart.display();

    hand.display();  
    
    
}

function mouseDragged(){
    //if (gameState!=="launched"){

        Matter.Body.setPosition(dart.body, {x: mouseX , y: mouseY});

   // }
}


function mouseReleased(){



    hand.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){

        dart.trajectory = [];

        Matter.Body.setPosition(dart.body,{x: 200, y: 50});

        hand.attach(dart.body);
    }
}

