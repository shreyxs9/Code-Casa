let gameSeq=[];
let userSeq=[];
let btns = ["red", "green", "yellow", "blue"]
let started=false;
let level=0;
let h2=document.querySelector("h4");
let h5 = document.querySelector("h5");
high=0;

document.addEventListener("keypress", function () {
    if(started==false){
        console.log("game started");
         started=true;
       levelup();
    }
    
});
function btnflash(btn){
btn.classList.add("flash");
setTimeout(function () {
    btn.classList.remove("flash")}, 250)
}
function userflash(btn){
btn.classList.add("userflash");
setTimeout(function () {
    btn.classList.remove("userflash")}, 250)
}

function levelup(){
    if(started==true){
    document.getElementById('play').hidden = true;
}
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    let rand=Math.floor(Math.random()*3 );
    let randC=btns[rand];
    let randbtn =document.querySelector(`.${randC}`);
    btnflash(randbtn);
    console.log(gameSeq);
   gameSeq.push(randC); 
}
function checkAns(idx){
// console.log(`current level ${level}`);
 if(userSeq[idx]==gameSeq[idx]){
    if(userSeq.length==gameSeq.length)
{
    setTimeout(levelup,1000);  
}
    console.log("same value");
  } else{
        h2.innerHTML= `Game Over! Your score was <b>${level} </b> <br>Press any key to restart the game`;
        document.querySelector('body').style.backgroundColor="red";        // setTimeout(function(){
        //     document.querySelector("body").style.color="white"},150
        high=level;
        h5.innerHTML=`Your highest level was ${level}`;
      setTimeout( reset,100);
    }

}
 
function btnPress() {
let btn1 = this;
userflash(btn1);


let userC=btn1.getAttribute("id");
userSeq.push(userC);
console.log(userSeq);
checkAns(userSeq.length-1);
}

let allbtn =document.querySelectorAll(".box");
for(btn of allbtn){
    btn.addEventListener("click", btnPress);

}
 function reset()
{

    high=level;
h5.innerHTML=`Your highest level was ${high}`;
    document.querySelector('body').style.backgroundColor="white";
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
