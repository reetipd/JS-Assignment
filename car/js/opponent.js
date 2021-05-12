var Opponent = function(x,y){
    this.x = x;
    this.y = y;
    this.width = 60;
    this.height = 130;

    this.draw = function(x,y){
        // console.log('draw')
        ctx.beginPath();
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }

    this.update = function(){
        this.y += 2;

        if(this.y + this.height >= canvas.height){
            clearOpponent();
            generateOpponent();
        }
    }

}

var opponentArray = [];
var px = [20,120,220];
var len = px.length;
var generateOpponent = function(){
    while(opponentArray.length < 2){
        // console.log('here')
        var index = Math.floor(Math.random()*(len));
        var opponent = new Opponent(px[index],0);
        // console.log(index);
        opponentArray.push(opponent);

    }
}
var clearOpponent = function(){
    console.log(opponentArray)
    for(var i=0;i<opponentArray.length+1;i++){
        opponentArray = [];
        player.score += 10;
    }
}



