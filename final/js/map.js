//rows - 12
//columns -20
var lavaDoor = new Image();
var hydroDoor = new Image();
lavaDoor.src = './images/lavaGate.png';
hydroDoor.src = './images/hyrdoGate.png';

var plateImg = new Image();
plateImg.src = './images/plate.png';
var gateImg = new Image();
gateImg.src = './images/gate.png';

var water = new Image();
water.src = './images/BlueWater.png';

var gameMap = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 10, 1],
    [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 10, 11, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

]

var collisionMap = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],  //5water //6lava
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 5, 5, 5, 5, 1, 1, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1],

]

var diamondMap = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 13, 13, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 8, 8, 8, 8, 0, 0, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0],
]

var blockageMap = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 21, 0, 20, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

]


function drawMap(levelId){
    switch(levelId){
        case 'level1':
            for(var i=0; i<gameMap.length; i++){
                for(var j=0; j<gameMap[i].length; j++){
                    if(gameMap[i][j] === 1){
                        ctx.drawImage(tile,j*tileSize,i*tileSize,tileSize,tileSize);
                    }
                    if(gameMap[i][j] === 0){
                        // console.log('here')
                        ctx.fillStyle = "#322d16";
                        ctx.fillRect(j*tileSize,i*tileSize,tileSize,tileSize);
                    }
                    if(gameMap[i][j] === 10){
                        ctx.drawImage(lavaDoor,j*tileSize,i*tileSize,tileSize,tileSize)
                    }
                    if(gameMap[i][j] === 11){
                        ctx.drawImage(hydroDoor,j*tileSize,i*tileSize,tileSize,tileSize)
                    }
                }
            }
            break;
        case 'level2':
            console.log('in level2')
    
    }
    //grid
    // for (var i = 0; i<gameMap.length; i++){             

    //     ctx.fillStyle = "#ababab" ;                
    //     ctx.fillRect(0, i*tileSize, 1280, 1);  
    // }
    
    // for (var j = 0; j<gameMap[0].length; j++){
             
    //     ctx.fillRect(j*tileSize,0,1,720);
            
    // }
}

function drawDiamondMap(){
    for(var i=0; i<gameMap.length; i++){
        for(var j=0; j<gameMap[i].length; j++){
            if(diamondMap[i][j] === 8){
                ctx.fillStyle = "gray";
                ctx.fillRect(j*tileSize+10,i*tileSize-10,20,20);
            }
            if(diamondMap[i][j] === 9){
                ctx.fillStyle = "pink";
                ctx.fillRect(j*tileSize+10,i*tileSize-10,20,20)
            }
        }
    }
}

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
                // ctx.drawImage(water,j*tileSize,i*tileSize,tileSize,tileSize/2);
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


function drawBlockageMap(){
    // for(var i=0; i<blockageMap.length; i++ ){
    //     for(var j=0; j<blockageMap[i].length; j++){
    //         if(blockageMap[i][j] === 20){
    //             // console.log(i,j) //5,8 5,12
    //             ctx.drawImage(plateImg,j*tileSize,i*tileSize+38,20,10);
    //         }
    //         if(blockageMap[i][j] === 21){
    //             // console.log(i,j) //5,10
    //             ctx.drawImage(gateImg,j*tileSize,i*tileSize,20,40)
    //         }
    //     }
    // }
}


