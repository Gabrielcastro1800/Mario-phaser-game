var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
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
    plataforma.create(400, 568, "brick").setScale(2).refreshBody();

}

function update ()
{
}