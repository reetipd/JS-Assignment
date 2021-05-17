var Collider = function(player){
    this.player = player;

    // console.log(this.player.getTop())
    this.getCollisionPoints = function(collisionMap,coinMap,tileSize){
        // console.log(this.player)
        var top, bottom, left, right;


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
        // console.log(value)
        this.checkTileCollision(value, left*tileSize,top*tileSize, tileSize);


        //top-right
        top    = Math.floor(this.player.getTop() / tileSize);		 //row		
	    right  = Math.floor(this.player.getRight() / tileSize);     //col
	    value  = collisionMap[top][right];   //[y][x]
	    // coinValue = coinMap [top][right];

    	this.checkTileCollision(value, right*tileSize , top*tileSize,tileSize);		    	


	    bottom = Math.floor(this.player.getBottom() / tileSize);				// Gets bottom left
	    left   = Math.floor(this.player.getLeft()   / tileSize);
	    value  = collisionMap[bottom][left];
	    // coinValue = coinMap [bottom][left];

		this.checkTileCollision(value, left*tileSize , bottom*tileSize, tileSize);
	    

	    bottom = Math.floor(this.player.getBottom() / tileSize);				// Gets bottom right
	    right  = Math.floor(this.player.getRight()  / tileSize);  
	    value  = collisionMap[bottom][right];
	    // coinValue = coinMap [bottom][right];

		this.checkTileCollision(value, right*tileSize , bottom*tileSize, tileSize);
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
                this.player.bottomCollision(tileY);
                break;
                
        }
    }

}