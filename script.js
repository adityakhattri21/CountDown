let daysEl = document.getElementById('days');
let hourEl = document.getElementById('hours');
let minEl = document.getElementById('mins');
let secEl = document.getElementById('sec');


function countdown(){

var currentTime= new Date().getTime();    // Curent Time

var year = new Date().getFullYear(); // gives us the current year
// ${year} adds the year variable automatically.
const newYear = new Date(`dec 31, ${year} 23:59:59`).getTime();    // destination time

var difference = newYear - currentTime;
// you have got the answere but in milliseconds

var seconds,hours,days,minutes;
seconds = Math.floor((difference%(1000*60)/1000));
minutes = Math.floor(difference%(1000*60*60)/(1000*60));
hours = Math.floor((difference%(1000*60*60*24))/(1000*60*60));
days = Math.floor(difference/(1000*60*60*24));

daysEl.innerHTML = days;
hourEl.innerHTML =Timeformat(hours);
minEl.innerHTML = Timeformat(minutes);
secEl.innerHTML = Timeformat(seconds);

};

function Timeformat (time) {
    if(time < 10)
    return (`0${time}`);
    else
     return time;
}

setInterval(countdown,1000)
// 1000ms = 1 sec
