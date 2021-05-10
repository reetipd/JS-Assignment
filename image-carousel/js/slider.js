var container = document.querySelector('.carousel-container');
var carousel = document.querySelector('.carousel-image-wrapper');
var images = document.getElementsByTagName('img');

var currentIndex = 0;
var cl = 0;
var left=0;
function animate(prevIndex,currentIndex){
    const diff = currentIndex - prevIndex;
    const animation = diff * 400;
    console.log('aW'+ animation);
    const pxCount = animation / 20;
    console.log(pxCount)

    var interval = setInterval(function(){
        left -= pxCount;
        console.log('left'+left)
        carousel.style.left = left + 'px';
        if(Math.abs(left)==Math.abs(currentIndex*400)){
            console.log('here')
            clearInterval(interval)
        }
        console.log('cl'+cl)
    },20)
}

function moveLeft(){
    var prevIndex = currentIndex;
    if(currentIndex == 0){
        currentIndex = images.length-1;
    }
    else{
        currentIndex--;
    }
    console.log(currentIndex);
    console.log(prevIndex);
    animate(prevIndex,currentIndex);
   
    displayDot();

}
function moveRight(){
    var prevIndex = currentIndex;
    if(currentIndex == images.length-1){
        currentIndex = 0;
    }
    else{
        currentIndex++;
    }
    console.log('curr',currentIndex);
    console.log('prev'+prevIndex)
    animate(prevIndex,currentIndex);
    displayDot();
}
function displayDot(){
    for(let i=0; i<dot.length;i++){
        dot[i].classList.add('non-active');
        dot[i].classList.remove('active');
    }
    dot[currentIndex].classList.add('active');
    
}

var leftBtn = document.createElement('button');
leftBtn.classList.add('left','btn');
container.appendChild(leftBtn);
leftBtn.textContent = '<';

var rightBtn = document.createElement('button');
rightBtn.classList.add('right','btn');
container.appendChild(rightBtn);
rightBtn.textContent = '>';

var indicator = document.createElement('div');
indicator.classList.add("indicator");
indicator.setAttribute('id','dotID');
container.appendChild(indicator);



var dot = document.getElementsByClassName('indicator-dot');
var images = document.getElementsByTagName('img')
for(var i=0 ; i<images.length; i++){
    let dot = document.createElement('div');
    dot.classList.add("indicator-dot");
    dot.setAttribute('id',i)
    indicator.appendChild(dot);
}
var control = document.getElementById('dotID');
control.addEventListener('click', function(e){
    console.log(e.target.id);
    indicatorClick(e.target.id);
})
function indicatorClick(index){
    console.log(index)
    currentIndex = index;
    prevIndex = document.querySelector('.active').id
    animate(prevIndex,currentIndex);
    displayDot();
}

leftBtn.addEventListener('click', function(){
    moveLeft();
})
rightBtn.addEventListener('click', function(){
    moveRight();
})
displayDot();