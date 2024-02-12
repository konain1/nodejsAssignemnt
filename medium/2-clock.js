// Can you make it so that it updates every second, and shows time in the following formats -

// HH:MM::SS (Eg. 13:45:23)

// HH:MM::SS AM/PM (Eg 01:45:23 PM)

const hoursSpan = document.getElementById('hours')
const minutesSpan = document.getElementById('minutes')
const secondsSpan = document.getElementById('seconds')


let hours= 0

let minutes = 59

let seconds=50;

setInterval(()=>{

    if(seconds>=59){
        seconds = 0
        minutes++;
    }else{
        seconds++;
    }

    if(minutes > 59  ){
        minutes=0
        hours++
    }
    hoursSpan.innerHTML = hours
    minutesSpan.innerHTML = minutes
    secondsSpan.innerHTML = seconds
    console.log(hours + " " + minutes + " " +seconds)
},1000)
