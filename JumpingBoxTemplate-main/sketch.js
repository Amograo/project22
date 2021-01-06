var canvas;
var rect1,rect2,rect3,rect4;
var box;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
  rect3 = createSprite(100, 550, 100, 30);
  rect3.shapeColor = "green";
  rect3.debug = true;
  rect4 = createSprite(250,550,100,30);
  rect4.shapeColor = "red";
  rect4.debug = true;

  rect1 = createSprite(400, 550, 100, 30);
  rect1.shapeColor = "blue";
  rect1.debug = true;
  rect2 = createSprite(550,550, 100, 30);
  rect2.shapeColor = "yellow";
  rect2.debug = true;


    //create box sprite and give velocity
    box = createSprite(700, 550, 30, 30);
    box.shapeColor = "orange";
    box.velocityX = -2;

}

function draw() {
    background(0);
   // create edgeSprit
   if(iSTouching(box,rect1) ){
    box.shapeColor = "blue";
 }
 else if(iSTouching(box,rect2)){
    box.shapeColor("yellow")
 }
 else if(iSTouching(box,rect3)){
    box.shapeColor("green")
 }
 else if(iSTouching(box,rect4)){
    box.shapeColor("red")
}
else{
    rect2.shapeColor = "yellow";
    rect1.shapeColor = "blue";
    rect3.shapeColor = "green";
    rect4.shapeColor = "red";
    box.shapeColor = "orange";

}


    //add condition to check if box touching surface and make it box

    drawSprites();
}

function iSTouching(object1,object2){

    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object2.height/2) {
  
        return true;
     
    }
    else {
     
  
      return false;
   }
  }
