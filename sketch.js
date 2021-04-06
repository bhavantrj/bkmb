function setup() {
  createCanvas(800,400);
   box1 = new player
   box1.addImage (warlord)
   
 box2 = new player(10,10,)
 box3 = new player(77,10,)
 box4 = createSprite(20, 50,20,20);
 box5 = createSprite(20, 700,20,20);
 box6 = createSprite(20, 250,20,20);
 box7 = createSprite(20, 350,20,20);
 box8 = createSprite(20, 10,20,20);
 box9 = createSprite(20, 150,20,20);
 box10 = createSprite(20, 100,20,20);
 box11 = createSprite(20, 200,20,20);
 box3.scale = 0.15;
 box4.scale = 0.15;
 box5.scale = 0.15;
 box6.scale = 0.15;
 box7.scale = 0.15;
 box1.scale = 0.20;
 box2.scale = 0.15;
 box8.scale = 0.15;
 box9.scale = 0.15;
 box10.scale = 0.15;
 box11.scale = 0.15;

    box2.addImage(pump);
    box8.addImage(pump);
    box9.addImage(pump);
    box10.addImage(blazer);
    box3.addImage(blazer);
    box4.addImage(pump);
    box5.addImage(pump);
    box6.addImage(pump);
    box7.addImage(blazer);
    box11.addImage(blazer);
}
function preload (){
warlord = loadImage("pics/rpgcharacter_04.png")
blazer  = loadImage("pics/gameplayadventure_03.png")
pump    = loadImage ("pics/gameplayadventure_11.png")

}
 function getCount(){
  var playerCountRef = database.ref('playerCount');
  playerCountRef.on("value",(data)=>{
    playerCount = data.val();
  })
}

function updateCount(count){
database.ref('/').update({
    playerCount: count
  });
}
function getState(){
  var gameStateRef  = database.ref('gameState');
  gameStateRef.on("value",function(data){
     gameState = data.val();
  })

}

 function update(state){
  database.ref('/').update({
    gameState: state
  });
}


  function draw() {
    background("white");
    
  drawSprites();


    edges = createEdgeSprites();
   
  if (playerCount === 7){
      gamestate = 1 
}

function  draw ( ){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
if (box1.collide(box7)||box1.collide(box11)||box1.collide(box3)||box1.collide(box10)){
gamestate = 2 
}
if (box2.collide(box1)||box4.collide(box1)||box5.collide(box1)||box6.collide(box1)||box8.collide(box1)||box9.collide(box1)|| box11.collide(box1)){
  gamestate = 2 
  }
  if (gamestate=0){
    
  }

  if (keyDown("down")) {
    box1.velocityY = 2;
    box1.velocityX = 0;
   }
   if (keyDown("up")) {
    box1.velocityY = -2;
    box1.velocityX = 0;
   }
   if (keyDown("right")) {
    box1.velocityX = 2;
    box1.velocityY = 0;
   }
   if (keyDown("left")) {
    box1.velocityY = 0;
    box1.velocityX = -2;
   }
    if (box1.isTouching(edges)) {
      box1.bounceOff(edges);
    }
    if (box1.isTouching(box3)) {
      box3.bounceOff(box1);
      box3.collide(box1);
    }
    if (box3.isTouching(edges)) {
      box3.bounceOff(edges);
    } 
      if (box1.isTouching(box4)) {
      box4.bounceOff(box1);
      box1.collide(box4);
    }
    if (box4.isTouching(edges)) {
      box4.bounceOff(edges);
    }
      if (box1.isTouching(box5)) {
      box5.bounceOff(box1);
      box1.collide(box5);
    }
    if (box5.isTouching(edges)) {
      box5.bounceOff(edges);
    }
      if (box1.isTouching(box6)) {
      box6.bounceOff(box1);
      box1.collide(box6);
    }
    if (box6.isTouching(edges)) {
      box6.bounceOff(edges);
    }
        if (box1.isTouching(box7)) {
      box7.bounceOff(box1);
      box1.collide(box7);
    }
    if (box7.isTouching(edges)) {
      box7.bounceOff(edges);
    }
          if (box1.isTouching(box11)) {
      box11.bounceOff(box1);
      box1.collide(box11);
    }
    if (box11.isTouching(edges)) {
      box11.bounceOff(edges);
    }
  }
  
  

