var timer = 8;
var score = 0;
var hitrn = 0;


    function increaseScore(){
        score += 10;
        document.querySelector("#scoreval").textContent = score;
    }

function getNewHit (){
   hitrn = Math.floor(Math.random ()*10);
    document.querySelector("#hitval").textContent = hitrn;
}
function makeBubble (){
    var clutter = "";
for(var i = 1; i<120; i++){
    var rn = Math.floor(Math.random () *10)
   clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}
 
 function runTimer(){
  var timerin= setInterval(function(){
        if(timer > 0){
        
        timer--;
      
      document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerin);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over !! Feer se shure kare😉</h1>`
  
        }
    }, 1000);
}

document.querySelector("#pbtm")
    .addEventListener("click", function(dets){
       // alert(" chal raha hai");
     var clicknum = Number(dets.target.textContent);
     if (clicknum ===hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
     }
     
    });



runTimer();
makeBubble();
getNewHit();
increaseScore();