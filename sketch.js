var ast,astImg;
var bgImg;
var flag,flagImg;
var oxy,oxyImg;
var fuel,fuelImg;
var radio,radioImg;




function preload(){
    astImg = loadImage("astraunuat1.png");
    bgImg = loadImage("background.jpg");
    oxyImg = loadImage("oxygen.png");
    flagImg = loadImage("flag.png");
    fuelImg = loadImage("flag.png");
    radioImg = loadImage("radio.png");

}


function setup(){
    createCanvas(displayWidth,displayHeight);


    ast = createSprite(displayWidth/2+50,displayHeight/2+100);
    ast.addImage(astImg);
    ast.scale = 0.4;


}


function draw(){
    background(bgImg);




 drawSprites();
}