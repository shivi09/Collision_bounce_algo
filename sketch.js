var fixedRect, movingRect, object, ob1,ob2,edges;

function setup() {
    createCanvas(1200, 800);
    fixedRect = createSprite(600, 400, 50, 80);
    fixedRect.shapeColor = "green";
    fixedRect.debug = true;
    movingRect = createSprite(400, 200, 80, 30);
    movingRect.shapeColor = "green";
    movingRect.debug = true;
    object = createSprite(600, 200, 80, 30);
    object.shapeColor = "green";
    object.debug = true;
    ob1 = createSprite(0, 400, 80, 80);
    ob2 = createSprite(350,0, 80, 80);
    ob1.velocityX=2;
    ob1.velocityY = -2;
    ob2.velocityX =-2;
    ob2.velocityY = 2;
  
}

function draw() {
    background(0, 0, 0);
    movingRect.x = World.mouseX;
    movingRect.y = World.mouseY;

   if( isTouching(movingRect, object,90)){
     movingRect.shapeColor = "red";
        object.shapeColor = "red";
   }
   else{
      movingRect.shapeColor = "green";
        object.shapeColor = "green";
   }
    console.log(ob1.velocityX ,ob1.velocityY ,ob2.velocityX, ob2.velocityY )
    bounceOff(ob1,ob2);
    drawSprites();
}

function isTouching(a, b){
   
    if (a.x - b.x < b.width / 2 + a.width / 2 && b.x - a.x < b.width / 2 + a.width / 2
        && a.y - b.y < b.height / 2 + a.height / 2 && b.y - a.y < b.height / 2 + a.height / 2) {
       
        return true;
    }
    else {
      
        return false;
    }
}

function bounceOff(a, b) {
  
   if ((a.x - b.x == b.width / 2 + a.width / 2 || b.x - a.x == b.width / 2 + a.width / 2)
        && (a.y - b.y == b.height / 2 + a.height / 2 || b.y - a.y == b.height / 2 + a.height / 2)) {
        a.velocityY = -a.velocityY;
        b.velocityY = -b.velocityY;
        a.velocityX = -a.velocityX;
        b.velocityX = -b.velocityX;
    }
    else if (a.x - b.x <= b.width / 2 + a.width / 2 && b.x - a.x <= b.width / 2 + a.width / 2
        && (a.y - b.y == b.height / 2 + a.height / 2 || b.y - a.y == b.height / 2 + a.height / 2)) {

        a.velocityY = -a.velocityY;
        b.velocityY = -b.velocityY;
    }
    else if ((a.x - b.x == b.width / 2 + a.width / 2 || b.x - a.x == b.width / 2 + a.width / 2)
        && a.y - b.y <= b.height / 2 + a.height / 2  && b.y - a.y <= b.height / 2 + a.height / 2) {

        a.velocityX = -a.velocityX;
        b.velocityX = -b.velocityX;
    }
    
}
