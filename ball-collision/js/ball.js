var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


canvas.width = 900
canvas.height = 400;

const MIN_RADIUS = 8;
const MAX_RADIUS = 12;
const NUMBER_OF_BALLS = 20;

var Ball = function(x,y,vx,vy,radius){
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.radius = radius;

    this.color = randomColor();
    function randomColor() {

        var red = Math.floor(Math.random() * 255);
        var green = Math.floor(Math.random() * 255);
        var blue = Math.floor(Math.random() * 255);
    
        return `rgb(${red}, ${green}, ${blue})`;
      }
    this.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    this.update = function(){
         //Right boundry
         if(this.x + this.radius >= canvas.width){
            this.vx = -this.vx;
            this.x = canvas.width - this.radius;
        }
        //Left boundry
        if(this.x - this.radius <= 0 ){
            this.vx = -this.vx;
            this.x = this.radius;
           
        }
        //Bottom boundry
        if(this.y + this.radius >= canvas.height){
            this.vy = -this.vy;
            this.y = canvas.height - this.radius;
        }
        //Top
        if(this.y - this.radius <= 0 ){
            this.vy = -this.vy;
            this.y = this.radius; //reset position
        }
        this.x += this.vx;
        this.y += this.vy;
    }
    this.collision = function(){
        for(var j=0; j<ballArray.length; j++){
            if(this !== ballArray[j]){
                var delX = this.x - ballArray[j].x;
                var delY = this.y - ballArray[j].y;
                var distance = Math.sqrt(delX*delX + delY*delY);

                if(distance <= this.radius + ballArray[j].radius){
                    // console.log('collison');
                    this.vx = -this.vx;
                    this.vy = -this.vy;
                    ballArray[j].vx = -ballArray[j].vx;
                    ballArray[j].vy = -ballArray[j].vy;
                    // this.vx *= -1;
                    // this.vy *= -1;
                    // ballArray[j].vx *= -1;
                    // ballArray[j].vy *= -1;
                }

            }
        }
    }
}

var ballArray = [];
function getBall(){
    while(ballArray.length < 20){
        var x = Math.floor(Math.random()*canvas.width - 12);
        var y = Math.floor(Math.random()*canvas.height - 12);

        var vx = Math.random() * 7 - 3;
        var vy = Math.random() * 7 - 3;

        // var vx = Math.random() < 0.5 ? 1.5 : -1.5;
        // var vy = Math.random() < 0.5 ? 1.5 : -1.5;

        // var vx = Math.floor(Math.random() * 4 + -5);
        // var vy =  Math.floor(Math.random() * 4 + -5);
        var radius = Math.floor((Math.random() * 12) + 8);
        var ball = new Ball(x,y,vx,vy,radius);
        ballArray.push(ball);
    }
}
console.log(ballArray)

function moveBall(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    getBall();
    for(var i=0; i<ballArray.length; i++){
        ballArray[i].draw();
        ballArray[i].update();
        ballArray[i].collision();
    }
    
    requestAnimationFrame(moveBall)
}
moveBall();