var Collider = function(){

    //check collision of player at different tilemap values
    this.checkTileCollision = function(player,value,tileX,tileY,tileSize,levelId){
        switch(value){

            case 0:  //no collision
                break;
            
            case 1:   //tile
                if(player.topCollision(tileY))return;
                if(player.leftCollision(tileX,tileY))return;
                if(player.rightCollision(tileX + tileSize,tileY))return;
                if(player.bottomCollision(tileY + tileSize))return;
                break;
            
            case 4: //goo
                if(player.topGooCollision(tileY,levelId))return;
                tileY = tileY + tileSize/2;
                if(player.topCollision(tileY))return;
                if(player.bottomCollision(tileSize/2 + tileY));
                break;
                
            case 5: //water
                if(player.topLiquidCollision(tileY,5,levelId))return;
                tileY = tileY + tileSize/2;
                if(player.topCollision(tileY))return;
                if(player.bottomCollision(tileSize/2 + tileY));
                break;
            
            case 6: //lava
                if(player.topLiquidCollision(tileY,6,levelId))return;
                tileY = tileY + tileSize/2;
                if(player.topCollision(tileY))return;
                if(player.bottomCollision(tileSize/2 + tileY))
                break;

            case 7: //changing liquid
                if(player.topLiquidCollision(tileY,5,levelId))return;  //initial water
                tileY = tileY + tileSize/2;
                if(player.topCollision(tileY))return;
                if(player.bottomCollision(tileSize/2 + tileY))
                break;

            case 17: //changing liquid
                if(player.topLiquidCollision(tileY,6,levelId))return;  //initial water
                tileY = tileY + tileSize/2;
                if(player.topCollision(tileY))return;
                if(player.bottomCollision(tileSize/2 + tileY))
                break;
                
        
    }

    //check collision of player with diamonds
    this.checkDiamondCollision = function(player,value,tileX,tileY){
        switch(value){
            //blue diamond above liquid 
            case 8:
                if(player.type === 5){
                    if(player.getRight() >= tileX ||
                       player.getLeft() <= tileX ||
                       player.getBottom() >= tileY){
                            this.updateMap(tileX,tileY);
                            player.collectDiamond();
                            return true;
                    }return false;
                }
                break;

            //red diamond above liquid
            case 9:
                if(player.type === 6){
                    if(player.getRight() >= tileX ||
                       player.getLeft() <= tileX ||
                       player.getBottom() >= tileY){
                            this.updateMap(tileX,tileY);
                            player.collectDiamond();
                            return true;
                    }return false;

                }
                break;
                
                //blue diamond air
                case 18:
                    if(player.type === 5){
                        if(player.getRight() >= tileX ||
                           player.getLeft() <= tileX ||
                           player.getBottom() >= tileY || 
                           player.getTop() <= tileY){
                                this.updateMap(tileX,tileY);
                                player.collectDiamond();
                                return true;
                        }return false;
                    }
                    break;
                
                //red diamond air
                case 19:
                    if(player.type === 6){
                        if(player.getRight() >= tileX ||
                            player.getLeft() <= tileX ||
                            player.getBottom() >= tileY ||
                            player.getTop() <= tileY){
                                this.updateMap(tileX,tileY);
                                player.collectDiamond();
                                return true;
                        }return false;
                    }
                    break;

            }  
        }
        
    }

    //check player collision with plate / gate 
    this.checkPlateCollision = function(player,value,tileX,tileY,loc){
        this.loc = loc;
        this.X;
        this.Y;
        this.count;
        switch(value){
            //liquid change
            case 23:
                this.Y = this.loc[0];
                this.X = this.loc[1];
                count = this.loc[2];
                loop = this.X - count + 1;
                if(player.type === 5){
                    for(var j=this.X; j>=6; j--){
                        collisionMap[this.Y][j] = 17;
                    }
                }
                else if(player.type === 6){
                    for(var j=this.X; j>=6; j--){
                            collisionMap[this.Y][j] = 7;
                        }
                }
                break;
            case 25:   //block
                if(player.rightCollision(tileX,tileY))return;
                if(player.leftCollision(tileX))return;
                if(player.bottomCollision(tileY + tileSize))return;
                if(player.topCollision(tileY))return;
                break;
            case 26:  //open blockage block
                box.update();
                break;
            
            case 27:   //move platformY
                platform4.move();
                break;
            
            case 30:   //open bloakage gate for player-6
                if(player.type === 5){
                    gate1.open();
                }
                break;

        }

    }

    //update map after diamond collection
    this.updateMap = function(tileX,tileY){
        X = tileX/tileSize;
        Y = tileY/tileSize;
        diamondMap[Y][X]=0;
    }
}