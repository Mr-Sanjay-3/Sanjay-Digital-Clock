


function displayTime(){
     let dateTime = new Date();
     let hours = AddZero(dateTime.getHours());
     let minutes =AddZero( dateTime.getMinutes());
     let seconds = AddZero(dateTime.getSeconds());

     if (hours>12) {
      hours = hours - 12
      ampm = innerHTML = 'PM' 
     } else {
       ampm =innerHTML ='AM'
     }

document.getElementById('ampm').innerHTML = ampm;
 document.getElementById('hours').innerHTML = hours;
 document.getElementById('minutes').innerHTML = minutes;
 document.getElementById('seconds').innerHTML =seconds;
    
    function AddZero(num){
   return num<10?"0"+num:num
    
    }
}
setInterval(displayTime,500)
