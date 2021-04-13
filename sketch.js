var backgroundImg
var score = 0
var bunnyGroup
function preload(){
  backgroundImg = loadImage("Images/bg.jpg")
  hammerImg = loadImage("Images/hammer.png")
  bunnyImg = loadImage("Images/bunny.png")
}


function setup() {
  createCanvas(800,500);
  
  hole1 = createSprite(200,200,100,100)
  hole2 = createSprite(400,200,100,100)
  hole3 = createSprite(600,200,100,100)
  hole1.shapeColor = "black"
  hole2.shapeColor = "black"
  hole3.shapeColor = "black"
  hole4 = createSprite(200,400,100,100)
  hole5 = createSprite(400,400,100,100)
  hole6 = createSprite(600,400,100,100)
  hole4.shapeColor = "black"
  hole5.shapeColor = "black"
  hole6.shapeColor = "black"

  hammer = createSprite(0,0,100,100)
  hammer.addImage(hammerImg)
  hammer.scale = 0.1

  bunnyGroup = createGroup()
}

function draw() {
  background(backgroundImg); 
  hammer.x = mouseX
  hammer.y = mouseY
  if(frameCount%30 === 0){
  bunnyAppear()
  }
  for(var i = 0; i<bunnyGroup.length; i++){
    if(bunnyGroup.get(i).isTouching(hammer)){
      bunnyGroup.get(i).destroy()
      score++
    }
  }
  
  drawSprites()
  fill("black")
  textSize(24)
  text("Score : " + score, 650, 40)
}

function bunnyAppear(){
  
    bunny = createSprite(200,200,50,50)
    bunny.addImage(bunnyImg)
    bunny.scale = 0.1
    bunny.lifetime = 20
    bunnyGroup.add(bunny)
    var randomNum = Math.round(random(1,6))
    console.log(randomNum)
    switch(randomNum){
      case 1 : bunny.x = 200
      break;
      case 2 : bunny.x = 400
      break;
      case 3 : bunny.x = 600
      break;
      
    }
    var randomNum2 = Math.round(random(1,2))
    console.log(randomNum2)
    switch(randomNum2){
      case 1 : bunny.y = 200
      break;
      case 2 : bunny.y = 400
      break;
      
    }
}