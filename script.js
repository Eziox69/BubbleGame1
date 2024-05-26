var timer=60;
var score=0;
var hitrn;

function makebubble(){
    var clutter="";

for(var i=1;i<=160;i++){
    var rn=Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`
}

document.querySelector("#pbtm").innerHTML=clutter

}
function runtimer(){
    var timerint=setInterval(function(){
     if(timer>0){
        timer--;
        document.querySelector("#settime").textContent=timer;
     }else{
         clearInterval(timerint);
         
         document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1> <br><h2>Your Score is ${score}</h2>`
         document.querySelector("#hitval").innerHTML="-";
     }
    },1000)
}
function getNewHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}
function increaseScore(){
    score += 10;
    document.querySelector("#incscore").textContent=score;
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
   var clickednum = Number(dets.target.textContent);
   if(clickednum == hitrn){
    increaseScore();
    makebubble();
    getNewHit();
   }
})
runtimer();
makebubble();
getNewHit();
