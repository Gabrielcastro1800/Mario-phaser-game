var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
};
var plataforma;
var mariop;
var cursors;

var game = new Phaser.Game(config);

function preload ()
{
        this.load.spritesheet("mario", 
        "mario.png",
        { frameWidth: 32, frameHeight: 48 }
    );
    this.load.image("wall","wallpaper.png");
    this.load.image("brick","brick.png");
}

function create ()
{
    mariop = this.physics.add.sprite(100, 10, "mario");
    mariop.setScale(0.1,0.1)
    plataforma = this.physics.add.staticGroup();
    cursors = this.input.keyboard.createCursorKeys();
    this.physics.add.collider(mariop, plataforma);
    mariop.setBounce(0.4);
    mariop.setCollideWorldBounds(true);
    plataforma.create(600, 400, "brick").setScale(20,0.5).refreshBody();;


}

function update ()
{
    
    if (cursors.left.isDown)
    {
        mariop.setVelocityX(-160);
    
    }
    else if (cursors.right.isDown)
    {
        mariop.setVelocityX(160);
    
    }
    else
    {
        mariop.setVelocityX(0);
    
    }
    
    if (cursors.up.isDown && mariop.body.touching.down)
    {
        mariop.setVelocityY(-330);
    }
}
