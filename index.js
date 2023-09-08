function updateTime() {
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var am_or_pm = document.getElementById("am-or-pm")
    if (hours >= 12) {
        am_or_pm.innerHTML = "PM";
    } else {
        am_or_pm.innerHTML = "AM";
    }
    document.getElementById("hours").innerHTML = hours
    document.getElementById("minute").innerHTML = minutes
    document.getElementById("second").innerHTML = seconds
    if (hours > 12) {
        hours = hours - 12;
    }

}

setInterval(updateTime, 1000);
updateTime();