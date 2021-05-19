var boy = new Image();
boy.src = './images/lavaboy.png';
var girl = new Image();
girl.src = './images/hydrogirl.png';

var Player = function(x,y,type){
    this.x = x;
    this.y = y;

    this.width = 20;
    this.height = 35;
    this.speed = 5;
    this.jumpSpeed = -5;
    this.gravity = 0.8;
    this.xV = 0;
    this.yV = 0;

    this.accX = 0;
    this.axxY = 0;

    this.type = type; 
    this.score = 0;

    this.moving_right = false;
    this.moving_left = false;
    this.moving_up = false;
    this.moving_down = false;

    this.onPlate = false;

    this.oldX = x;  //keep track of last position of player, used for collision detection
    this.oldY = y;

    this.draw = function(){
        if (this.type === 6){
            // ctx.fillStyle = "brown";
            // ctx.fillRect(this.x,this.y,this.width,this.height);
            ctx.drawImage(boy,this.x,this.y,this.width,this.height);
        }
        if (this.type === 5){
            // ctx.fillStyle = "skyblue";
            // ctx.fillRect(this.x,this.y,this.width,this.height);
            ctx.drawImage(girl,this.x,this.y,this.width,this.height);
        }
    }

    this.update = function(){

        this.oldX = this.x;
        this.oldY = this.y;

        if(this.moving_right){
            this.xV = this.speed; //this also looks fine!!
        }
        if(this.moving_left){
            this.xV = -this.speed;
        }
        if(!this.moving_left && !this.moving_right){
            this.xV = 0;
        }
        this.yV += 1;

        this.x += this.xV;
        this.y += this.yV;
    }
    this.moveLeft = function(){
        this.moving_left = true;
    
    }
    this.moveRight = function(){
        this.moving_right = true;
    }
    this.moveUp = function(){
        // if(!this.moving_up){
            {
            this.moving_up = true;
            this.yV = -14;
        }
        
     
    }
    this.moveDown = function(){
        this.moving_down = true;
    }
    this.stop = function(){
        this.moving_left = false;
        this.moving_right = false;
        this.xV = 0;
    }

    this.getTop = function(){
        return this.y;
    }
    this.getBottom = function(){
        return this.y + this.height;
    }
    this.getRight = function(){
        return this.x + this.width;
    }
    this.getLeft = function(){
        return this.x;
    }
    
    this.getOldTop = function(){
        return this.oldY;
    }
    this.getOldBottom = function(){
        return this.oldY + this.height;
    }
    this.getOldRight = function(){
        return this.oldX + this.width;
    }
    this.getOldLeft = function(){
        return this.oldX;
    }

    this.getCenterX = function(){
        return this.x + this.width/2;
    }

    this.getCenterY = function(){
        return this.y+this.height/2;
    }

    this.collider = new Collider(this);

    this.getCollider = function(){
        return this.collider;
    }

    this.topCollision = function(top){
        // console.log('bottom'+this.getBottom())
        // console.log('oldbottom'+this.getOldBottom())
        // console.log('top'+top)
        if(this.getBottom() > top && this.getOldBottom() <= top){
            // console.log('collision on top of the wall')
            this.y = top - this.height - 0.01;
            this.yV = 0;
            return true;
        }
        return false;
    }

    this.leftCollision = function(tileLeft, tileTop){   //player colliding to the left side of the wall
        // console.log('called')
        // console.log('getright '+this.getRight());
        // console.log('getrightolddd '+this.getOldRight());
        // console.log('tileLEft '  +tileLeft)
        if(this.getRight() > tileLeft && this.getOldRight() <= tileLeft){ //before obj was to the right now its to the left
            {
                this.x = tileLeft - this.width - 0.01;
                this.xV = 0;
                // console.log('collide wall from the left side')
                return true;
            }
            
        }
        return false;
    }

    //not working
    this.rightCollision = function(tileRight,tileTop){
        // console.log('called')

        // console.log('getleft '+this.getLeft());
        // console.log('getleftold '+this.getOldLeft());
        // console.log('tilerightt '  +tileRight)
        if(this.getLeft() < tileRight && this.getOldLeft() >= tileRight){ //>= hunnu parne but position change vayena
            // if(this.getBottom() >= tileTop)
            {
                this.x = tileRight + 0.0001;
                this.xV = 0.1;
                // console.log('collide wall from right side');
                return true;
            }   
            
        }
        return false;
    }




    this.bottomCollision = function(tileBottom){
        // console.log('here')
        // console.log('getTop' + this.getTop())
        // console.log('tileBottom' + tileBottom);
        // console.log('getOldBottom' + this.getOldBottom());
        if(this.getTop() < (tileBottom) && this.getOldTop() >= (tileBottom)){
            // console.log('collide from bottom')
            this.y = tileBottom ;
            this.yV = 0;
            return true;
        }
        return false;
    }

    this.topLiquidCollision = function(tileTop,liquidType){
        if(this.getBottom() > tileTop && this.getOldBottom() <= tileTop){
            if(this.type !== liquidType){
                // console.log('fire abd water are mixed')
                this.gameover();
            }
            return true;
        }
        return false;
    }

    this.collectDiamond = function(){
        this.score += 1;
        console.log(this.score)
    }

    this.rightGateCollision = function(gateRight,gateHeight){
        // console.log('called')
        // console.log('getLeft '+this.getLeft());
        
        gateRight = gateRight+20;
        if(this.getLeft() <= gateRight && this.getOldRight() >= gateRight){
            console.log('gate from right')
            this.xV = 0;
            this.x = gateRight - 0.01;
            return true;
        }
        return false;
    }
    this.leftGateCollision = function(gateLeft){
        // console.log('inside')
        // console.log('gateLeft '+gateLeft)
        if(this.getRight() >= gateLeft && this.getOldRight() <= gateLeft){
            this.x = gateLeft - this.width;
            this.xV = 0;
            return true;
        }
        return false;
    }

    // this.topGateCollision = function(gateTop){
    //     if(this.getBottom() >= gateTop && this.getOldTop() <= gateTop){
    //         this.y = gateTop + g1.height;
    //         console.log(this.y)
    //         this.yV = 0;
    //     }
    // }

    this.bottomGateCollision = function(gateBottom){
        if(this.getTop() <= gateBottom && this.getOldTop() >= gateBottom){
            // console.log('bottomgate');
            this.y = gateBottom;
            this.yV = 0;
            return true;
        }
        return false;
    }
    this.gameover = function(){
        console.log('call')
        gameover.style.display = 'block';
        canvas.style.display = 'none';

    }
    // this.checkDoor = function(){
    //     bottom = Math.floor(this.getBottom() / tileSize);				// Gets bottom right
	//     right  = Math.floor(this.getRight()  / tileSize);  
    //     doorTileValue = gameMap[bottom][right];
    //     this.chec

    //     bottom = Math.floor(this.getBottom() / tileSize);				// Gets bottom right
	//     left  = Math.floor(this.getLeft()  / tileSize);  
    //     doorTileValue = gameMap[bottom][right];
    // }

}
startX1 = 44;
startY1 = 405;
startX2 = 84;
startY2 = 405;

var lavaBoy = new Player(startX1,startY1,6);
var hydroGirl = new Player(startX2,startY2,5);

// console.log(lavaBoy)
// console.log(hydroGirl)