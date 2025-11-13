let clock =document.getElementById("clock");
let message = document.getElementById("message");
let catImage = document.getElementById("catImage");

let wakeTime = document.getElementById("wakeTime");
let lunchTime = document.getElementById("lunchTime");
let napTime = document.getElementById("napTime");

let partyBtn = document.getElementById("partyBtn");
let partyMode = false;

function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

    clock.innerHTML =`${formatTime(hours)}:${formatTime(minutes)}.${formatTime(seconds)}`;

    if(partyMode) {
        message.innerHTML = "IT'S CAT PARTY TIME!";
        catImage.src = "https://th.bing.com/th/id/OIP.I7-Kp6ayUzLQuonE6-rrlAHaJW?w=137&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3";

    } else if (parseInt(wakeTime.value) === hours) {
        message.innerHTML = "WAKE UP AND STRETCH THOSE PAWS";
        catImage.src = "https://th.bing.com/th/id/OIP.I7-Kp6ayUzLQuonE6-rrlAHaJW?w=137&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3";
    } else if (parseInt(lunchTime.value) === hours) {
        message.innerHTML = "LUNCH TIME = TUNA TIME";
        catImage.src = "https://th.bing.com/th/id/OIP.I7-Kp6ayUzLQuonE6-rrlAHaJW?w=137&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3";
    } else if (parseInt(napTime.value) === hours) {
        message.innerHTML = "NAP TIME... zzz";
        catImage.src = "https://th.bing.com/th/id/OIP.I7-Kp6ayUzLQuonE6-rrlAHaJW?w=137&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3";
    } else {
        message.innerHTML = "JUST BEIN' A CAT";
        catImage.src = "https://th.bing.com/th/id/OIP.I7-Kp6ayUzLQuonE6-rrlAHaJW?w=137&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3";
    }
}

function formatTime(num) {
    return num < 10 ? "0" + num : num;
}
setInterval(updateClock, 1000);

partyBtn.addEventListener("click", () => {
    partyMode = !partyMode;
});