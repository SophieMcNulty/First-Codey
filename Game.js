const gameState = {}

function preload() {
  this.load.image('codey', 'https://content.codecademy.com/courses/learn-phaser/codey.png');
}

function create() {
  gameState.codey = this.add.sprite(150, 200, 'codey')
  // Set cursor keys here!
}

function update() {
  // Update based on keypress here!
 
}

const config = {
	type: Phaser.AUTO,
	width: 500,
	height: 500,
	backgroundColor: "#03f4fc",
	scene: {
    preload,
    create,
    update
	}
}

const game = new Phaser.Game(config)
