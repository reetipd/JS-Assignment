var Collider = function(player){
    this.player = player;

    // console.log(this.player.getTop())
    this.getCollisionPoints = function(collisionMap,coinMap,tileSize){
        // console.log(this.player)
        var top, bottom, left, right, plateTileValue;


        if(this.player.getLeft() < 0){
            this.player.x = 0;
        }
        else if(this.player.getRight() > canvas.width){
            this.player.x = canvas.width - 40;
        }
        if(this.player.getTop() < 0){
            this.player.y = 0;
        }
        else if(this.player.getBottom() > canvas.height){
            this.player.y = canvas.height - 40;
        }
        //top-left
        top = Math.floor(this.player.getTop() / tileSize); //row
        left = Math.floor(this.player.getLeft() / tileSize);  // col
        value = collisionMap[top][left];
        plateTileValue = blockageMap[top][left];
        // console.log(plateTileValue)

        this.checkTileCollision(value, left*tileSize,top*tileSize, tileSize);
        this.checkPlateCollision(plateTileValue, left*tileSize, top*tileSize);


        //top-right
        top    = Math.floor(this.player.getTop() / tileSize);		 //row		
	    right  = Math.floor(this.player.getRight() / tileSize);     //col
	    value  = collisionMap[top][right];   //[y][x]
        plateTileValue = blockageMap[top][right];

    	this.checkTileCollision(value, right*tileSize, top*tileSize,tileSize);	
        this.checkPlateCollision(plateTileValue, right*tileSize, top*tileSize);	    	


	    bottom = Math.floor(this.player.getBottom() / tileSize);				// Gets bottom left
	    left   = Math.floor(this.player.getLeft()   / tileSize);
	    value  = collisionMap[bottom][left];
        // console.log(bottom)
        plateTileValue = blockageMap[bottom][left];
        doorTileValue = gameMap[bottom][left];
        this.checkPlayerOnDoor(doorTileValue);

		this.checkTileCollision(value, left*tileSize, bottom*tileSize, tileSize);
        this.checkPlateCollision(plateTileValue, left*tileSize, bottom*tileSize);
	    

	    bottom = Math.floor(this.player.getBottom() / tileSize);				// Gets bottom right
	    right  = Math.floor(this.player.getRight()  / tileSize);  
	    value  = collisionMap[bottom][right];
        plateTileValue = blockageMap[bottom][right];
        doorTileValue = gameMap[bottom][right];
        this.checkPlayerOnDoor(doorTileValue)


		this.checkTileCollision(value, right*tileSize, bottom*tileSize, tileSize);
        this.checkPlateCollision(plateTileValue, right*tileSize, bottom*tileSize);
        // console.log(bottom,right)
        if(plateTileValue !== 0){
            // console.log(plateTileValue)
            this.checkPlateCollision(plateTileValue, right*tileSize, bottom*tileSize);
            this.checkPlateCollision(plateTileValue, left*tileSize, bottom*tileSize);
        }

        //for coin in lava/water bottom-right
        bottom = Math.floor(this.player.getBottom() / tileSize);
        right = Math.floor(this.player.getRight() / tileSize);

        valueDiamond = diamondMap[bottom][right];
        this.checkDiamondCollision(valueDiamond,right*tileSize,bottom*tileSize);
        
        //bottom-left
        bottom = Math.floor(this.player.getBottom() / tileSize);
        left = Math.floor(this.player.getLeft() / tileSize);
       
        valueDiamond = diamondMap[bottom][left];
        this.checkDiamondCollision(valueDiamond,left*tileSize,bottom*tileSize);

        //for coin above the tiles
        // centerY = Math.floor(this.player.getCenterY()/tileSize);
        // centerX = Math.floor(this.player.getCenterX()/tileSize);
        // // console.log(centerY,centerX)
        // valueDiamond = coinMap[centerY][centerX];


        // if(valueDiamond !== 0){
        //     console.log(valueDiamond);
        // }

        //check doors

        
        




    }

    this.checkTileCollision = function(value,tileX,tileY){
        switch(value){
            case 0:
                break;
            
            case 1:
                // console.log(tileX)
                if(this.player.topCollision(tileY))return;
                if(this.player.leftCollision(tileX,tileY))return;
                if(this.player.rightCollision(tileX + tileSize,tileY))return;
                if(this.player.bottomCollision(tileY + tileSize))return;
                break;
                
            case 5: //water
                if(this.player.topLiquidCollision(tileY,5))return;
                tileY = tileY + tileSize/2;
                if(this.player.topCollision(tileY))return;
                if(this.player.bottomCollision(tileSize/2 + tileY))
                break;
            
            case 6: //water
                if(this.player.topLiquidCollision(tileY,6))return;
                tileY = tileY + tileSize/2;
                // console.log(tileY + tileSize/2)
                if(this.player.topCollision(tileY))return;
                if(this.player.bottomCollision(tileSize/2 + tileY))
                break;
                
        
    }

    this.checkDiamondCollision = function(value,tileX,tileY){
        switch(value){
            
            case 8:
                if(this.player.type === 5){
                    // console.log(tileX,tileY)
                    if(this.player.getRight() >= tileX ||
                       this.player.getLeft() <= tileX ||
                       this.player.getBottom() >= tileY){
                        //    console.log(tileX,tileY)
                            this.updateMap(tileX,tileY);
                            this.player.collectDiamond();
                            return true;
                    }return false;
                }
                break;
            case 9:
                if(this.player.type === 6){
                    if(this.player.getRight() >= tileX ||
                       this.player.getLeft() <= tileX ||
                       this.player.getBottom() >= tileY){
                        //    console.log(tileX,tileY)
                            this.updateMap(tileX,tileY);
                            this.player.collectDiamond();
                            return true;
                    }return false;

                }

            }  
        }
        
    }

    this.checkPlateCollision = function(value,tileX,tileY){
        // console.log(value);
        switch(value){
            case 20:
                // console.log(this.player)
                this.player.onPlate = true;
                g1.platePressed = true;
                // console.log('here')
                g1.updateGate(this.player);
                break;
            case 0:
                // this.player.onPlate = false;
                g1.platePressed = false;
                g1.updateGate(this.player);
                // this.updateGate(g1.posX,g1.posY);
                break;
            case 21:
                // console.log('here')
                // console.log(g1.posX)
                if(this.player.rightGateCollision(g1.posX,g1.posY))return;
                if(this.player.leftGateCollision(g1.posX))return;
                // if(this.player.topGateCollision(g1.posY))return;
                if(this.player.bottomGateCollision(g1.posY))return;
                break;
            
            

        }

    }
    this.val1;
    this.val2;
    this.checkPlayerOnDoor = function(value){
       
        if(this.player.type === 5 && value === 11) {
            // console.log('wareached')
            this.val1 = true;
        }
        if(this.player.type === 6 && value === 10){
           this.val2 = true;
            // console.log('lavaboy reached')
        }
        
        console.log(this.val1,this.val2)
        if(this.val2===true && this.val1=== true){
            console.log('here')
        }
    }

    this.updateMap = function(tileX,tileY){
        // console.log(tileX);
        // console.log(tileY/tileSize);
        X = tileX/tileSize;
        Y = tileY/tileSize;
        // console.log(X,Y)
        // console.log(diamondMap[X][Y])
        diamondMap[Y][X]=0;
        // console.log(diamondMap);
        drawDiamondMap();
    }
    this.gameover = function(){
        console.log('call')
        gameover.style.display = 'block';
        canvas.style.display = 'none';

    }
}