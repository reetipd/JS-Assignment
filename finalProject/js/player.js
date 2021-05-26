var Player = function(x,y,type){
    this.x = x;
    this.y = y;

    this.initialX = x;
    this.initialY = y;

    this.width = 20;
    this.height = 35;
    this.speed = 5;
    this.jumpSpeed = -5;
    // this.gravity = 0.8;
    this.xV = 0;
    this.yV = 0;


    this.type = type; 
    this.score = 0;

    this.gravity = 1;

    this.moving_right = false;
    this.moving_left = false;
    this.moving_up = false;
    this.moving_down = false;

    this.onPlate = false;

    this.oldX = x;  //keep track of last position of player, used for collision detection
    this.oldY = y;

    this.start = true;

    this.animation = new Animation();

    this.sprite_sheet = {
         //idleRight, runRight, idleLeft, runLeft, jump
        // frame_sets : [[0,1,2,3],      
        //               [4,5,6,7,8,9],
        //               [10,11,12,13],
        //               [14,15,16,17,18,19],
        //               [20,21,22,23]], 
        frame_sets : [[0,1,2,3],[4],[5,6,7,8]], //left,idle,right
        // frame_sets : [[0],[1,2,3,4,5,7,8,9],[10,11,12,13,14,15,16]], // idle,jump,run
        image : new Image()
    };

    this.jumpAudio = new Audio();
    this.jumpAudio.src = './audio/Jump_fb.wav';

    this.diamondAudio = new Audio();
    this.diamondAudio.src = './audio/Diamond.wav';

    this.dead = new Audio();
    this.dead.src = './audio/Death.wav';

    

    this.draw = function(){
        if (this.type === 6){
            this.sprite_sheet.image.src = './images/boy.png';
            ctx.drawImage(this.sprite_sheet.image,this.animation.frame * 40,0,40,40,Math.floor(this.x),Math.floor(this.y),this.width + 5,this.height);
            // ctx.drawImage(boy,this.x,this.y,this.width,this.height);
        }
        if (this.type === 5){
            ctx.drawImage(girl,this.x,this.y,this.width,this.height);
            // this.sprite_sheet.image.src = './images/ssss.png';
            // ctx.drawImage(this.sprite_sheet.image,this.animation.frame * 40,0,40,40,this.x,this.y,40,40);
        }
    }

    this.reset = function(){
        // console.log('called reser')
   
        this.x = this.initialX;
        this.y = this.initialY;
        this.score = 0;
    }

    this.update = function(){

        this.oldX = this.x;
        this.oldY = this.y;

        if(this.moving_right){
            this.animation.change(this.sprite_sheet.frame_sets[2],25);
            this.xV = this.speed; 
        }
        if(this.moving_left){
            this.animation.change(this.sprite_sheet.frame_sets[0],25);
            this.xV = -this.speed;
        }
        if(!this.moving_left && !this.moving_right){
            this.animation.change(this.sprite_sheet.frame_sets[1],5);
            this.xV = 0;
        }

        this.yV += this.gravity;

        this.x += this.xV;
        this.y += this.yV;

    }
    this.moveLeft = function(){
        this.moving_left = true;
    
    }
    this.moveRight = function(){
        this.moving_right = true;
    }
    this.moveUp = function(){
        if(!this.moving_up)
            {
            // this.animation.change(this.sprite_sheet.frame_sets[1],15);
            this.moving_up = true;
            this.yV = -15;
            this.jumpAudio.play();
        }
        
     
    }
    this.moveDown = function(){
        this.moving_down = true;
    }
    this.stop = function(){
        this.moving_left = false;
        this.moving_right = false;
        this.xV = 0;
    }

    this.getTop = function(){
        return this.y;
    }
    this.getBottom = function(){
        return this.y + this.height;
    }
    this.getRight = function(){
        return this.x + this.width;
    }
    this.getLeft = function(){
        return this.x;
    }
    
    this.getOldTop = function(){
        return this.oldY;
    }
    this.getOldBottom = function(){
        return this.oldY + this.height;
    }
    this.getOldRight = function(){
        return this.oldX + this.width;
    }
    this.getOldLeft = function(){
        return this.oldX;
    }

    this.collider = new Collider();

    this.getCollider = function(){
        return this.collider;
    }

    this.collision = function(collisionMap,diamondMap,blockageMap,tileSize,loc,levelId){
        this.blockageMap = blockageMap;
        this.loc = loc;
            
        var top, bottom, left, right;


        if(this.getLeft() < 0){
            this.x = 0;
        }
        else if(this.getRight() > canvas.width){
            this.x = canvas.width - 40;
        }
        if(this.getTop() < 0){
            this.y = 0;
        }
        else if(this.getBottom() > canvas.height){
            this.y = canvas.height - 40;
        }
        //top-left
        top = Math.floor(this.getTop() / tileSize); //row
        left = Math.floor(this.getLeft() / tileSize);  // col
        value = collisionMap[top][left];
        plateTileValue = blockageMap[top][left];

        this.collider.checkTileCollision(this,value, left*tileSize,top*tileSize, tileSize,levelId);
        this.collider.checkPlateCollision(this,plateTileValue, left*tileSize, top*tileSize,this.loc);

        //top-right
        top    = Math.floor(this.getTop() / tileSize);		 //row		
	    right  = Math.floor(this.getRight() / tileSize);     //col
	    value  = collisionMap[top][right];   //[y][x]
        plateTileValue = blockageMap[top][right];
    	this.collider.checkTileCollision(this,value, right*tileSize, top*tileSize,tileSize,levelId);	
        this.collider.checkPlateCollision(this,plateTileValue, right*tileSize, top*tileSize,this.loc);	   


	    bottom = Math.floor(this.getBottom() / tileSize);				// Gets bottom left
	    left   = Math.floor(this.getLeft()   / tileSize);
	    value  = collisionMap[bottom][left];

        plateTileValue = blockageMap[bottom][left];
        doorTileValue = gameMap[bottom][left];

		this.collider.checkTileCollision(this,value, left*tileSize, bottom*tileSize, tileSize,levelId);
        this.collider.checkPlateCollision(this,plateTileValue, left*tileSize, bottom*tileSize,this.loc);

	    

	    bottom = Math.floor(this.getBottom() / tileSize);				// Gets bottom right
	    right  = Math.floor(this.getRight()  / tileSize);  
	    value  = collisionMap[bottom][right];
        plateTileValue = blockageMap[bottom][right];
        doorTileValue = gameMap[bottom][right];
  


		this.collider.checkTileCollision(this,value, right*tileSize, bottom*tileSize, tileSize,levelId);
        this.collider.checkPlateCollision(this,plateTileValue, right*tileSize, bottom*tileSize,this.loc);
        

        //for coin in lava/water bottom-right
        bottom = Math.floor(this.getBottom() / tileSize);
        right = Math.floor(this.getRight() / tileSize);

        valueDiamond = diamondMap[bottom][right];
        this.collider.checkDiamondCollision(this,valueDiamond,right*tileSize,bottom*tileSize);
        
        //bottom-left
        bottom = Math.floor(this.getBottom() / tileSize);
        left = Math.floor(this.getLeft() / tileSize);
       
        valueDiamond = diamondMap[bottom][left];
        this.collider.checkDiamondCollision(this,valueDiamond,left*tileSize,bottom*tileSize);

        return doorTileValue;

    }
    
    //check player collision with the top of the tile(1)
    this.topCollision = function(top){
        if(this.getBottom() > top && this.getOldBottom() <= top){  //player moving from top to bottom
            this.y = top - this.height - 0.0001;
            this.yV = 0;
            this.moving_up = false;
            return true;
        }
        return false;
    }

    //check player collision with left side of the tile(1)
    this.leftCollision = function(tileLeft){   
        if(this.getRight() > tileLeft && this.getOldRight() <= tileLeft){  //player moving from left to right
            {
                this.x = tileLeft - this.width - 0.0001;
                this.xV = 0;
                return true;
            }
            
        }
        return false;
    }

    //check player collision with right side of the tile(1)
    this.rightCollision = function(tileRight){
        if(this.getLeft() < tileRight && this.getOldLeft() >= tileRight){ 
            {
                this.x = tileRight + 0.0001;
                this.xV = 0.1;
                return true;
            }   
            
        }
        return false;
    }



    //check player collision with bottom side of the tile(1)
    this.bottomCollision = function(tileBottom){
        if(this.getTop() < (tileBottom) && this.getOldTop() >= (tileBottom)){
            this.y = tileBottom - 0.0001;
            this.yV = 0;
            return true;
        }
        return false;
    }

    //check player collision with the top of liquid(water/fire)
    this.topLiquidCollision = function(tileTop,liquidType,levelId){
        if(this.getBottom() > tileTop && this.getOldBottom() <= tileTop){
            if(this.type !== liquidType){
                // console.log('dead')
                this.dead.play();
                // this.gameover(levelId)
                // console.log(levelId)
                gameoverFunc(levelId);
            }
            return true;
        }
        return false;
    }

    //check player collision with top of goo
    this.topGooCollision = function(tileTop,levelId){
        if(this.getBottom() >= tileTop && this.getOldBottom() <= tileTop){
            if(this.type === 5 || this.type === 6){
                this.dead.play();
                gameoverFunc(levelId);
            }
            return true;
        }
        return false;
    }

    //check player collision with goo liquid of greenLiquid class
    this.topGooLiquidCollision = function(levelId){
        tileTop = gooLiquid[0].x * tileSize - 1;
        tileStart = gooLiquid[0].y * tileSize;
        ln = gooLiquid.length - 1;
        tileEnd = (gooLiquid[ln].y * tileSize) + tileSize;

        if(this.getLeft() <= tileEnd && this.getRight() >= tileStart){
            if(this.getBottom() > tileTop && this.getOldBottom() <= tileTop){
                if(this.type === 5 || this.type === 6){
                    this.dead.play();
                    gameoverFunc(levelId);
                }
                return true;
            }
            return false;
        }
    }

    this.sideGooCollision = function(levelId){
        tileTop = gooLiquid[0].x * tileSize;
        tileStart = gooLiquid[0].y * tileSize;
        ln = gooLiquid.length - 1;
        tileEnd = (gooLiquid[ln].y * tileSize) + tileSize;
        if((this.getBottom() + 0.0001) === tileTop){
            if(this.getLeft() <= tileEnd && this.getOldLeft() >= tileEnd || this.getRight() >= tileStart && this.getOldRight() <= tileStart){
                if(this.type === 5 || this.type === 6){
                    this.dead.play();
                    gameoverFunc(levelId);
                }
                return true;  
        }
        }
        
    }

    this.collectDiamond = function(){
        this.score += 1;
        this.diamondAudio.play();
    }


    this.topBoxCollision = function(top){
        if(this.getBottom() > top && this.getOldBottom() <= top){
            this.y = top - this.height - 0.01;
            this.yV = 0;
            return true;
        }
        return false;
    }

    this.rightGateCollision = function(gateRight,gateHeight){
        gateRight = gateRight+20;
        if(this.getLeft() <= gateRight && this.getOldRight() >= gateRight){
            this.xV = 0;
            this.x = gateRight - 0.01;
            return true;
        }
        return false;
    }
    this.leftGateCollision = function(gateLeft){
        if(this.getRight() >= gateLeft && this.getOldRight() <= gateLeft){
            this.x = gateLeft - this.width;
            this.xV = 0;
            return true;
        }
        return false;
    }


    this.bottomGateCollision = function(gateBottom){
        if(this.getTop() <= gateBottom && this.getOldTop() >= gateBottom){
            this.y = gateBottom;
            this.yV = 0;
            return true;
        }
        return false;
    }

    // this.gameover = function(levelId){
    //     this.start = false;
    //     stopAudio(clock);
    //     gameover.style.display = 'block';
    //     canvas.style.display = 'none';
    //     reset.addEventListener('click',function(){
    //         gameover.style.display = 'none';
    //         canvas.style.display = 'block';
    //         // that.reset();
    //         // console.log(that)
    //         performReset();
    //         start(levelId)
    //     })
    // }

    //check player collision with the blockage gate
    this.gate = function(){
        if(this.getLeft() <= gate1.posX + gate1.width 
        && this.getRight() >= gate1.posX &&
          this.getTop() <= gate1.posY + gate1.height &&
          this.getBottom() >= gate1.posY){
            this.x = gate1.posX + gate1.width;
        }
    }

    this.block = function(){
        if (this.getTop() <= box.posY + box.height &&
           this.getBottom() >= box.posY &&
           this.getLeft() <= box.posX + box.width&&
           this.getRight() >= box.posX){
            this.y = box.posY + box.height;
        }
    }

    //check player collision with platformX
    this.behave = function(){
        for(let index = 0; index<platforms.length ; index++){
            let platform = platforms[index];

            if(this.x + tileSize * 0.5 > platform.getLeft() && this.x + tileSize * 0.5 < platform.getRight()){
                if(this.getBottom() > platform.getFloor() && this.getOldBottom() <= platform.getOldFloor()){
                    this.y  = platform.y - tileSize * 0.5;
                    this.yV = platform.y;
                    this.xV += (platform.vx - this.xV) ;
                    this.x += this.xV;
                }
            }
        }
    }

    //check player collision with platformY
    this.behavePlatformY = function(){
        if(this.x + tileSize * 0.5 > platform4.getLeft() && this.x + tileSize * 0.5 < platform4.getRight()){
            if(this.getBottom() > platform4.getFloor() && this.getOldBottom() <= platform4.getOldFloor()){
                this.y  = platform4.y - tileSize * 0.5;
                this.yV = platform4.y;
                this.xV += (platform4.vx - this.xV) ;
                this.x += this.xV;
            }
        
        }
    }


}
