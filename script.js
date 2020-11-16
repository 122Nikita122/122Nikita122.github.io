let time_input = document.querySelector('#startTime');
let titel_hours = document.getElementById('titel_hours');
let titel_minutes = document.getElementById('titel_minutes');
let track = new Audio ("StarWars.mp3")
let time = new Date().getHours() + ":" + new Date().getMinutes();
titel_minutes.innerHTML = new Date().getMinutes();
titel_hours.innerHTML = new Date().getHours();
let handle = false;

function onAlarm(){    
    handle = true;
}

setInterval(() => {
        if(handle) alarm()
    }, 
    1000)

function alarm () {
    let alarmTime = time_input.value.split(":").map(x => +x).join(":");
    time = new Date().getHours() + ":" + new Date().getMinutes();
    titel_minutes.innerHTML = new Date().getMinutes();
    titel_hours.innerHTML = new Date().getHours(); 
    console.log(time, alarmTime)          
    if(time === alarmTime) track.play()
}
function stop(){    
    handle = false;
    track.pause();
}

