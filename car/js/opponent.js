var Opponent = function(x,y){
    this.x = x;
    this.y = y;
    this.width = 60;
    this.height = 150;

    this.random = randomCar();
    function randomCar(){
        var number = Math.floor(Math.random()*3);
        var img = ['blue','black','yellow'];
        return img[number];
    }

    this.draw = function(x,y){
        // console.log('draw')
        // ctx.beginPath();
        // ctx.fillStyle = 'blue';
        // ctx.fillRect(this.x,this.y,this.width,this.height);
        var opponentImg = new Image();
        var imageColor = this.random;
        // console.log(op)
        opponentImg.src = `./images/${imageColor}.png`;
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
var startXPox = [20,120,220];
var len = startXPox.length;

var generateOpponent = function(){
    while(opponentArray.length < opponentNo){
        // console.log('here')
        while(1){
            var index1 = Math.floor(Math.random()*(len));
            var index2 = Math.floor(Math.random()*(len));
            if(index1 !== index2)break;
        }
        
        var startYPos1 = Math.random()*-90;
        var startYPos2 = Math.random()*-40;
        // console.log(startYPos);
        var opponent1 = new Opponent(startXPox[index1],startYPos1);
        var opponent2 = new Opponent(startXPox[index2],startYPos2);
                // console.log(index);
        opponentArray.push(opponent1);
        opponentArray.push(opponent2);

    }
}


var clearOpponent = function(){
    // console.log(opponentArray)
    for(var i=0;i<opponentArray.length+1;i++){
        opponentArray = [];
        player.score += 10;
    }
}


