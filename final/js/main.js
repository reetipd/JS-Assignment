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

var g1 = new Gate(5,10,10,40);

// function startGame(){
//     instruction.style.display = 'none';
//     canvas.style.display = 'block';
//     window.requestAnimationFrame(playGame);
// }


function playGame(levelId){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    // console.log(levelId)
        // console.log('inside')

    drawMap(levelId);
    drawCollisionMap(levelId);
 
    lavaBoy.draw();
    hydroGirl.draw();

 

    lavaBoy.update();
    hydroGirl.update();

    lavaBoy.getCollider().getCollisionPoints(collisionMap,diamondMap,tileSize);
    hydroGirl.getCollider().getCollisionPoints(collisionMap,diamondMap,tileSize);

    // lavaBoy.checkDoor();
    // hydroGirl.checkDoor();

    drawDiamondMap();
    // drawBlockageMap();
    g1.draw();

    ctx.font = '40px Arial';
    ctx.fillText(lavaBoy.score,150,50);
    ctx.fillText(hydroGirl.score,100,50);
    requestAnimationFrame(function(){
        playGame(levelId)
    });
    
    
}
function gameover(){
    console.log('call')
    gameover.display.style = 'block';
}

function startAgain(){
    document.location.reload();
}

var startscreen = document.querySelector('.startscreen');
startscreen.addEventListener('click',function(){
    startscreen.style.display = 'none';
    instruction.style.display = 'block';
})

var instruction = document.querySelector('.instruction');
// var button = document.getElementById('btn');
var button = document.getElementById('level1');
var gameover = document.querySelector('.gameover');
// var playAgain = document.getElementById('startAgain');

button.addEventListener('click', function startGame()
    {
        // console.log(button.id)

        levelId = button.id;
        instruction.style.display = 'none';
        canvas.style.display = 'block';
        window.requestAnimationFrame(function (){
            playGame(levelId);
        });
    }
);

gameover.addEventListener('click',startAgain);
