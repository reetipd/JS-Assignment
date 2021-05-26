var Box = function(y,x){
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 40;

    this.initialX = x;
    this.initialY = y;

    this.posY = this.y*tileSize;
    this.posX = this.x*tileSize;

    this.oldX = this.x;  //keep track of last position of player, used for collision detection
    this.oldY = this.y;

    this.yv = 0.1;

    this.draw = function(){
        ctx.drawImage(block,this.x*tileSize,this.y*tileSize,this.width,this.height);
    }
    this.getTop = function(){
        return this.y * tileSize;
    }
    this.getOldTop = function(){
        return this.oldY * tileSize;
    }
    this.getBottom = function(){
        return (this.y * tileSize) + 40;
    }
    this.getOldBottom = function(){
        return (this.Oldy * tileSize) + 40;
    }
    this.getRight = function(){
        return (this.x * tileSize) + this.width;
    }
    this.getLeft = function(){
        return this.x * tileSize;
    }
    this.update = function(){
        // console.log(this.y)
        this.y -= this.yv;
        this.posY = this.y * tileSize;
    }

    this.reset = function(){
        this.x = this.initialX;
        this.y = this.initialY;
        this.posY = this.y*tileSize;
        this.posX = this.x*tileSize;
        this.yv = 0.1


    }

    this.collision = function(collisionMap,tileSize){
        var top, left, right, value;

        top = Math.floor(this.getTop() / tileSize); //row
        left = Math.floor(this.getLeft() / tileSize);  // col

        value = collisionMap[top][left];

        this.checkTileCollision(this,value, left*tileSize,top*tileSize, tileSize);

        //top-right
        top    = Math.floor(this.getTop() / tileSize);		 //row		
	    right  = Math.floor(this.getRight() / tileSize);     //col

	    value  = collisionMap[top][right];   //[y][x]

  
    	this.checkTileCollision(this,value, right*tileSize, top*tileSize,tileSize);	

    }

    this.checkTileCollision = function(box,value,tileX,tileY){
        switch(value){
            case 0:
                break;
            case 1:
                if(box.bottomCollision(tileY + tileSize))return;
                break;
        }
    }
    this.bottomCollision = function(tileBottom){
        if(this.getTop() < (tileBottom) && this.getOldTop() >= (tileBottom)){
            this.y = tileBottom / tileSize;
            this.yv = 0;
            return true;
        }
        return false;
    }

}



