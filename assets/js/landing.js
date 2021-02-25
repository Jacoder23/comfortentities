var firstTime = localStorage.getItem("first_time");
if(!firstTime) {
    // first time loaded!
    localStorage.setItem("first_time","1");
    window.location.replace("design.html");
}