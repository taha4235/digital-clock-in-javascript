setInterval(() => {
    let hours = document.getElementById("hours")
    let minutes = document.getElementById("minutes")
    let seconds = document.getElementById("seconds")
    let anpm = document.getElementById("anpm")
    let h = new Date().getHours()
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h >= 12 ? "PM" : "AM";
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    anpm.innerHTML = am;
    if (h > 12) {
        h = h - 12;
    }
    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s
})