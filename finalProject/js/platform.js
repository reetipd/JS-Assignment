var Platform = function(x,y,type){
    this.x = x;
    this.y = y;

    this.oldY = this.y;
    this.oldX = this.x;

    this.d = 0;
    this.w = 80;

    this.type = type;

    this.vy = this.vx = 0;

    this.getFloor = function(){
        return this.y + 40;
    }
    this.getOldFloor = function(){
        return this.oldY + 40;
    }
    this.getLeft = function(){
        return this.x;
    }
    this.getRight = function(){
        return this.x + this.w;
    }

    this.move = function(){
        if(this.type === 1){  //platformX
            this.d += 0.01;
            this.oldX = this.x;
            this.vx  =  Math.cos(this.d) ;
            this.x += this.vx;
        }
        if(this.type === 2){  //platformY
            this.d += 0.008;
            this.oldY = this.y;
            this.vy  = Math.sin(this.d) ;
            this.y += this.vy;
        }
    }
}

