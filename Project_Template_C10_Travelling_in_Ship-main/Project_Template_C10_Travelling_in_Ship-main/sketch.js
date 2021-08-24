var ship, ship_riding, edges
var sea, seaImage

function preload(){
   
  ship_riding = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  
  seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(1200,800);
  sea = createSprite(600,200,600,600);
  sea.addImage("sea",seaImage);

  ship = createSprite(50,160,20,50)
  ship.addAnimation("riding",ship_riding)
  ship.scale = 0.3

  edges = createEdgeSprites()

}

function draw() {
 background(180);
ship.velocityX = 2
 if(keyDown("space")&& ship.y >= 100) {
   ship.velocityY = -10;
 }

 
 ship.velocityY = ship.velocityY + 0.8

 ship.collide(edges[3])

drawSprites();
}
