var canvas, box1, box2, box3, box4;
var music, box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,800);

    box1 = createSprite(100, 790, 200, 10);
    box1.shapeColor = "red";
    box2 = createSprite(300, 790, 200, 10);
    box2.shapeColor = "blue";
    box3 = createSprite(500, 790, 200, 10);
    box3.shapeColor = "green";
    box4 = createSprite(700, 790, 200, 10);
    box4.shapeColor = "yellow";
    box = createSprite((random(200, 200)), 20, 20);
    box.shapeColor = "White";



    //create box sprite and give velocity

}

function draw() {
    background(0);
    //create edgeSprite



    //add condition to check if box touching surface and make it box
    drawSprites();
}
