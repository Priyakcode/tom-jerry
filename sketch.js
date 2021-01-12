var tom, tom_running;
var jerry, jerry_running;
var garden, gardenImage;
var Tom_Score, Jerry_Survival_Time;

function preload(){
  
 tom1     = loadAnimation("tomOne.png"); 
 tom2= loadAnimation("tomTwo.png","tomThree.png");
 tom3= loadAnimation("tomFour.png");
 jerry1  = loadAnimation("jerryOne.png");
 jerry2= loadAnimation("jerryTwo.png","jerryThree.png");
 jerry3= loadAnimation("jerryFour.png");
  gardenImage     = loadImage("garden.png");
}

function setup() {
  createCanvas(600, 400);
  
 tom = createSprite(500,300,50,50);
 tom.addAnimation("tom",tom1);
 tom.scale = 0.15;

 jerry = createSprite(100,300,50,50);
 jerry.addAnimation("jerry",jerry1);
 jerry.scale = 0.1;
  
  Jerry_Survival_Time = 0;
  Tom_Score           = 0;
}

function draw() {

background(gardenImage);
  
stroke("black");
  text("Jerry Survival Time: "+ Jerry_Survival_Time, 200,50);
  Jerry_Survival_Time = Jerry_Survival_Time + Math.round(getFrameRate()/60);
  
  if (keyDown("LEFT_ARROW")) {
    tom.velocityX=-3;
    tom.addAnimation("tom_running",tom2);
    tom.changeAnimation("tom_running");
    jerry.addAnimation("jerry_teasing",jerry2);
    jerry.changeAnimation("jerry_teasing");
  }
    
  if(tom.x-jerry.x<tom.width/2-jerry.width/2) {
    Tom_Score=Tom_Score+1;
    tom.velocityX=0;
    tom.x = 500;
    tom.y = 300;
    tom.addAnimation("tomLastImage",tom3);
    tom.changeAnimation("tomLastImage");
    jerry.addAnimation("jerryLastImage",jerry3);
    jerry.changeAnimation("jerryLastImage");
  }
  
  drawSprites();
}