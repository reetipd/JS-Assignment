var Player = function(x,y){
    this.x = x;
    this.y = y;
    this.width = 60;
    this.height = 150;
    this.score = 0;
    this.start = true;
    this.draw = function(x,y){
        ctx.beginPath();
        // ctx.fillStyle = 'red';
        // ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.drawImage(playerImage,this.x,this.y,this.width,this.height)
    }
    this.update = function(pos){
        this.x = this.x + pos * DISTANCE;
    }
    this.collision = function(){
        // console.log('in here')
        for(var i=0; i<opponentArray.length; i++){
                    if(
                        this.x < opponentArray[i].x + opponentArray[i].width &&
                        this.x + this.width > opponentArray[i].x &&
                        this.y < opponentArray[i].y + opponentArray[i].height &&
                        this.y + this.height > opponentArray[i].y){
                            // console.log('collision');
                            return true;
                        }
                    }
          }

}

var playerImage = new Image();
playerImage.src = './images/car_red.png';

var player = new Player(120,400);