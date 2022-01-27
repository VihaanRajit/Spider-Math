class Game {
    constructor() {
        this.leadeboardTitle = createElement("h2");
        this.leader1 = createElement("h2");
        this.leader2 = createElement("h2");

        this.playerMoving = false
    }

    getState() {
     var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data) {
          gameState = data.val();
        });
    }

        start() {
            player = new Player();
            playerCount = player.getCount();

            form = new Form();
            form.display();
    

            spiderMan1 = createSprite(width/2 -500, height-350);
            spiderMan1.addImage("spiderMan1",spiderMan1_img);
            spiderMan1.scale = 0.27;

            spiderMan2 = createSprite(width/2 +500, height-350);
            spiderMan2.addImage("spiderMan2",spiderMan2_img);
            spiderMan2.scale = 1.08

            spiderMen = [spiderMan1, spiderMan2]
        }

        

        

        handleElements() {
            form.hide()
            form.titleImg.position(-40,-100)
            // form.titleimg.class("gameTitleAfterEffect");
        }

        update(state){
            database.ref("/").update({
                gameState:state
            })
        }

        play() {
            this.handleElements()
            this.handlePlayerControls()
            Player.getPlayersInfo();
            if (allPlayers !== undefined){
                // image(track,0,-height*5,width,height*6);
                
               
                

                drawSprites()
            }
        }
        
        handleResetButton() {
            this.resetButton.mousePressed(()=>{
              database.ref("/").set({
                playerCount:0,
                gameState:0,
                players:{},
              })
              window.location.reload()
            })
          }

        handlePlayerControls() {
            // if (!this.blast) {
            if (keyIsDown(UP_ARROW)) {
                console.log("Success")
              this.playerMoving = true;
              player.positionY += 10;
              player.update();
            }

            
        
            // if (keyIsDown(LEFT_ARROW) && player.positionX > width / 3 - 50) {
            //   this.leftKeyActive = true;
            //   player.positionX -= 5;
            //   player.update();
            // }
        
            // if (keyIsDown(RIGHT_ARROW) && player.positionX < width / 2 + 300) {
            //   this.leftKeyActive = false;
            //   player.positionX += 5;
            //   player.update();
            // }
          }}
    // }
