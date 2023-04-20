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
        { frameWidth: 40, frameHeight: 40 }
    );
    this.load.image("wall","wallpaper.png");
    this.load.image("brick","brick.png");
}

function create ()
{
    this.add.image(0, 0, "wall").setScale(5,5);
    mariop = this.physics.add.sprite(100, 10, "mario");
    mariop.setScale(2,2)
    plataforma = this.physics.add.staticGroup();
    cursors = this.input.keyboard.createCursorKeys();
    this.physics.add.collider(mariop, plataforma);
    mariop.setBounce(0.4);
    mariop.setCollideWorldBounds(true);
    plataforma.create(600, 400, "brick").setScale(20,0.5).refreshBody();
    this.anims.create({
    key: "left",
    frames: this.anims.generateFrameNumbers("mario", { start: 4, end: 3 }),
    frameRate: 5,
    repeat: -1
});
    this.anims.create({
    key: "right",
    frames: this.anims.generateFrameNumbers("mario", { start: 7, end: 8 }),
    frameRate: 5,
    repeat: -1
});
  this.anims.create({
    key: "normal1",
    frames: this.anims.generateFrameNumbers("mario", 5),
    frameRate: 1,
    repeat: -1
});
this.anims.create({
    key: "normal2",
    frames: this.anims.generateFrameNumbers("mario", 6),
    frameRate: 1,
    repeat: -1
});
    

}

function update ()
{
    
    if (cursors.left.isDown)
    {
        mariop.setVelocityX(-160);
        mariop.anims.play("left", true);

    
    }else
    {
        mariop.setVelocityX(0);
        mariop.anims.play("normal1", true);
    
    }
    if (cursors.right.isDown)
    {
        mariop.setVelocityX(160);
        mariop.anims.play("right", true);
    
    }else
    {
        mariop.setVelocityX(0);
        mariop.anims.play("normal2", true);
    
    }
    
    if (cursors.up.isDown && mariop.body.touching.down)
    {
        mariop.setVelocityY(-330);
    }
}
