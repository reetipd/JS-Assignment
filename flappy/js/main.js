var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.style.display = 'none';

canvas.width = 300;
canvas.height = 550;

var score = 0;
var highScore = localStorage.getItem('birdHighScore') | 0;

var gameSpeed = 1;
var distance = 0;
var count = 0; 
var background = new Image();
background.src = './images/background-day.png';
var baseImg = new Image();
baseImg.src = './images/base.png';

const SPRITE_IMAGES = 4;

const backGround = {
    x : 0,
    y : 0,
    height : canvas.height,
    width : canvas.width
}


function handleBackground(){
    ctx.drawImage(background,backGround.x,backGround.y,backGround.width,backGround.height);

    //Move background
    backGround.x += 1;
    // console.log(backGround.x)
    ctx.drawImage(background,backGround.x-backGround.width,backGround.y,backGround.width,backGround.height);
    if(backGround.x > canvas.width){
        backGround.x = 0;
    }
}

const base = {
    x : 0,
    y : 480,
    height : canvas.height / 6,
    width : canvas.width
}

function handleBase(){
    ctx.drawImage(baseImg,base.x,base.y,base.width,base.height);
    base.x += 1;
    // console.log(backGround.x)
    ctx.drawImage(baseImg,base.x-base.width,base.y,base.width,base.height);
    if(base.x > canvas.width){
        base.x = 0;
    }
}

function startGame(){
    if(bird.start){
        instruction.style.display = 'none';
        canvas.style.display = 'block';
        window.requestAnimationFrame(playGame);
    }
    
}


function playGame(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    handleBackground();
    distance ++;
    // frameX ++;
    count++;
    // if(frameX % (SPRITE_IMAGES-1) === 0){
    //     frameX = 0;
    // }
    if(count % 20 === 0){
        frameX += 1;
        if(frameX === 4){
            frameX = 0;
        }
    }
    handlePipes();
    handleBase();
    bird.draw();
    bird.update();
    if(bird.collision()){
        endGame();
        return;
    };
    myID=requestAnimationFrame(playGame);

    ctx.font = '50px Arial';
    ctx.fillText(score,30,50);

}

function endGame(){
    bird.start = false;
    gameover.style.display = 'block';
    updateHighscore();
}

function startAgain(){
    bird.start = true;
    document.location.reload();
}

var spacePressed = false;
var instruction = document.querySelector('.instruction');
var button = document.getElementById('btn');
var gameover = document.querySelector('.gameover');
var playAgain = document.getElementById('startAgain');

var yourScore = document.querySelector('.your-score');
var highScore = document.querySelector('.high-score');

button.addEventListener('click', startGame);
gameover.addEventListener('click',startAgain);

document.addEventListener('keydown', function(e){
    if(e.key === " "){
        spacePressed = true;
        // bird.update();
        // bird.flap();
    }
})

document.addEventListener('keyup', function(e){
    if(e.key === " "){
        spacePressed = false;
    }
})

function updateHighscore(){
    if(highscore !== null){
        if(score > highscore){
            localStorage.setItem("highscore", score);
            highScore.textContent = score;
            yourScore.textContent = score;
        }
        else{
            highScore.textContent = localStorage.getItem("highscore");
            yourScore.textContent = score;
        }
    }
}
