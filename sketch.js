var canvas 
var mouse, mouseImg1,mouseImg2;
var cat, catImg1,catImg2;

function preload() {
    background = loadImage("garden.png");
    mouseImg1= loadAnimation("mouseOne.png");
    mouseImg2=loadAnimation("mouseTwo.png",);
    mouseImg3= loadAnimation("mousethree.png");
    mouseImg4=loadAnimation("mousefour.png");
    catImg1=loadAnimation("catOne.png");
    catImg2= loadAnimation("catTwo.png","catThree.png");
    catImg3=loadAnimation("catThree.png");
    catImg4=loadAnimation("catFour.png");

}

function setup(){
    createCanvas(1000,800);
    
    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.15;

}

function draw() {
     background(bg);

    if(mouse.x - cat.x < (mouse.width - cat.width)/2)
    { 
        mouse .velocityX=0;
        mouse .addAnimation("mouseLastImage", mouseImg3);
        mouse .x =300;
        mouse.scale=0.2;
        mouse.changeAnimation("mouseLastImage");
        cat.addAnimation(" catLastImage",  catImg3);
        cat.scale=0.13;
        cat.changeAnimation(" catLastImage");
    }  
    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        mouse.velocityX = -5; 
        mouse.addAnimation("mouseRunning", mouseImg2);
        mouse.changeAnimation("mouseRunning");
        
        cat.addAnimation(" catTeasing",  catImg2);
        cat.frameDelay = 25;
        cat.changeAnimation(" catTeasing");
    }
}
    
    


