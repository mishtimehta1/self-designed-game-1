var gameState="start";
function preload(){
  bgImg=loadImage("greyImg.webp");
  playerImg=loadImage("girlImg.png");
  likeImg=loadImage("likeImg.png");
  dislikeImg=loadImage("dislikeImg.png");
  goodcommentImg+loadImage("goodcomment-img.png");
  badcommentImg=loadImage("badcomment_img.webp");
  subscribeImg+loadImage("subscribe_img.webp");
  
}

function setup(){
  createCanvas(400,600)
 start=createButton("Start");
 start.position(175,520);
 start.class("startButton");
 //start=createSprite(200,550,50,50);
 
 bg=createSprite(200,300);
 bg.visible=false;
player=createSprite(200,520,50,50);
player.scale=0.5;
player.visible=false;
likeG=new Group();
dislikeG=new Group();
goodcommentG=new Group();
badcommentG=new Group();
subscribeG=new Group();
 
}

function draw(){
  background("white")
  start.mouseClicked(gamePlay);
  // if(mousePressedOver(start)){
  //   gamePlay();
  // }

 
if(gameState==="play"){
  //start.visible=false;
  bg.visible=true;
  player.visible=true;
  player.addImage(playerImg);
  bg.addImage(bgImg);
  blur.scale=0.5
  bg.velocityY=2;
 
  if(bg.y>500){
    console.log("resetting");
   bg.y=bg.height/2;
  }
  var r=Math.round(random(1,2));
if(r===1){
  spawnLikes();
}
else{
  spawnDislikes();
}
  
  
}
var g=Math.round(random(3,5));
if(g===3){
  spawnGoodcomments();
}
else{
  spawnBadcomments();
}
else{

}

drawSprites();
}
function gamePlay(){
  start.hide();
  
  gameState="play";
}
function spawnLikes(){
  if(frameCount%120===0){
    like=createSprite(random(10,390),0,20,20);
    like.scale=0.1;
    like.velocityY=2;
    like.addImage(likeImg);
    like.lifetime=300;
    likeG.add(like);
    
  }
  

}
function spawnDislikes(){
  if(frameCount%120===0){
    dislike=createSprite(random(10,390),0,20,20);
    dislike.scale=0.1;
    dislike.velocityY=2;
    dislike.addImage(dislikeImg);
    dislike.lifetime=300;
    dislikeG.add(dislike);
  }
}
function spawnGoodcomments(){
  if(frameCount%120===0){
    goodcomment=createSprite(random(10,390),0,20,20);
    goodcomment.scale=0.1;
    goodcomment.velocityY=2;
    goodcomment.addImage(goodcommentImg)
    goodcomment.lifetime=300;
    goodcomment.add(goodcomment);
    
  }
}
function spawnBadcomments(){
  if(frameCount%120===0){
    badcomment=createSprite(random(10,390),0,20,20);
    badcomment.scale=0.1;
    badcomment.velocityY=2;
    badcomment.addImage(badcommentImg)
    badcomment.lifetime=300;
    badcomment.add(badcomment);
    
  }
}
function spawnSubscribe(){
  if(frameCount%120===0){
    subscribe=createSprite(random(1,2),0,20,20);
    subscribe.scale=0.1;
    subscribe.velocityY=2;
    subscribe.addImage(subscribe)
    subscribe.lifetime=300;
    subscribe.add(subscribe);
    
  }
}
