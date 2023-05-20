const spanHours = document.querySelector("#hours");
const start = document.querySelector("#start");
const pause = document.querySelector("#pause")
const reset = document.querySelector("#reset");

var hour = "0" + 0;
var min = "0" + 0;
var sec = "0" + 0;
var count;

function Count() {
        sec++;

        if (sec < 10) {
            sec = "0" + sec;
        }

        if(sec === 60) {
            sec = "0" + 0;
            min++;
            if (min < 10) {
                min = "0" + min;
            }
        }
        if(min === 60){
            min = "0" + 0;
            hour++;
            if (hour < 10) {
                hour = "0" + hour;
            }
        }

        spanHours.innerHTML = `${hour}:${min}:${sec}`
}

function Start() {
    count = setInterval(Count, 100);
}

function Reset() {
    clearInterval(count);
    hour = "0" + 0;
    min = "0" + 0;
    sec = "0" + 0;

    spanHours.innerHTML = `${hour}:${min}:${sec}`;
    
}

function Pause() {
    clearInterval(count);
}

start.addEventListener('click', Start);
pause.addEventListener('click', Pause);
reset.addEventListener('click', Reset);
