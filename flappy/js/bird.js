var sprite = new Image();
sprite.src = './images/birdSprite.png'
var frameX = 0; 
var frm2 = new Image();
frm2.src = './images/frame-2.png'

var Bird = function(){
    this.x = 150;
    this.y = 263;
    this.vy = 0;
    this.width = 36;
    this.height = 24;
    this.gravity = 0.9;
    this.speed = 0;
    this.movement = 0.6;
    this.flapY =0;
    this.start = true;

    this.draw = function(){
        ctx.drawImage(sprite,frameX*38,0,this.width,this.height,this.x,this.y,this.width,this.height);
    }
    this.update = function(){
        if(this.y<0 || this.y >= base.y - this.width){
            endGame();
            // cancelAnimationFrame(myId)
        }
        this.speed += this.movement;
        this.speed *= this.gravity;
        this.y += this.speed;

        if(spacePressed){
            this.flap();
        }

    }
    this.flap = function(){
        // this.flapY -= 0.8;
        this.speed -= 1.8;
    }
    this.collision = function(){
        var yTop = 0;
        var yBottom = canvas.height-this.bottomHeight;
        for(var i=0 ; i<pipeArr.length ; i++){
            if(
                this.x + this.width > pipeArr[i].xBottom &&
                this.x < pipeArr[i].xTop + pipeArr[i].width &&
                this.y < pipeArr[i].topHeight + yTop )
                {
                    return true;
                    // console.log(' top - collision');
                }
            if(
                this.x + this.width > pipeArr[i].xBottom &&
                this.x < pipeArr[i].xTop + pipeArr[i].width &&
                this.y + this.height > canvas.height - pipeArr[i].bottomHeight)
                {
                    return true;
                    // console.log(' btoom - collision');
                }
        
        }
    }
}

var bird = new Bird();