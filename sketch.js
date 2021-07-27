var database;
var boy,bimg


function  preload() {

bimg = loadImage("boy1.png")


  
}

function setup() {

  database = firebase.database();

  createCanvas(800,400);
  boy=createSprite(400, 200, 50, 50);
boy.addImage("yo",bimg)

}

//1.download all the image 
//2.form.js and player.js 
//3.completing the previous project
//4.display width and display hight

function draw() {
  background(255,255,255);  
  drawSprites();
}