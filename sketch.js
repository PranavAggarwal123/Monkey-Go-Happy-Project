var monkey, monkey_running;
var banana, bananaImage;
var obstacle, obstacleImage;

var obstacleGroup, bananaGroup;

var backgr, invisibleGround, backImage;

var r;

var score = 0;

function preload() {
backImage = loadImage("jungle.jpg");
  
monkey_running = 
loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
bananaImage = loadImage("banana.png");
obstacleImage = loadImage("stone.png");
  
}

function setup() {
  
  createCanvas(800, 400);
  
monkey = createSprite(50, 300, 20, 30);
monkey.addAnimation("running",monkey_running);
monkey.scale = 0.1
  
backgr=createSprite(0,0,800,400);  
backgr.addImage(backImage); 
backgr.scale=1.5; 
backgr.x=backgr.width/2; backgr.velocityX=-4;
  
invisibleGround = createSprite(400,340,800,20);
invisibleGround.visible = false;
  
monkey.depth = backgr.depth+2;;
  
obstacleGroup = new Group();
bananaGroup = new Group();
  
}

function draw() {
  
  background(255);
  
  if(backgr.x<100){ backgr.x=backgr.width/2; }
  
  console.log(monkey.y);
  if(keyDown("space") && monkey.y>=300) {
      monkey.velocityY = -12;
   }
  
  monkey.collide(invisibleGround);
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  spawnObstacles();
  
  spawnBanana();
  
  drawSprites();
  
}

function spawnObstacles() {
  if(frameCount % 80 === 0) {
    obstacle = createSprite(800,300,10,40);
    obstacle.velocityX = -4;
    obstacle.addImage(obstacleImage);
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.15;
    obstacle.lifetime = 200;
    //add each obstacle to the group
    obstacle.depth = backgr.depth+1
    obstacleGroup.add(obstacle);
  }
}

function spawnBanana() {
  if(frameCount % 80 === 0) {
    banana = createSprite(800,250,10,40);
    banana.velocityX = -4;
    banana.addImage(bananaImage);
    banana.y = Math.round(random(250, 300))
    
    //assign scale and lifetime to the obstacle           
    banana.scale = 0.05;
    banana.lifetime = 200;
    //add each obstacle to the group
    banana.depth = backgr.depth+1
    bananaGroup.add(banana);  
  }
}