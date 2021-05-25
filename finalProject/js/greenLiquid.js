var Goo = function(x,y){
    this.x = x;
    this.y = y;
    
    this.draw = function(){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.y*tileSize,this.x*tileSize,tileSize,tileSize/2);
    }
}

