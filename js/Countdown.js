var d = new Date();
var n = d.getMinutes();
var h = d.getHours();
var td = d.getDate();
var aj = d.getSeconds()

document.getElementById("todaydate").innerHTML = d.getDate();

function setmintime(){
let minout
if(n>=0 && n<15){
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
minout = 0;
}
return minout;
}


function sethrtime(){
let hrout
if(n>=45 && h!=12){
document.getElementById("demohr").innerHTML = h + 1;
hrout = h % 12 + 1 || h + 1;
}
else if(h==12){
document.getElementById("demohr").innerHTML = "1";
hrout = "1";
}
else {
document.getElementById("demohr").innerHTML = h;
hrout = h % 12 || 12;
}
return hrout;
}


var pa = sethrtime();
var nk = setmintime();

document.getElementById("demotimercounthtml").innerHTML = `${nk - n}` + " : " + `${60 - aj}`;

var hourp = (h - pa)*60*60*1000;
var minp = (nk - n);
var secp = (60 - aj)*1000;
console.log(minp+secp)
var hey = minp+secp


setInterval(function(){ 
document.getElementById("demotimercountsec").innerHTML = hey--

var minutes = Math.floor((hey % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((hey % (1000 * 60)) / 1000);
// var hello = minutes + "m" + seconds + "s";
document.getElementById("demotimercountmin").innerHTML = minutes + "m" + seconds + "s";
}, 1000);

// code down



// set minutes
var mins = minp;

// calculate the seconds (don't change this! unless time progresses at a different speed for you...)
var secs = mins * 60 - aj;
function countdown() {
setTimeout('Decrement()',1000);
}
function Decrement() {
if (document.getElementById) {
minutes = document.getElementById("minutes");
seconds = document.getElementById("seconds");
// if less than a minute remaining
if (seconds < 59) {
seconds.innerHTML = secs;
}
else if(mins<=0 && secs<=0){
minutes.innerHTML = 0
seconds.innerHTML = 0
}
else {
minutes.innerHTML = getminutes();
seconds.innerHTML = getseconds();
}
secs--;
setTimeout('Decrement()',1000);
}
}
function getminutes() {
// minutes is seconds divided by 60, rounded down
mins = Math.floor(secs / 60);
return mins;
}
function getseconds() {
// take mins remaining (as seconds) away from total seconds remaining
return secs-Math.round(mins *60);
}



function out_code(){
setmintime(); 
sethrtime();
// countDownTimerSec();
// countDownTimerMin();
zeroshow();
zeroshowsec();

}

window.onload=out_code();

function zeroshow(){
    if(mins < 10 ){
        document.getElementById("zerodis").innerHTML = 0;
    }
    else{

    }
}   
zeroshow();

function zeroshowsec(){
    if(secs < 10){
        document.getElementById("zerodissec").innerHTML = 0;
    }
}   
zeroshowsec();


countdown();