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
var plataforma

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image("mario","mario.png");
    this.load.image("brick","brick.png");
}

function create ()
{
    plataforma = this.physics.add.staticGroup();
    this.add.image(64, 64, "mario").setScale(0.3,0.3);
    plataforma.create(600, 400, "brick");

}

function update ()
{
}