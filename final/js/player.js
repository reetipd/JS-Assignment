var Player = function(x,y,type){
    this.x = x;
    this.y = y;

    this.width = 25;
    this.height = 35;
    this.speed = 5;
    this.jumpSpeed = -5;
    this.gravity = 0.8;
    this.xV = 0;
    this.yV = 0;

    this.accX = 0;
    this.axxY = 0;

    this.type = type; 

    this.moving_right = false;
    this.moving_left = false;
    this.moving_up = false;
    this.moving_down = false;

    this.oldX = x;  //keep track of last position of player, used for collision detection
    this.oldY = y;

    this.draw = function(){
        if (this.type === 0){
            ctx.fillStyle = "brown";
            ctx.fillRect(this.x,this.y,this.width,this.height);
        }
        if (this.type === 1){
            ctx.fillStyle = "skyblue";
            ctx.fillRect(this.x,this.y,this.width,this.height);
        }
    }

    this.update = function(){

        this.oldX = this.x;
        this.oldY = this.y;

        if(this.moving_right){
            this.xV = this.speed; //this also looks fine!!
            // this.x += this.xV;
        }
        if(this.moving_left){
            this.xV = -this.speed;
            // this.x += this.xV;
        }
        // this.accY = this.gravity;
        // this.vY += this.accY;
        // this.y += this.yV;
        if(this.moving_up){
            // this.yV += this.jumpSpeed;
            // this.y += this.yV;
            // console.log('y'+this.y)
            // this.yV += this.gravity;
            // console.log('yv'+this.yV)

            this.yV = -8;
            // this.y = this.y + this.yV;

            // if (this.yV){
            //     console.log('here')
            //     this.yV = 3;
            // } 
        }
        // if(this.moving_down){
        //     this.yV = 3;
        //     // this.y = this.y + this.yV;
        // }
        this.yV += 1;


        this.x += this.xV;
        this.y += this.yV;
    }
    this.moveLeft = function(){
        this.moving_left = true;
        
        // this.accX = -0.8;
        // this.accX += this.xV*(-0.15);
        // this.xV += this.accX;
        // this.x += this.xV/1;
    }
    this.moveRight = function(){
        this.moving_right = true;
        // this.xV = this.speed; //this also looks fine!!
        // this.x += this.xV;
    }
    this.moveUp = function(){
        this.moving_up = true;
        
        // console.log(!this.moving_up)
        // if(!this.moving_up){
        //     this.moving_up = true;
        //     this.yV = -12;
        //     // this.y += this.yV;
        // }
        // console.log(this.moving_up)
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

    // this.leftCollision = function(tileLeft,tileTop){
    //     if(this.getRight() > tileLeft && this.getOldRight() <= tileLeft){
    //         this.x = tileLeft - this.width - 0.0001;
    //         this.xV = 0;
    //         return true;
    //     }
    //     return false;
    // }
    this.leftCollision = function(tileLeft, tileTop){   //player colliding to the left side of the wall
        // console.log('called')
        // console.log('getright '+this.getRight());
        // console.log('getrightolddd '+this.getOldRight());
        // console.log('tileLEft '  +tileLeft)
        if(this.getRight() > tileLeft && this.getOldRight() <= tileLeft){ //before obj was to the right now its to the left
            {
                this.x = tileLeft - this.width - 0.0001;
                this.xV = 0;
                // console.log('collide wall from the left side')
                return true;
            }
            
        }
        return false;
    }

    // this.leftCollision = function(tileLeft){
    //     if(this.xV > 0){
    //         if(this.getRight() > tileLeft && this.getOldRight <= tileLeft){
    //             console.log('collide wall from left')
    //             this.x = tileLeft - this.width - 0.0001;
    //             // this.xV = 0;
    //             return true;
    //         }
    //     }
    //     return false;
    // }
    // this.rightCollision = function(tileRight){
    //     if(this.xV < 0){
    //         if(this.getLeft() < tileRight && this.getOldLeft <= tileRight){
    //             console.log('collide wall from left')
    //             this.x = tileRight - 0.0001;
    //             this.xV = 0;
    //             return true;
    //         }
    //     }
    //     return false;
    // }
    //not working
    this.rightCollision = function(tileRight,tileTop){
        // console.log('called')

        // console.log('getleft '+this.getLeft());
        // console.log('getleftold '+this.getOldLeft());
        // console.log('tilerightt '  +tileRight)
        if(this.getLeft() < tileRight && this.getOldLeft() > tileRight){ //>= hunnu parne but position change vayena
            // if(this.getBottom() >= tileTop)
            {
                this.x = tileRight;
                this.xV = 0;
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
        if(this.getTop() < (tileBottom + 40) && this.getOldTop() >= (tileBottom+40)){
            // console.log('collide from bottom')
            this.y = tileBottom + 40 ;
            this.yV = 0;
            return true;
        }
        return false;
    }


    // this.getSidePoints = function(){



        //-----------------------------------------
    //     var top, left, right, bottom;
    //     //top-left
    //     top = Math.floor(this.getTop() / 40);
    //     left = Math.floor(this.getLeft() / 40);
    //     tileIndexValue = collisionMap[top][left]; //MAP[y][x]
    //     this.checkTileCollision(tileIndexValue,left,top); //(X,Y)
    //     // console.log(tileIndexValue)
    //     // console.log(top,left,tileIndexValue)

    //     //top-right
    //     top = Math.floor(this.getTop() / 40);
    //     right = Math.floor(this.getRight() / 40);
    //     tileIndexValue = collisionMap[top][right];
    //     // console.log(top,right,tileIndexValue)
    //     this.checkTileCollision(tileIndexValue,right,top);

    //     //bottom-left
    //     bottom = Math.floor(this.getBottom() / 40);
    //     left = Math.floor(this.getLeft() / 40);
    //     tileIndexValue = collisionMap[bottom][left];
    //     // console.log(bottom,left,tileIndexValue)
    //     this.checkTileCollision(tileIndexValue,left,bottom);

    //     //bottom-right
    //     bottom = Math.floor(this.getBottom() / 40);
    //     right = Math.floor(this.getRight() / 40);
    //     tileIndexValue = collisionMap[bottom][right];
    //     // console.log(bottom,right,tileIndexValue)
    //     this.checkTileCollision(tileIndexValue,right,bottom);

    // }
    // this.checkTileCollision = function(tileValue,tileX,tileY){
    //     tileXPos = tileX * 40;
    //     tileYPox = tileY * 40;
    //     // console.log(tileValue)
    //     // console.log(tileXPos)
    //     switch(tileValue){
    //         case 0:
    //             break;
    //         case 1:
    //             if(this.topCollision(tileYPox)) return;
    //             if(this.leftCollision(tileXPos,tileYPox))return;
    //             if(this.rightCollision(tileXPos + 40,tileYPox))return;
    //             this.bottomCollision(tileYPox + 40);
    //             break;

    //     }

        
    //     // if(tileValue === 1){
    //     //     if(this.topCollision(tileYPox)) return;
    //     //     if(this.leftCollision(tileXPos,tileYPox))return;
    //     //     if(this.rightCollision(tileXPos + 40,tileYPox))return;
    //     //     // this.bottomCollision(tileYPox+40);
    //     // }
    //---------------------
    // }
}
startX1 = 44;
startY1 = 405;
startX2 = 84;
startY2 = 405;

var lavaBoy = new Player(startX1,startY1,0);
var hydroGirl = new Player(startX2,startY2,1);

// console.log(lavaBoy)
// console.log(hydroGirl)