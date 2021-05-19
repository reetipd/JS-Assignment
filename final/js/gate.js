var Gate = function(x,y,width,height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.posX;
    this.posY;
    this.platePressed = false;
    this.gateOpened = false;

    this.draw = function(){
        // for(var i=0; i<blockageMap.length; i++ ){
        //     for(var j=0; j<blockageMap[i].length; j++){
        //         if(blockageMap[i][j] === 20){
        //             // console.log(i,j) //5,8 5,12
        //             ctx.drawImage(plateImg,j*tileSize,i*tileSize+38,20,10);
        //         }
        //         if(blockageMap[i][j] === 21){
        //             // console.log(i,j) //5,10
        //             ctx.drawImage(gateImg,j*tileSize,i*tileSize,20,40);
        //             this.posX = j*tileSize;
        //             this.posY = i*tileSize;

        //         }
        //     }
        // }
        this.posX = this.y*tileSize;
        this.posY = this.x*tileSize;
        ctx.drawImage(plateImg,8*tileSize,5*tileSize+38,20,10);
        ctx.drawImage(gateImg,this.y*tileSize,this.x*tileSize,20,40);
        ctx.drawImage(plateImg,12*tileSize,5*tileSize+38,20,10);
        // console.log(this.posX); //200
        // console.log(this.posY)  //400
    }
    // this.updateGate = function(player,collider){
    //     // console.log(player)
    //     if(player.onPlate){
    //         // console.log(blockageMap[this.x][this.y]);
    //         blockageMap[this.x][this.y] = 0;
    //         // console.log(this.x)
    //         // console.log(this.y)
    //         this.newX = this.x+1;
    //         blockageMap[this.newX][this.y] = 21;
    //         // console.log(blockageMap)
            
    //         // g1.draw();
    //     }
    //     else{
    //         blockageMap[this.x][this.y] = 21;
    //         this.newX = this.x + 1;
    //         blockageMap[this.newX][this.y] = 0;
    //     }
    //     // if(!player.onPlate){
    //     //     // console.log(this.x,this.y)
    //     //     blockageMap[this.x][this.y] = 21;
    //     //     this.newX = this.x+1;
    //     //     // console.log(this.newX);
    //     //     blockageMap[this.newX][this.y] = 0;
    //     //     // console.log(blockageMap)
    //     // }
    //     // else{
    //     //     console.log(blockageMap[this.x][this.y]);
    //     //     blockageMap[this.x][this.y] = 0;
    //     //     this.newX = this.x+1;
    //     //     blockageMap[this.newX][this.y] = 21;
    //     //     // g1.draw();
    //     // }
       
    // }

    // this.updateGate = function(player){
    //     // console.log(player.onPlate)
    //     if(player.onPlate){
    //         // blockageMap[this.x][this.y] = 0;
    //         // g1.draw();
    //         // console.log(blockageMap[this.x][this.y])
    //         // this.newX = this.x + 1;
    //         // blockageMap[this.newX][this.y] = 21;
    //         // this.draw();
    //         // player.onPlate = false;
    //     }
    //     // if(player.onPlate === false){
    //     else{
    //         // console.log('falsy')
    //         // blockageMap[this.x][this.y] = 21;
    //         // g1.draw();
    //         // console.log(this.x)
    //         // this.xnew = this.x - 1;
    //         // blockageMap[this.xnew][this.y] = 0;
    //         // this.draw();
    //     }
    // }

    this.updateGate = function(){
        if(this.platePressed && !this.gateOpened){
            // console.log('here pres')
            this.x = 6;
            this.gateOpened = true;
            // this.draw();
        }
        // console.log(this.platePressed)
        if(!this.platePressed && this.gateOpened){
            // console.log('gate open vaisakyo')
            this.x = 5;
            this.gateOpened = false;
            // this.draw();
   
        }
    }


}

