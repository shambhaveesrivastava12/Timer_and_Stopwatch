
let start1Btn = document.getElementById('start1');
start1Btn.addEventListener('click', function () {
timer = true;
stopWatch1();
});

let stop1Btn = document.getElementById('stop1');
stop1Btn.addEventListener('click', function () {
timer = false;
});

    
function stopWatch1()
{
    timer = true;
    if(timer)
    {     
    let days = document.getElementById("days1").value; 
    let hours = document.getElementById("hours1").value;   
    let minutes = document.getElementById("minutes1").value;   
    let seconds = 0; // starting number of seconds
    let totalSeconds =
    days * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds;
    let tempSeconds = totalSeconds;
    const convert = (value, inSeconds) => {
    if (value > inSeconds) {
        let x = value % inSeconds;
        tempSeconds = x;
        return (value - x) / inSeconds;
    } else {
        return 0;
    }
    };
    const setSeconds = (s) => {
    document.querySelector("#seconds").textContent = s + "s";
    };
    const setMinutes = (m) => {
    document.querySelector("#minutes").textContent = m + "m";
    };
    const setHours = (h) => {
    document.querySelector("#hours").textContent = h + "h";
    };
    const setDays = (d) => {
    document.querySelector("#days").textContent = d + "d";
    };   
    var x = setInterval(() => {  
    if (totalSeconds <= 0) {
        clearInterval(x);
    }
    setDays(convert(tempSeconds, 24 * 60 * 60));
    setHours(convert(tempSeconds, 60 * 60));
    setMinutes(convert(tempSeconds, 60));
    setSeconds(tempSeconds == 60 ? 59 : tempSeconds);
    totalSeconds--;
    tempSeconds = totalSeconds;
    }, 1000);
  } 
}

