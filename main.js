var bird;
var stang;

function setup() {
  createCanvas(windowWidth, windowHeight);

  bird = {
    x: 100,
    y: 100,
  
    radian: 50,
    gravity: 0,
  }

  stang = {
    x: windowWidth,
    speed: 4,

    height: random(500, windowHeight - 100),
    width: 100,
  }
}

function update() {
  bird.gravity -= 0.1;

  if (bird.y < windowHeight) {
    bird.y = bird.y - bird.gravity;
  } else if (bird.y > windowHeight-(bird.radian * 2)) {
    bird.gravity = 0;
  }

  if (bird.y < 0) {
    bird.y = 0;
  }

  
}
  
function draw() {
  update();
  background(220);
  fill(150,150,150);

  //draw bird
  circle(bird.x, bird.y, bird.radian);

  //draw stang
  rect(stang.x, windowHeight - stang.height, stang.width, stang.height);

  stang.x = stang.x - stang.speed;

  if (stang.x < 0) {
    stang.height = random(250, windowHeight - 100);
    stang.x = windowWidth;
    stang.x = stang.x - stang.speed;
  }

  if (bird.y > windowHeight - stang.height && bird.x > windowWidth - stang.x) {
    background(220);
    textSize(100);
    text("GAME OVER", windowWidth/4, windowHeight/2);
    stang.x = windowWidth;
    console.log("hit");
  }
}

function keyPressed() {
  if(bird.gravity<50){
    bird.gravity = 5;
    console.log('jamped');
  }
}


function stang() {

}
