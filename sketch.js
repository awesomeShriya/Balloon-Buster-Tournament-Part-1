//Create variables here
var gameState=0;
var playerCount=0;
var player,game,form;
var bows, bow1, bow2, bow3, bow4, bow5;
var allPlayers;

function preload()
{
  //load images here
  arrowImg=loadImage("images/Arrow.png");
  bowImg=loadImage("images/Bow.png");
  backgroundImg=loadImage("images/background.jpg");
}

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw() {  
  if(playerCount === 5){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}
  





