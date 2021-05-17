//rows - 12
//columns -20
var lavaDoor = new Image();
var hydroDoor = new Image();
lavaDoor.src = './images/lavaGate.png';
hydroDoor.src = './images/hyrdoGate.png';
var gameMap = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 10, 1],
    [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

]

var collisionMap = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 6, 6, 6, 6, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 5, 5, 5, 5, 1, 1, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1],

]

var coinMap = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 8, 8, 8, 8, 0, 0, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0],
]

function drawMap(){
    for(var i=0; i<gameMap.length; i++){
        for(var j=0; j<gameMap[i].length; j++){
            if(gameMap[i][j] === 1){
                ctx.drawImage(tile,j*tileSize,i*tileSize,tileSize,tileSize);
            }
            if(gameMap[i][j] === 0){
                // console.log('here')
                ctx.fillStyle = "#3B5A0A";
                ctx.fillRect(j*tileSize,i*tileSize,tileSize,tileSize);
            }
            if(coinMap[i][j] === 8){
                ctx.fillStyle = "gray";
                ctx.fillRect(j*tileSize+10,i*tileSize-10,20,20);
            }
            if(coinMap[i][j] === 9){
                ctx.fillStyle = "pink";
                ctx.fillRect(j*tileSize+10,i*tileSize-10,20,20)
            }
            if(gameMap[i][j] === 10){
                ctx.drawImage(lavaDoor,j*tileSize,i*tileSize,tileSize,tileSize)
            }
            if(gameMap[i][j] === 11){
                ctx.drawImage(hydroDoor,j*tileSize,i*tileSize,tileSize,tileSize)
            }
        }
    }
    for (var i = 0; i<gameMap.length; i++){             

        ctx.fillStyle = "#ababab" ;                
        ctx.fillRect(0, i*tileSize, 1280, 1);  
    }
    
    for (var j = 0; j<gameMap[0].length; j++){
             
        ctx.fillRect(j*tileSize,0,1,720);
            
    }
}
var water = new Image();
water.src = './images/waterPath.png'
function drawCollisionMap(){
    // console.log('called')
    for(var i=0; i<gameMap.length; i++){
        for(var j=0; j<gameMap[i].length; j++){
            if(collisionMap[i][j] === 5) {  //waterpath      
                // ctx.drawImage(waterPath,
                            // j*tileSize,
                            // i*tileSize,
                            // tileSize,
                            // tileSize)
                ctx.fillStyle = "blue";
                ctx.fillRect(j*tileSize,i*tileSize,tileSize,tileSize/2);
            }
            if(collisionMap[i][j] === 6) {  //waterpath      
                // ctx.drawImage(waterPath,
                            // j*tileSize,
                            // i*tileSize,
                            // tileSize,
                            // tileSize)
                ctx.fillStyle = "red";
                ctx.fillRect(j*tileSize,i*tileSize,tileSize,tileSize/2);
             }
        }
    }
}




