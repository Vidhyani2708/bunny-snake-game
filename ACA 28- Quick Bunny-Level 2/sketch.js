var bunny;
var carrot;
var brick1;
var brick2;
var brick4;
var brick5;
var brick6;
var brick7;
var brick8;
var brick9;
var brick10;
var brick11;
var brick12;
var snakeGroup;
function setup() {
  createCanvas(600,600);
  bunny=createSprite(40,550,10,10);
  carrot=createSprite(550,40,30,30);
  brick1=createSprite(0,400,150,15);
  brick2=createSprite(150,400,90,15);
  brick3=createSprite(270,400,90,15);
  brick4=createSprite(395,400,90,15);
  brick5=createSprite(515,400,90,15);
  brick6=createSprite(635,400,90,15)
  brick7=createSprite(50,450,90,15);
  brick8=createSprite(170,450,90,15);
  brick9=createSprite(290,450,90,15);
  brick10=createSprite(410,450,90,15);
  brick11=createSprite(530,450,90,15);
  brick12=createSprite(640,450,90,15);
  bunny.shapeColor="purple"
  carrot.shapeColor="cyan"
  brick1.shapeColor="blue"
  brick2.shapeColor="red"
  brick3.shapeColor="blue"
  brick4.shapeColor="red"
  brick5.shapeColor="blue"
  brick6.shapeColor="red"
  brick7.shapeColor="blue"
  brick8.shapeColor="red"
  brick9.shapeColor="blue"
  brick10.shapeColor="red"
  brick11.shapeColor="blue"
  brick12.shapeColor="red"
}

function draw() {
  background("black");  
  if(keyDown("up")){
    bunny.y=bunny.y-3;
  }
  if(keyDown("down")){
    bunny.y=bunny.y+3;
  }
  if(keyDown("left")){
    bunny.x=bunny.x-3;
  }
  if(keyDown("right")){
    bunny.x=bunny.x+3;
  }
  if(bunny.isTouching(brick1)){
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(brick2)){
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(brick3)){
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(brick4)){
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(brick5)){
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(brick6)){
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(brick7)){
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(brick8)){
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(brick9)){
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(brick10)){
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(brick11)){
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(brick12)){
    bunny.x=40;
    bunny.y=550;
  }
if(bunny.isTouching(carrot)){
  text("You Win",200,200);
}
generateSnakes()
for(var i=0 ; i<snakeGroup.length ; i++){
  var temp=snakeGroup.get(i)
  if(bunny.isTouching(temp)){
    bunny.x=40;
    bunny.y=550;
    temp=null
  }
}



  drawSprites()
}
function generateSnakes(){
  if(frameCount%30===0){
    console.log(frameCount)
    var snake=createSprites(600,random(70,520),random(30,120),5)
    snake.shapeColor="green"
    snake.velocityX=random(-4,4)
    snakeGroup.add(snake)
  }
}
