// ************************************************************************************
var score = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent=score;
}
// increaseScore();

// ************************************************************************************
function makebubble(){
var clutter="";

for(var i=1 ; i<=70 ; i++){
   clutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
}
document.querySelector("#pbottom").innerHTML=clutter;
}
makebubble();

// ************************************************************************************
var timer = 60;
function runTimer(){
    var intercl=setInterval(function(){
        console.log(timer);
        if(timer>0){
        timer--;
        document.querySelector('#timerval').textContent=timer;
        }
        else{
            clearInterval(intercl)
            document.querySelector("#pbottom").innerHTML= `<h1>Game Over</h1>`
        }
    },1000)
}
runTimer()

// ************************************************************************************
var hitrn=0;
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}
getNewHit();

// ************************************************************************************
// CONCEPT OF EVENT BUBBLING
 document.querySelector("#pbottom")
 .addEventListener("click",function(mamu){
    // console.log(mamu.target.textContent);
    // but here we are getting string
    var clickedNumber = (Number(mamu.target.textContent));
    if(clickedNumber==hitrn){
        increaseScore();
        getNewHit();
        makebubble()
    }
    // now we are geting number

 });