var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var currentLevel = 1;

var tileSize = 40;

canvas.width = 800;
canvas.height = 480;

var tile = new Image();
tile.src = './images/tile.png';

var greenTile = new Image();
greenTile.src = './images/greenTile.png';

var startX1 = 40;
var startY1 = 400;
var startX2 = 84;
var startY2 = 400;

var gameoverFunc;

var lavaBoy = new Player(startX1,startY1,6);
var hydroGirl = new Player(startX2,startY2,5);

var controllerObj = new Controller(lavaBoy,hydroGirl);
var gate1 = new Gate(1,3);
var box = new Box(9,1);
var loc;
var count = 0;

var boy = new Image();
boy.src = './images/lavaboy.png';

var girl = new Image();
girl.src = './images/hydrogirl.png';

var platforms = [new Platform(160,360,1),
    new Platform(300,360,1),
    new Platform(440,360,1),
    new Platform(580,360,1),
];

var platform4 = new Platform(80,100,2);

var lavaDoor = new Image();
var hydroDoor = new Image();
lavaDoor.src = './images/lavaGate.png';
hydroDoor.src = './images/hyrdoGate.png';

var plateImg = new Image();
plateImg.src = './images/plate.png';
var gateImg = new Image();
gateImg.src = './images/gate.png';

var block = new Image();
block.src = './images/Block.png';

var redDiamond = new Image();
redDiamond.src = './images/redDiamond.png';

var blueDiamond = new Image();
blueDiamond.src = './images/blueDiamond.png';

var bluePool = new Image();
bluePool.src = './images/bluePool.png';

var redPool = new Image();
redPool.src = './images/redPool.png';

var gooLiquid = [new Goo(11,4), new Goo(11,5), new Goo(11,6), new Goo(11,7), new Goo(11,8),
    new Goo(11,9), new Goo(11,10), new Goo(11,11), new Goo(11,12), new Goo(11,13)]

var instruction = document.querySelector('.instruction');
var gameover = document.querySelector('.gameover');
var reset = document.querySelector('.reset');
var home = document.querySelector('.home');
var congratulations = document.querySelector('.congratulations');

document.getElementById('2').disabled = true;
document.getElementById('3').disabled = true;
document.getElementById('4').disabled = true;
