//variable-
var path,sonic,gold,gold1,img,enemy2;
var pathImg,sonicImg,goldImg,gold1Img,imgImg,enemy2Img;
var treasureCollection = 0;
var goldG,gold1G,imgG,enemy2Group;

//Game States-
var PLAY=1;
var END=0;
var gameState=1;

//preload-
function preload(){
  // jpg problem ?
  pathImg = loadImage("bg.jpg");
  sonicImg = loadAnimation("sonic.png");
  goldImg = loadImage("gold.png");
  gold1Img = loadImage("gold1.png");
  imgImg = loadImage("img.png");
  enemy2Img = loadImage("enemy2.png");
 endImg = loadAnimation("gameOver.png"); 
}

//setup-
function setup(){
  
  createCanvas(400,600);
//background
  
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//sonic 
sonic = createSprite(70,580,20,20);
sonic.addAnimation("SonicRunning",sonicImg);
sonic.scale=0.08;
  

gold=new Group();
gold1G=new Group();
imgG=new Group();
enemy2Group=new Group();

}

//draw-
function draw() {

  if(gameState===PLAY){
  background(0);
  sonic.x = World.mouseX;
  
  edges= createEdgeSprites();
  sonic.collide(edges);
  
  //code the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createGold();
    createGold1();
    createImg();
    createEnemy2();

    if (sonic.isTouching(goldG)) {
      goldG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (gold1G.isTouching(sonic)) {
      gold1G.destroyEach();
      treasureCollection=treasureCollection+100;
      
    }else if(imgG.isTouching(sonic)) {
      imgG.destroyEach();
      treasureCollection= treasureCollection + 150;
      
    }else{
      if(sonic.isTouching(enemyGroup2)) {
        gameState=END;

        gameover = createSprite(width/2,height-400,20,400);
gameover.addAnimation("gameOver.png",endImg);
gameover.scale=1;
       
        
        goldG.destroyEach();
        gold1G.destroyEach();
        imgG.destroyEach();
        enemy2Group.destroyEach();
        
        goldG.setVelocityYEach(0);
        gold1G.setVelocityYEach(0);
        imgG.setVelocityYEach(0);
        enemy2Group.setVelocityYEach(0);


  
    
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,10,30);
  }

}

function createGold() {
  if (World.frameCount % 200 == 0) {
  var gold = createSprite(Math.round(random(50, 350),40, 10, 10));
  gold.addImage(goldImg);
  gold.scale=0.12;
  gold.velocityY = 3;
  gold.lifetime = 150;
  goldG.add(gold);
  }
}

function createGold1() {
  if (World.frameCount % 320 == 0) {
  var gold1 = createSprite(Math.round(random(50, 350),40, 10, 10));
  gold1.addImage(gold1Img);
  gold1.scale=0.03;
  gold1.velocityY = 3;
  gold1.lifetime = 150;
  gold1G.add(gold1);
}
}

function createImg() {
  if (World.frameCount % 410 == 0) {
  var img = createSprite(Math.round(random(50, 350),40, 10, 10));
  img.addImage(imgImg);
  img.scale=0.13;
  img.velocityY = 3;
  img.lifetime = 150;
  imgG.add(img);
  }
}

function createEnemy2(){
  if (World.frameCount % 530 == 0) {
  var enemy2 = createSprite(Math.round(random(50, 350),40, 10, 10));
  enemy2.addImage(enemy2Img);
  enemy2.scale=0.1;
  enemy2.velocityY = 3;
  enemy2.lifetime = 150;
  enemy2Group.add(enemy2);
  }
}
