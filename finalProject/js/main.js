function playGame(levelId){
    if(lavaBoy.start && hydroGirl.start){
        if(currentLevel==(levelId)){
            play(levelId);
    
            myReq = requestAnimationFrame(function(){
                playGame(levelId)
            });
        }
    }
    
    
}

function play(levelId){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    getLevelDate(levelId);
    drawMap();
    loc = drawCollisionMap(levelId);

    drawDiamondMap();
    drawBlockageMap();
   

    if(levelId == 1){
        gate1.draw();
        gate1.collision(collisionMap,tileSize);
    }
    if(levelId == 2){
        box.draw();
    }
    
    if(levelId == 3){
        for(let index = 0; index < platforms.length; index ++){
            let platform = platforms[index];    
            ctx.drawImage(greenTile,platform.x,platform.y,2*tileSize,tileSize);
            platform.move();
        }
        for(var i=0; i<gooLiquid.length; i++){
            gooLiquid[i].draw();
            lavaBoy.topGooLiquidCollision(levelId);
            hydroGirl.topGooLiquidCollision(levelId);
            hydroGirl.sideGooCollision(levelId);
            lavaBoy.sideGooCollision(levelId);
        }
    }
    if(levelId == 4){
        ctx.drawImage(greenTile,platform4.x,platform4.y,2*tileSize,tileSize);
        
    }
    lavaBoy.draw();
    hydroGirl.draw();

    lavaBoy.update();
    hydroGirl.update();

    position1 = lavaBoy.collision(collisionMap,diamondMap,blockageMap,tileSize,loc,levelId);
    position2 = hydroGirl.collision(collisionMap,diamondMap,blockageMap,tileSize,loc,levelId);

    if(levelId == 1){
        lavaBoy.gate();
        hydroGirl.gate();
    }

    if(levelId == 2){
        box.collision(collisionMap,tileSize);
        lavaBoy.block();
        hydroGirl.block();
    }

    if(levelId == 3){
        lavaBoy.behave();
        hydroGirl.behave();
      
    }
    if(levelId == 4){
        lavaBoy.behavePlatformY();
        hydroGirl.behavePlatformY();
      
    }


    if((position2 === 11 && hydroGirl.type === 5) && (position1 === 10 && lavaBoy.type === 6)){
    
        performReset(levelId);
                
        congratulations.style.display = 'block';

        setTimeout(function(){
            instruction.style.display = 'block';
            canvas.style.display = 'none';
            congratulations.style.display = 'none';
            lavaBoy.resetScore();
            hydroGirl.resetScore();
        },2000);
        lavaBoy.reset();
        hydroGirl.reset();
        cancelAnimationFrame(myReq);

    }
    ctx.font = '32px Arial';
    ctx.fillStyle = "#ccbaba";
    ctx.drawImage(redDiamond,40,5,30,30)
    ctx.fillText(lavaBoy.score,90,32);
    ctx.drawImage(blueDiamond,140,5,30,30)
    ctx.fillText(hydroGirl.score,190,32);
}

function performReset(){
    if(currentLevel == 1){

        gate1.reset();
        levelData[0].diamondMap = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 8, 0, 9, 0, 8, 0, 0, 0],
            [0, 19, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 9, 9, 0, 0, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 8, 8, 8, 8, 0, 0, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0],
        ]
        levelData[0].collisionMap = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],  //5water //6lava
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 1, 1, 7, 7, 7, 7, 7, 7, 7, 7, 1, 1, 1, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 1, 1, 5, 5, 5, 5, 1, 1, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1],
        ]
    }
    if(currentLevel == 2){
        levelData[1].diamondMap = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 18, 18, 18, 19, 19, 19, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 19, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 18, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 9, 9, 9, 0, 0, 8, 8, 8, 0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 0, 0, 0, 0, 1, 1, 1, 1, 1],
            [0, 0, 18, 19, 18, 19, 18, 19, 18, 19, 18, 19, 18, 19, 18, 19, 18, 19, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0],
            ]
        
        box.reset();
    }
    if(currentLevel == 3){
        levelData[2].diamondMap = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 18, 0, 19, 0, 18, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 8, 8, 1, 0, 0, 0, 1, 1, 8, 1, 9, 1, 1, 0, 0, 1, 9, 9, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 1, 8, 8, 8, 1, 0, 0, 1, 9, 9, 9, 1, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 8, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 9, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ]
    }
    if(currentLevel == 4){
        levelData[3].diamondMap = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 18, 18, 0, 0, 18, 18, 0, 0, 18, 18, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ]
        platform4.reset();
        currentLevel = 1;
        document.getElementById(currentLevel).disabled = false;
        
        
    }
    else{
        currentLevel = parseInt(currentLevel) + 1;
        document.getElementById(currentLevel).disabled = false;
        document.getElementById(currentLevel).classList.add('active');

    }
}

function getLevelDate(levelId){

    levelId = levelId-1;
    blockageMap = levelData[levelId].blockageMap;
    gameMap = levelData[levelId].gameMap;
    collisionMap = levelData[levelId].collisionMap;
    diamondMap = levelData[levelId].diamondMap;
    status = levelData[levelId].status;
}


function startAgain(){
    document.location.reload();
}

// gameover.addEventListener('click',startAgain);

function startG(levelId){
    currentLevel = levelId;
    instruction.style.display = 'none';
    canvas.style.display = 'block';
    playGame(levelId);
}

function gameoverFunc(levelId){
  
    gameover.style.display = 'block';
    canvas.style.display = 'none';
    // lavaBoy.reset();
    // hydroGirl.reset();
    cancelAnimationFrame(myReq);
    
    
    reset.addEventListener('click',function(){
        lavaBoy.reset();
        hydroGirl.reset();
        lavaBoy.resetScore();
        hydroGirl.resetScore();
        cancelAnimationFrame(myReq);
        gameover.style.display = 'none';
        canvas.style.display = 'block';
        performReset();
        startG(levelId);
       
    })
}

home.addEventListener('click',startAgain);