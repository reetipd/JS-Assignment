var Gate = function(y,x){
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 40;
    
    this.posY = this.y*tileSize;
    this.posX = this.x*tileSize;

    this.Oldx = this.x;
    this.Oldy = this.y;

    this.draw = function(){
        ctx.drawImage(gateImg, this.x*tileSize, this.y*tileSize,this.width,this.height);
    }
 
    this.getTop = function(){
        return this.y * tileSize;
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

    //open blockage gate
    this.open = function(){
        this.y -= 0.01;
        this.posY = this.y * tileSize;
    }
    //check blockage gate collision 
    this.collision = function(collisionMap,tileSize){
        if(this.getTop() <= 0){
            this.y = 0;
        }
    }
    

}

