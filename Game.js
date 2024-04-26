const gameState = {}

function preload() {
  this.load.image('codey', 'https://content.codecademy.com/courses/learn-phaser/codey.png');
}

function create() {
  gameState.codey = this.add.sprite(150, 200, 'codey')
  // Set cursor keys here!
  gameState.cursors = this.input.keyboard.createCursorKeys();
  gameState.inertie = 0;
}

function update() {
  let speed = 2 + gameState.inertie;
  let isDown = false
  // Update based on keypress here!
  if (gameState.cursors.right.isDown) {
    gameState.codey.x += speed; 
   isDown = true;
    } 
   if (gameState.cursors.left.isDown) {
    gameState.codey.x -= speed;
    isDown = true;}
   if (gameState.cursors.up.isDown) {
    gameState.codey.y -= speed;
    isDown = true;}
   if (gameState.cursors.down.isDown) {
    gameState.codey.y += speed;
    isDown = true;}
    if (isDown === true) {
      gameState.inertie += 0.1
    }
    else {
      gameState.inertie = 0
      }
    if (gameState.codey.x > 475) {
      gameState.codey.x = -75
    }
    if (gameState.codey.x < -75)  {
      gameState.codey.x = 475;
    }
    if (gameState.codey.y > 600) {
      gameState.codey.y = -100
    }
    if (gameState.codey.y < -100) {
      gameState.codey.y = 600
    }
}

const config = {
	type: Phaser.AUTO,
	width: 400,
	height: 500,
	backgroundColor: "#5f2a55",
	scene: {
    preload,
    create,
    update
	}
}

const game = new Phaser.Game(config)