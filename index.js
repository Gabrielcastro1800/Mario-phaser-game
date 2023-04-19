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
    this.load.image("mario","mario.png");
    this.load.image("brick","brick.png");
}

function create ()
{
    cursors = this.input.keyboard.createCursorKeys();
    this.physics.add.collider(mariop, plataforma);
    mariop = this.physics.add.sprite(100, 450, "mario");
    mariop.body.setGravityY(300)
    mariop.setCollideWorldBounds(true);
    plataforma = this.physics.add.staticGroup();
    plataforma.create(600, 400, "brick").setScale(3.5,0.5);
    

}

function update ()
{
    if (cursors.left.isDown)
    {
        player.setVelocityX(-160);
    
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);
    
    }
    else
    {
        player.setVelocityX(0);
    
    }
    
    if (cursors.up.isDown && player.body.touching.down)
    {
        player.setVelocityY(-330);
    }
}