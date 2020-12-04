var car
var wall
var speed 
var weight
function setup() {
  createCanvas(1600,400);
  car = createSprite(100,200,50,50);
  weight= random(400,1500)
  speed=random(55,90)
  wall=createSprite(1500,200,60,height/2)
  wall.shapeColor=(80,80,80)
  car.velocityX=speed
}

function draw() {
  background("black");  
  if (wall.x-car.x < wall.width/2+car.width/2){
  car.velocityX=0
  var deformationOfCar = 0.5*weight*speed*speed/22500;
  if(deformationOfCar>180){
    car.shapeColor=color(255,0,0);
  }
  if(deformationOfCar<180&&deformationOfCar>100){
    car.shapeColor=color(230,230,0);
  }
  if(deformationOfCar<100){
    car.shapeColor=color(0,255,0)
  }
 }

  drawSprites();
}