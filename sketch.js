var path,Runner,energyDrink,coin,bomb,power;
var pathImg,RunnerImg,energyDrinkImg,coinImg,bombImg,powerImg;
var treasureCollection = 0;
var energyDrinkG,coinG,bombG,powerGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  energyDrinkImg = loadImage("energyDrink.png");
  coinImg = loadImage("coin.png");
  bombImg = loadImage("bomb.png");
  powerImg = loadImage("power.png");
  
  
}

function setup(){
  
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 5.4;


//creating boy running
Runner = createSprite(70,500,20,20);
Runner.scale=0.7;
Runner.addAnimation("sahil",RunnerImg);

  
  
energyDrinkG=new Group();
coinG=new Group();
bombG=new Group();
powerGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  Runner.x = World.mouseX;
  
  edges= createEdgeSprites();
 Runner.collide(edges[3]);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createpower();
    createenergyDrink();
    createcoin();
    createbomb();

    if (coinG.isTouching(Runner)) {
      coinG .destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (energyDrinkG.isTouching(Runner)) {
      energyDrinkG.destroyEach();
      treasureCollection=treasureCollection+100;
      
    }else if(powerGroup.isTouching(Runner)) {
      powerGroup .destroyEach();

       treasureCollection=+ 150;
      
      
    }else{
      if(bombG.isTouching(Runner)) {
        gameState=END;
        
       
         coinG.destroyEach;
         energyDrinkG.destroyEach;
        powerGroup.destroyEach;
         

        
        
        coinG.setVelocityYEach(0);
        energyDrinkG.setVelocityYEach(0);
        powerGroup.setVelocityYEach(0);
      
        
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,10,30);
  }

}

function createcoin() {
  if (World.frameCount % 200 == 0) {
  var coin = createSprite(Math.round(random(50, 350),40, 10, 10));
  coin.addImage(coinImg)
  coin.scale=0.50;
  coin.velocityY = 3;
  coin.lifetime = 150;
  coinG.add(coin);
  }
}

function createenergyDrink() {
  if (World.frameCount % 320 == 0) {
  var energyDrink = createSprite(Math.round(random(50, 350),40, 10, 10));
  energyDrink.addImage(energyDrinkImg);
  energyDrink.scale=0.20;
  energyDrink.velocityY = 3;
  energyDrink.lifetime = 150;
  energyDrinkG.add(energyDrink);
}
}

function createpower() {
  if (World.frameCount % 410 == 0) {
  var power = createSprite(Math.round(random(50, 350),40, 10, 10));
  power.addImage(powerImg);
  power.scale=0.25;
  power.velocityY = 3;
  power.lifetime = 150;
  powerGroup.add(power);
  }
}

function createbomb(){
  if (World.frameCount % 530 == 0) {
  var bomb = createSprite(Math.round(random(50, 350),40, 10, 10));
  bomb.addImage(bombImg);
  bomb.scale=0.19;
  bomb.velocityY = 3;
  bomb.lifetime = 150;
  
  }
}
