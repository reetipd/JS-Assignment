var Opponent = function(x,y){
    this.x = x;
    this.y = y;
    this.width = 60;
    this.height = 150;

    this.draw = function(x,y){
        // console.log('draw')
        ctx.beginPath();
        // ctx.fillStyle = 'blue';
        // ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.drawImage(opponentImg,this.x,this.y,this.width,this.height);
    }

    this.update = function(){
        this.y += speed;

        if(this.y + this.height >= canvas.height){
            clearOpponent();
            generateOpponent();
        }
    }

}

var opponentNo = 2;
var opponentArray = [];
var px = [20,120,220];
var len = px.length;
var startYPos = -60;
var generateOpponent = function(){
    while(opponentArray.length < opponentNo){
        // console.log('here')
        var index = Math.floor(Math.random()*(len));
        var opponent = new Opponent(px[index],startYPos);
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


var opponentImg = new Image();
opponentImg.src = './images/car_yellow.png';
