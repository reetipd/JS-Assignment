// var Controller = function(lavaBoy,hydroGirl){

//     // var keys = {
//     //     65 : false,
//     //     68 : false,
//     //     87 : false,
//     //     37 : false,
//     //     39 : false,
//     //     38 : false
//     // }
//     document.addEventListener("keydown", function(e){
//         // console.log(e.keyCode)  //A:65 W:87 S:83 D:68
//         //L:37 R:39 U:38 D:40
//         switch(e.keyCode){
//             //LavaBoy movement keys (AWSD)
//             case 65:
//                 lavaBoy.moving_left = true;
//                 lavaBoy.moving_right = false;
//                 // keys[65] = true;
//                 lavaBoy.moveLeft();
//                 break;
//             case 68:
//                 lavaBoy.moving_right = true;
//                 lavaBoy.moving_left = false;
//                 // keys[68] = true;
//                 lavaBoy.moveRight();
//                 break;
//             case 87:
//                 lavaBoy.moving_up = true;
//                 // keys[87] = true;
//                 lavaBoy.moveUp();
//                 break;
//             case 83:
//                 lavaBoy.moving_down = true;
//                 lavaBoy.moveDown();
            
//             //HydroGirl movement keys
//             case 37:
//                 // keys[37] = true;
//                 hydroGirl.moving_left = true;
//                 hydroGirl.moving_right = false;
//                 hydroGirl.moveLeft();
//                 break;
//             case 39:
//                 // keys[39] = true;
//                 hydroGirl.moving_right = true;
//                 hydroGirl.moving_left = false;
//                 hydroGirl.moveRight();
//                 break;
//             case 38:
//                 // keys[38] = true;
//                 hydroGirl.moving_up = true;
//                 hydroGirl.moveUp();
//                 break;
//             case 40:
//                 hydroGirl.moving_down = true;
//                 hydroGirl.moveDown();
            
    
//         }
//     })
//     document.addEventListener("keyup", function(e){
//         switch(e.keyCode){
//         case 65:
//             // keys[65] = false;
//             lavaBoy.moving_left = false;
//             break;
//         case 68:
//             // keys[68] = false;
//             lavaBoy.moving_right = false;
//             break;
//         case 87:
//             keys[87] = false;
//             break;
//         case 37:
//             // keys[37] = false;
//             hydroGirl.moving_left = false;
//         case 38:
//             keys[38] = false;
//         case 39:
//             // keys[39] = false;
//             hydroGirl.moving_right = false;
            
            
//         }
        
//     })
//     console.log(keys)
    
// }

var Controller = function(){
    var keys = [];
    var keyPressed = function(event){
        keys[event.keyCode] = true;
        // console.log('here')
        // console.log(keys)
    }
    var keyReleased = function(event){
        keys[event.keyCode] = false;
        // console.log(keys)
    }
    document.addEventListener("keydown",function(event){
        keyPressed(event);

        if(keys[37]){
            lavaBoy.moveLeft();
        }
        if(keys[39]){
            lavaBoy.moveRight();
        }
        if(keys[38]){
            lavaBoy.moveUp();
        }
        // if(keys[40]){
        //     lavaBoy.moveDown();
        // }
        if(keys[65]){
            hydroGirl.moveLeft();
        }
        if(keys[68]){
            hydroGirl.moveRight();
        }
        if(keys[87]){
            hydroGirl.moveUp();
        }
    })
    document.addEventListener("keyup",function(event){
        keyReleased(event);
        if(!keys[38]){
            // console.log('bere')
            lavaBoy.moving_up = false;
        }
        if(!keys[37]){
            if(lavaBoy.xV <= 0){
                // lavaBoy.moving_left = false;
                lavaBoy.stop();
            }
            // console.log('bere')
            
        }
        if(!keys[39]){
            // console.log('bere')
            if(lavaBoy.xV >= 0){
                // lavaBoy.moving_right = false;
                lavaBoy.stop();
            }
           
        }
        if(!keys[65]){
            if(hydroGirl.xV <= 0){
                // hydroGirl.moving_left = false;
                hydroGirl.stop();
            }
            
        }
        if(!keys[68]){
            if(hydroGirl.xV >= 0){
                // hydroGirl.moving_left = false;
                hydroGirl.stop();
            }
        }
        if(!keys[87]){
            hydroGirl.moving_up = false;
        }
    })
}

