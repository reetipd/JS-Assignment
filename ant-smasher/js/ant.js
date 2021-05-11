var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 400;

var antWidth = 60;
var antHeight = 60;
num = 10;

var antSprite = new Image();
antSprite.src = './assets/ant.png';
var score = 0;


var Ant = function(x,y,vx,vy){
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;

    this.draw = function(){
        ctx.beginPath();
        // ctx.rect(this.x,this.y,antWidth,antHeight);
        // ctx.fillStyle = 'green';
        // ctx.fill();
        ctx.drawImage(antSprite,this.x,this.y,antWidth,antHeight);
    }
    this.update = function(){
        //Right boundry
        if(this.x + antWidth >= canvas.width){
           this.vx = -this.vx;
           this.x = this.x - antWidth/3;
       }
       //Left boundry
       if(this.x <= 0 ){
           this.vx = -this.vx;
           this.x = this.x + antWidth/3;
       }
       //Bottom boundry
       if(this.y + antHeight >= canvas.height){
           this.vy = -this.vy;
           this.y = this.y - antHeight/3;
       }
       //Top boundry
       if(this.y <= 0 ){
           this.vy = -this.vy;
           this.y = this.y + antHeight/3;
       }
       this.x += this.vx;
       this.y += this.vy;
    }
    this.collision = function(){
        for(var i=0; i<antArray.length; i++){
            // console.log(antArray[i])
            if(this !== antArray[i]){
                if(this.x < antArray[i].x + antWidth &&
                    this.x + antWidth > antArray[i].x &&
                    this.y < antArray[i].y + antHeight &&
                    this.y + antHeight > antArray[i].y){
                        // console.log('col')
                        this.vx = -this.vx;
                        this.vy = -this.vy;
                        antArray[i].vx = -antArray[i].vx;
                        antArray[i].vy = -antArray[i].vy;
                }
            }
        }
    }
}

var antArray = [];
function getAnt(){
    while(antArray.length < num){
        var x = (Math.floor(Math.random()*750)+25);
        var y = (Math.floor(Math.random()*350)+25);

        var vx = Math.random() * 7 - 3;
        var vy = Math.random() * 7 - 3;

        // var vx = Math.random() < 0.5 ? 1 : -1;
        // var vy = Math.random() < 0.5 ? 1 : -1;


        var ant = new Ant(x,y,vx,vy);
        antArray.push(ant);
    }

}

canvas.addEventListener('click',function(e){
    var x = e.clientX;
    var y = e.clientY;
    // console.log(x,y);
    for(var i=0; i < antArray.length; i++){
        if (x >= antArray[i].x &&
            x <= antArray[i].x + antWidth &&
            y >= antArray[i].y && 
            y <= antArray[i].y + antHeight)
            {
                console.log('box')
                antArray.splice(i,1);
                num--;
                console.log(num)
                score += 10;
                console.log(score)
            }
    }
    console.log(antArray);
   
})

function moveAnt(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    getAnt();
    for(var i=0; i<antArray.length; i++){
        antArray[i].draw();
        antArray[i].update();
        antArray[i].collision();
    }
    
    
    requestAnimationFrame(moveAnt)
}
moveAnt();