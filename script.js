
function calculateAnalogTime() {
    // 360/60 = 6 degrees per seconds/mins
    // 15 seconds/mins * 6 degrees = 90 degrees
    // 30 seconds/mins * 6 degrees = 180 degrees
    // 45 seconds/mins * 6 degrees = 270 degrees
    // 60 seconds/mins * 6 degrees = 360 degrees

    const currentDate = new Date()
    const seconds = (currentDate.getSeconds())*6
    const minutes = currentDate.getMinutes()*6
    // current hour + percent of current min
    // eg. hour = 2, min = 30 ... (2 % 12) + (30/60) = 2.5 * 30 = 75deg
    const hours = ((currentDate.getHours()%12) + (currentDate.getMinutes()/60))*30
    
    document.getElementById('second').style.setProperty('--current-rotation', seconds+"deg")
    document.getElementById('minute').style.setProperty('--current-rotation', minutes+"deg")
    document.getElementById('hour').style.setProperty('--current-rotation', hours+"deg")
}

function calculateDigitalTime() {
    var date = new Date();
    var hour = format(date.getHours()%12);
    hour = (hour == "00") ? 12 : hour;
    var min = format(date.getMinutes());
    var sec = format(date.getSeconds());
    var midday = (hour >=12) ? "PM" : "AM"
    document.getElementById("digital-clock-text").innerHTML = hour + " : " + min + " : " + sec + " : " + midday;
}

function format(t) {
    if(t < 10) {
        return "0" + t;
    } else {
        return t;
    }
}

function calculateTime() {
    calculateAnalogTime();
    calculateDigitalTime();
}

calculateTime();

setInterval(calculateTime, 1000);


