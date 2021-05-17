var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var tileSize = 40;
var frame = 0;
var count = 0;
// canvas.width = 800;
// canvas.height = 480;

canvas.width = gameMap[0].length * tileSize;
console.log(canvas.width)
canvas.height = gameMap.length * tileSize;
console.log(canvas.height)

var tile = new Image();
tile.src = './images/tile.png';

// var keys = [];
var controllerObj = new Controller(lavaBoy,hydroGirl);

function startGame(){
    instruction.style.display = 'none';
    canvas.style.display = 'block';
    window.requestAnimationFrame(playGame);
}


function playGame(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawMap();
    drawCollisionMap();
    lavaBoy.draw();
    hydroGirl.draw();
    lavaBoy.update();
    hydroGirl.update();
    // lavaBoy.getSidePoints();
    // hydroGirl.getSidePoints();

    lavaBoy.getCollider().getCollisionPoints(collisionMap,coinMap,tileSize);
    hydroGirl.getCollider().getCollisionPoints(collisionMap,coinMap,tileSize);


    requestAnimationFrame(playGame);
}

var instruction = document.querySelector('.instruction');
var button = document.getElementById('btn');
var gameover = document.querySelector('.gameover');
var playAgain = document.getElementById('startAgain');

button.addEventListener('click', startGame);