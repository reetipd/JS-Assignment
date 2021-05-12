var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.style.display = 'none';

//Width and height of canvas
canvas.width = 300;
canvas.height = 550;


var ctx = canvas.getContext('2d');

var road = new Image();
road.src = './images/roadNew.png';

var Road = function(x,y,width,height){
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width/3;

    this.handleRoad = function(){
        ctx.drawImage(road, this.x, this.y, this.width, this.height);
        //Move background
        this.y += 1;
        ctx.drawImage(road, this.x, this.y-this.height, this.width, this.height);
        // console.log(this.y - this.height);
        if (this.y > this.height) {
            this.y = 0;
        }
    }
    
}

var lane1 = new Road(0,0,canvas.width,canvas.height);
var lane2 = new Road(100,0,canvas.width,canvas.height);
var lane3 = new Road(200,0,canvas.width,canvas.height);

var instruction = document.querySelector('.instruction');
var button = document.getElementById('btn');

button.addEventListener('click', startGame);
function startGame(){
        instruction.style.display = 'none';
        canvas.style.display = 'block';

        window.requestAnimationFrame(playGame);
}

function playGame(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    lane1.handleRoad();
    lane2.handleRoad();
    lane3.handleRoad();
    // player.clear();
    player.draw();
    player.collision();
    // opponent1.draw();
    generateOpponent();
    for(var i=0; i<opponentArray.length; i++){
        opponentArray[i].draw();
        opponentArray[i].update();
    }
    // generateOpponent();
    requestAnimationFrame(playGame);
    ctx.font - '50px Arial'
    ctx.fillText('Score',150,50)
    // console.log('score' + player.score)
    
    
}

document.addEventListener('keydown',function(e){
    if(e.key === 'ArrowRight' && player.x+player.width < 280){
        var moveRight = 1;
        player.update(moveRight);
    }
    console.log(player.x)
    if(e.key === 'ArrowLeft' && player.x > 20){
        var moveLeft = -1;
        player.update(moveLeft);
    }
})

var score = document.getElementsByClassName('score');