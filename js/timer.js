var d = new Date();
var n = d.getMinutes();
var h = d.getHours();
var td = d.getDate();
var aj = d.getSeconds()

document.getElementById("todaydate").innerHTML = d.getDate();
function setmintime(){
let minout
if(n>=00 && n<15){
document.getElementById("demomin").innerHTML = 15;
minout = 15;
}
else if(n>=15 && n<30){
document.getElementById("demomin").innerHTML = 30;
minout = 30;
}
else if(n>=30 && n<45){
document.getElementById("demomin").innerHTML = 45;
minout = 45;
}
else if(n>=45 && n<=59){
document.getElementById("demomin").innerHTML = "00";
minout = 60;
}
else{
document.getElementById("demomin").innerHTML = 0;
minout = "expired";
}
return minout;
}
setmintime();

function sethrtime(){
let hrout
if(n>=45 && h!=12){
document.getElementById("demohr").innerHTML = h % 12 + 1 || h + 1;
hrout = h % 12 + 1 || h + 1;
}
else if(h==12 && n==45){
document.getElementById("demohr").innerHTML = "1";
hrout = "1";
}
else {
document.getElementById("demohr").innerHTML = h % 12 || 12;
hrout = h % 12 || 12;
}
return hrout;
}
sethrtime();

var pa = sethrtime();
var nk = setmintime();

function countDownTimer(){

// setInterval(function(){ 
document.getElementById("demotimercount").innerHTML =`${nk - n}` + " : " + `${60 - aj}`;
var uptocount = `${h % 12 - pa}` + `${nk - n}` + `${60 - aj}`

console.log("hour", h % 12)
console.log("alt hr", pa )
console.log("second", 60 - aj)
console.log("hour",`${h % 12 - pa}` + `${nk - n}` + `${60 - aj}`)
// }, 1000);
}
countDownTimer();

var minp = nk - n;
var secp = 60 - aj;
// var uptocount = minp + secp


function countDownTimerSec(){
    setInterval(function(){ 
    if(secp<0){
        document.getElementById("demotimercountsec").innerHTML = 60 + secp--;
    }
    else{
    document.getElementById("demotimercountsec").innerHTML = secp--;
    }
 }, 1000);
}

document.getElementById("demotimercountmin").innerHTML = minp;
function countDownTimerMin(){
    setInterval(function(){ 
                if(secp==0){
            document.getElementById("demotimercountmin").innerHTML = minp--;
        }
        else{
            document.getElementById("demotimercountmin").innerHTML = minp;
        }
 }, 1000);
}

function out_code(){
    setmintime(); 
    sethrtime();
    countDownTimerSec();
    countDownTimerMin();
}
window.onload=out_code();

function zeroshow(){
        if(minp<10){
            document.getElementById("zerodis").innerHTML = 0;
        }
        else{
    
        }
    }   
    zeroshow();

    function zeroshowsec(){
        if(secp<10){
            document.getElementById("zerodissec").innerHTML = 0;
        }
        else{
    
        }
    }   
    zeroshowsec();

setTimeout(function(){
           window.location.reload(1);
        }, 90000);


