// Set the date we're counting down to
var countDownDate = new Date("Aug 22, 2019 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
   
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
//minute hour change
var d = new Date();
var n = d.getMinutes();
var h = d.getHours();

function setmintime(){
if(n>=0 && n<15){
document.getElementById("demomin").innerHTML = ": 15";
}
else if(n>=15 && n<30){
document.getElementById("demomin").innerHTML = ": 30";
}
else if(n>=30 && n<45){
document.getElementById("demomin").innerHTML = ": 45";
}
else if(n>=45 && n<=59){
document.getElementById("demomin").innerHTML = ": 00";
}
else{
document.getElementById("demomin").innerHTML = expired;
}
}

function sethrtime(){
if(n>=45 && h!=12){
document.getElementById("demohr").innerHTML = h % 12 + 1 || h + 1;
}
else if(h==12){
document.getElementById("demohr").innerHTML = "1";
}
else {
document.getElementById("demohr").innerHTML = h % 12 || 12;
}
}



