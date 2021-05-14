//Images for obstacle-pipe
var pipeTop = new Image();
pipeTop.src='./images/pipe-green-top.png';
var pipeBottom = new Image();
pipeBottom.src = './images/pipe-green.png';

var Pipe = function(x,y){
    this.topHeight = (Math.random()*160) + 40;
    this.bottomHeight = (Math.random()*180 + 120);
    this.xTop = canvas.width-40;
    this.xBottom = canvas.width-40;
    this.width = 60;



    this.draw = function(){

        ctx.drawImage(pipeTop,this.xTop,0,this.width,this.topHeight);
        ctx.drawImage(pipeBottom,this.xBottom,canvas.height-this.bottomHeight,this.width,this.bottomHeight);
    }

    this.update = function(){
        this.xTop -= gameSpeed;
        this.xBottom -= gameSpeed;
        // this.draw();
    }
};

var pipeArr = [];
function handlePipes(){
    if(distance % 40 === 0){ //enter every 40 frames
        pipe = new Pipe();
        pipeArr.unshift(pipe);
        // generateScore();
    }
    for(var i=0; i<pipeArr.length; i++){
        pipeArr[i].draw();
        pipeArr[i].update();
        if(pipeArr[i].xTop + pipeArr[i].width === bird.x){
            console.log('here')
            score += 10;
        }
        if(pipeArr[i].xTop + pipeArr[i].width <= 0){
            pipeArr.pop();
            // score += 10;
            // console.log(score)
        }
        
    }
}



if(!localStorage.getItem('highscore')){
    highscore = 0;
    localStorage.setItem('highscore', highscore);    
}

else{
    highscore = localStorage.getItem('highscore')
}
