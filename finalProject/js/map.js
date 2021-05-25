function drawMap(levelId){
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
   
}
var frameX = 0;
function drawDiamondMap(){
    for(var i=0; i<diamondMap.length; i++){
        for(var j=0; j<diamondMap[i].length; j++){
            if(diamondMap[i][j] === 8){
                // ctx.fillStyle = "gray";
                // ctx.fillRect(j*tileSize+10,i*tileSize-10,20,20);

                ctx.drawImage(blueDiamond,j*tileSize+10,i*tileSize-10,20,20);
                // ctx.drawImage(blue,frameX*32,0,32,32,j*tileSize+10,i*tileSize-10,32,32);
            }
            if(diamondMap[i][j] === 9){
                // ctx.fillStyle = "pink";
                // ctx.fillRect(j*tileSize+10,i*tileSize-10,20,20);
                ctx.drawImage(redDiamond,j*tileSize+10,i*tileSize-10,20,20);
            }
            if(diamondMap[i][j] === 18){
                // ctx.fillStyle = "gray";
                // ctx.fillRect(j*tileSize+10,i*tileSize-10,20,20);
                ctx.drawImage(blueDiamond,j*tileSize+10,i*tileSize+10,20,20);
            }
            if(diamondMap[i][j] === 19){
                // ctx.fillStyle = "pink";
                // ctx.fillRect(j*tileSize+10,i*tileSize-10,20,20);
                ctx.drawImage(redDiamond,j*tileSize+10,i*tileSize+10,20,20);
            }
        }
    }
}

function drawCollisionMap(){
    // console.log('called')
    var l1,l2;
    var count = 0;
    for(var i=0; i<gameMap.length; i++){
        for(var j=0; j<gameMap[i].length; j++){
            if(collisionMap[i][j] === 5) {  //waterpath      
                ctx.drawImage(bluePool,j*tileSize,i*tileSize,tileSize,tileSize/2);
            }
            if(collisionMap[i][j] === 6) {  //waterpath      
                ctx.drawImage(redPool,j*tileSize,i*tileSize,tileSize,tileSize/2);
             }
            if(collisionMap[i][j] === 4){
                ctx.fillStyle = 'green';
                ctx.fillRect(j*tileSize,i*tileSize,tileSize,tileSize/2);
            }
            if(collisionMap[i][j] === 7){
                ctx.drawImage(bluePool,j*tileSize,i*tileSize,tileSize,tileSize/2);
                l1=i;
                l2=j;
                count ++ ;

            }
            if(collisionMap[i][j] === 17){
                ctx.drawImage(redPool,j*tileSize,i*tileSize,tileSize,tileSize/2);
                l1=i;
                l2=j;
                count ++ ;

            }
        }
    }
    return [l1,l2,count];
}

function drawBlockageMap(){
    for(var i=0; i<blockageMap.length; i++ ){
        for(var j=0; j<blockageMap[i].length; j++){
            if(blockageMap[i][j] === 20 || blockageMap[i][j] === 27 || blockageMap[i][j] === 30){ 
                ctx.drawImage(plateImg,j*tileSize,i*tileSize+38,24,15);
            }
            if(blockageMap[i][j] === 23){  ///liquid change
                // console.log(i,j) 
                ctx.drawImage(plateImg,j*tileSize,i*tileSize+38,24,15);
            }
            if(blockageMap[i][j] === 25){  ///block 
                // console.log(i,j) 
                ctx.drawImage(block,j*tileSize,i*tileSize,tileSize,tileSize);
            }
            if(blockageMap[i][j] === 26){ //to remove block
                ctx.drawImage(plateImg,j*tileSize,i*tileSize+38,24,15);
            }

            
        }
    }
}


//rows - 12
//columns -20
//1 - map tile
//0 - no tile
//10 - final door(biy)
//11 - final door(girl)
//4 - goo liquid
//5 - water liquid
//6 - lava 
//7,17 - change liquid
//8 - blue diamond(liquid)
//9 - red diamond (liquid)
//18 - blue diamond(tile)
//19 = red diamond(tile)
