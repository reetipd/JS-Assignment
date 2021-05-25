function playGame(levelId){
    // var id = levelId - 1;
    // console.log(levelData[id].status)
    ctx.clearRect(0,0,canvas.width,canvas.height);
    getLevelDate(levelId);
    
    drawMap();
    loc = drawCollisionMap(levelId);

    drawDiamondMap();
    drawBlockageMap();
   

    if(levelId === '1'){
        gate1.draw();
        gate1.collision(collisionMap,tileSize);
    }
    if(levelId === '2'){
        box.draw();
    }
    
    if(levelId === '3'){
        for(let index = 0; index < platforms.length; index ++){
            let platform = platforms[index];    
            ctx.drawImage(greenTile,platform.x,platform.y,2*tileSize,tileSize);
            platform.move();
        }
        for(var i=0; i<gooLiquid.length; i++){
            gooLiquid[i].draw();
            lavaBoy.topGooLiquidCollision();
            hydroGirl.topGooLiquidCollision();
            hydroGirl.sideGooCollision(levelId);
            lavaBoy.sideGooCollision(levelId);
        }
    }
    if(levelId === '4'){
        ctx.drawImage(greenTile,platform4.x,platform4.y,2*tileSize,tileSize);
        
    }

    if(levelId === '5'){
  
        function myTimerFunction(){
            if(seconds > 0){
                clock.play();
                seconds --; 
            }
            else{
           
                clearInterval(time);
                stopAudio(clock);
                gameOver();
            }
        }

        if(!time){

            time = setInterval(function(){
                myTimerFunction();
            },1000); //every second interval
        }
                
        ctx.font = '40px Arial';
        ctx.fillStyle = "#ccbaba";
        ctx.fillText(seconds,400,35);

    }
    
 
    lavaBoy.draw();
    hydroGirl.draw();

    lavaBoy.update();
    hydroGirl.update();

    position1 = lavaBoy.collision(collisionMap,diamondMap,blockageMap,tileSize,loc,levelId);
    position2 = hydroGirl.collision(collisionMap,diamondMap,blockageMap,tileSize,loc,levelId);

    if(levelId === '1'){
        lavaBoy.gate();
        hydroGirl.gate();
    }

    if(levelId === '2'){
        box.collision(collisionMap,tileSize);
        lavaBoy.block();
        hydroGirl.block();
    }

    if(levelId === '3'){
        lavaBoy.behave();
        hydroGirl.behave();
      
    }
    if(levelId === '4'){
        lavaBoy.behavePlatformY();
        hydroGirl.behavePlatformY();
      
    }


    if((position2 === 11 && hydroGirl.type === 5) && (position1 === 10 && lavaBoy.type === 6)){
        levelData[levelId - 1].status = 1;
        ctx.font = '40px Arial';
        ctx.fillStyle = "#ccbaba";
        ctx.fillText('Congratulations!!!',400,50);
        setTimeout(function(){
            instruction.style.display = 'block';
            canvas.style.display = 'none';
            document.location.reload();
        },3000);
    }

  
    ctx.font = '40px Arial';
    ctx.fillStyle = "#ccbaba";
    ctx.drawImage(redDiamond,40,7,35,35)
    ctx.fillText(lavaBoy.score,90,35);
    ctx.drawImage(blueDiamond,140,7,35,35)
    ctx.fillText(hydroGirl.score,190,35);
    myReq = requestAnimationFrame(function(){
        playGame(levelId)
    });
    
    
}



function getLevelDate(levelId){
    levelId = levelId-1;
    blockageMap = levelData[levelId].blockageMap;
    gameMap = levelData[levelId].gameMap;
    collisionMap = levelData[levelId].collisionMap;
    diamondMap = levelData[levelId].diamondMap;
    status = levelData[levelId].status;
}

function gameOver(){
    gameover.style.display = 'block';
    canvas.style.display = 'none';
}

function stopAudio(clock){
    clock.pause();
    clock.src = "";
}

function startAgain(){
    document.location.reload();
}

// var startscreen = document.querySelector('.startscreen');
// startscreen.addEventListener('click',function(){
//     startscreen.style.display = 'none';
//     instruction.style.display = 'block';
// })


// level1.addEventListener('click', function startGame()
//     {
//         levelId = level1.id;
//         instruction.style.display = 'none';
//         canvas.style.display = 'block';
//         window.requestAnimationFrame(function (){
//             playGame(levelId);
//         });
//     }
// );

// level2.addEventListener('click', function startGame()
//     {
//         levelId = level2.id;
//         instruction.style.display = 'none';
//         canvas.style.display = 'block';
//         window.requestAnimationFrame(function (){
//             playGame(levelId);
//         });
//     }
// );

// level3.addEventListener('click', function startGame()
//     {
//         levelId = level3.id;
//         instruction.style.display = 'none';
//         canvas.style.display = 'block';
//         window.requestAnimationFrame(function (){
//             playGame(levelId);
//         });
//     }
// );

// level4.addEventListener('click', function startGame()
//     {
//         levelId = level4.id;
//         instruction.style.display = 'none';
//         canvas.style.display = 'block';
//         window.requestAnimationFrame(function (){
//             playGame(levelId);
//         });
//     }
// );

gameover.addEventListener('click',startAgain);

function start(levelId){
    instruction.style.display = 'none';
    canvas.style.display = 'block';
    window.requestAnimationFrame(function (){
        playGame(levelId);
    });
}

