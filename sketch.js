var canvas;
var backgroundImage, spiderMan1_img, spiderMan2_img, track;
var lifeImage;
var database, gameState;
var form, player, playerCount;
var allPlayers, spiderMan1, spiderMan2;
var bk_song;
var mute_btn;
var spiderMen = [];

function preload() {
    backgroundImage = loadImage("./assets/BackgroundImage.png");
    spiderMan1_img = loadImage("./assets/Spider-Man1.png");
    spiderMan2_img = loadImage("./assets/Spider-Man2 copy.png");
    // webshoot1_img = loadImage("./assets/webshoot1.png");
    // webshoot2_img = loadImage("./assets/webshoot2.png");
    // bk_song = loadSound('spidermantheme.mp3'); 
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    database = firebase.database();
    game = new Game()
    game.getState();
    game.start();

    // bk_song.play();
    // bk_song.setVolume(0.5);

    // mute_btn = createImg('mute.png');
    // mute_btn.position(420,20);
    // mute_btn.size(50,50);
    // mute_btn.mouseClicked(mute);
}


function draw() {
    background(backgroundImage);
    
    if (playerCount === 2) {
        game.update(1)
    }

    if (gameState === 1) {
        game.play();
        
        
        
        

    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

