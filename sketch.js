var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play";


 

function preload(){
    towerImg = loadImage("tower.png");
    doorImg = loadImage("door.png");
    climberImg = loadImage("climber.png");
    ghostImg = loadImage("ghost-standing.png");
    spookySound = loadSound("spooky.wav");
    

}

function setup() {
      createCanvas(600, 600);
      tower = createSprite(300,300);
      tower.addImage("tower",towerImg);
      tower.velocityY = 1;

  
   doorsGroup = new Group();
   climbersGroup=new Group();
   invisibleBlockGroup=new Group();

   ghost = createSprite(300,300);
   ghost.addImage(ghostImg);
   ghost.scale=0.3;
   ghost.setCollider("rectangle",0,0,130,270);
   ghost.debug=false;

  

}

  function draw() {
    background(200);
  
    
  if(gameState=="play"){
    
   

    if(tower.y > 400){
        tower.y = 300
      }

  spawnDoors();

    if (keyDown("Space")){

    ghost.velocityY=-5;

    }

  if(keyDown("left_arrow")){

    ghost.x=ghost.x-3;

  }

  if (keyDown("right_arrow")){

      ghost.x=ghost.x+3;

  }


    ghost.velocityY=ghost.velocityY+0.4;


    if(climbersGroup.isTouching(ghost)){  

      ghost.velocityY=0;
      


  }

   if(invisibleBlockGroup.isTouching(ghost)|| ghost.y >600){

    gameState="End";
  ghost.destroy();

  

  }

  drawSprites();



  }

  if(gameState=="End"){

    textSize(30);
  text("GameOver",230,240);

  

}


  }


  function spawnDoors(){

    if (frameCount % 250 ==0 ){

      door = createSprite(200,-50)
      door.addImage(doorImg);
      door.velocityY = 1;

      door.x= Math.round(random(100,500));
      door.lifetime =650;

      doorsGroup.add(door);

      climber = createSprite(200,10);
      climber.addImage(climberImg);
      climber.velocityY =1;
         climber.debug=false;


      climber.x=door.x;

      climber.lifetime= 650;

      ghost.depth=door.depth;
     ghost.depth+=1;

     

   climbersGroup.add(climber);

      invisibleBlock = createSprite(200,15,climber.width,2);
      invisibleBlock.velocityY= 1;
      invisibleBlock.x =door.x;
      invisibleBlock.lifetime=650;
      invisibleBlock.setCollider("rectangle",0,0,50,20);
      invisibleBlock.debug=false;


   invisibleBlockGroup.add(invisibleBlock);

 

}





}









