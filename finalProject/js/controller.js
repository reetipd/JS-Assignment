var Controller = function(lavaBoy, hydroGirl){
    this.lavaBoy = lavaBoy;
    this.hydroGirl = hydroGirl;
    var keys = [];
    var keyPressed = function(event){
        keys[event.keyCode] = true;
    }
    var keyReleased = function(event){
        keys[event.keyCode] = false;
    }
    document.addEventListener("keydown",function(event){
        keyPressed(event);
       //left arroq
        if(keys[37]){
            lavaBoy.moveLeft();
        }
        //right arorow
        if(keys[39]){
            lavaBoy.moveRight();
        }
        //up arrow
        if(keys[38]){
            lavaBoy.moveUp();
        }
        //A
        if(keys[65]){
            hydroGirl.moveLeft();
        }
        //D
        if(keys[68]){
            hydroGirl.moveRight();
        }
        //W
        if(keys[87]){
            hydroGirl.moveUp();
        }
    })
    document.addEventListener("keyup",function(event){
        keyReleased(event);

        if(!keys[37]){
            if(lavaBoy.xV <= 0){
                lavaBoy.stop();
            }            
        }
        if(!keys[39]){
            if(lavaBoy.xV >= 0){
                lavaBoy.stop();
            }
           
        }
        if(!keys[65]){
            if(hydroGirl.xV <= 0){
                hydroGirl.stop();
            }
            
        }
        if(!keys[68]){
            if(hydroGirl.xV >= 0){
                hydroGirl.stop();
            }
        }

    })
}

