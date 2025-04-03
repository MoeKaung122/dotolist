const startTag = document.getElementById('start');
const stopTag = document.getElementById('stop');
const continueTag = document.getElementById('containue');
const reStartTag = document.getElementById('restart');
const showH1Tag = document.getElementsByClassName('showh1')[0];
const showspanTag = document.getElementsByClassName('showspan')[0];
 

let melisecond = 0 , seconds = 0, minutes= 0, hours=0;

const startime= () => {
    
    melisecond += 1;
    if  (melisecond === 1000) {
        melisecond = 0;
        seconds += 1;
        if (seconds === 60 ) {
            seconds = 0
            minutes += 1 ;
            if (minutes === 60 ) {
                minutes = 0
                hours += 1 ;
                
            } 
        }

    }
   const secondsText = seconds < 10 ? "0" + seconds.toString() : seconds ;
   const minuteText = minutes< 10 ? "0" + minutes.toString() : minutes ;
   const hourText = hours< 10 ? "0" + hours.toString() : hours ;
   showH1Tag.textContent = hourText + ':' + minuteText + ':' + secondsText;
   showspanTag.textContent = melisecond ; 


}
let intervalId ;

startTag.addEventListener('click',()=>{
   
    intervalId = setInterval(startime, 1);
})
stopTag.addEventListener('click',()=>{
   
   clearInterval(intervalId);
})
continueTag.addEventListener('click',()=>{
   
    clearInterval(intervalId);
    intervalId = setInterval(startime, 1);
 })
 reStartTag.addEventListener('click',()=>{ 
    clearInterval(intervalId);
    melisecond = 0 , seconds = 0, minutes= 0, hours=0;
    intervalId = setInterval(startime, 1);

 })