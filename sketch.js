var canvas;

var music;

var box, box2, box3, box4, box5;


function preload(){

music = loadSound("music.mp3");

}


function setup(){

canvas = createCanvas(605,600);


//create 4 different surfaces

box= createSprite(random(20,555),300,25,25);

box2= createSprite(85,580,120,15);

box3= createSprite(230,580,120,15);

box4= createSprite(375,580,120,15);

box5= createSprite(520,580,120,15);

box2.shapeColor="red";

box3.shapeColor="yellow";

box4.shapeColor="green";

box5.shapeColor="purple";

box.shapeColor="white";



//create box sprite and give velocity
box.velocityX=2
box.velocityY=-3

}


function draw() {

background("black");

//create edgeSprite

edges=createEdgeSprites();



box.bounceOff(edges);

music.play();





//add condition to check if box touching surface and make it box

if(detectCollision(box,box2)){

box.velocityX=0;

box.velocityY=0;

box.shapeColor="red";

music.stop();

}

else if(detectCollision(box,box3)){

box.velocityX=0;

box.velocityY=0;

box.shapeColor="yellow";

music.stop();

}

else if(detectCollision(box,box4)){

box.velocityX=0;

box.velocityY=0;

box.shapeColor="green";

music.stop();

}

else if(detectCollision(box,box5)){

box.velocityX=0;

box.velocityY=0;

box.shapeColor="purple";

music.stop();

}

else{


// box.velocityX=4;

// box.velocityY=3.5;

box.shapeColor="white";

//music.play();


}
drawSprites();

}


function detectCollision(obj1,obj2){

if (obj1.x - obj2.x < obj1.width/2 + obj2.width/2

&& obj2.x - obj1.x < obj1.width/2 + obj2.width/2

&& obj1.y - obj2.y < obj1.height/2 + obj2.height/2

&& obj2.y - obj1.y < obj1.height/2 + obj2.height/2) {

return true;

}

else{

return false;

}


}
