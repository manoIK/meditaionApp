const play = document.getElementById('play');
const music = new Audio('./sounds/beach.mp3');

const pause = document.getElementById('pause');
document.body.removeChild(pause);

const h1 = document.getElementById('h1');
let startingMin = 5;
let time = startingMin * 60;
let min;
let sec;
let intervalID;

let outline = document.getElementById('outline');
let percComplete = 0;
let secPassed = 0;

document.getElementById('myVideo').pause();
const replay = document.getElementById('replay');

const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');

play.addEventListener('click', ()=> {
    music.play();
    document.body.removeChild(play);
    document.body.appendChild(pause);
    startTimer();
    document.getElementById('myVideo').play();
});

pause.addEventListener('click', ()=> {
    music.pause();
    document.body.removeChild(pause);
    document.body.appendChild(play);
    pauseTimer();
    document.getElementById('myVideo').pause();
});

function startTimer() {
    intervalID = setInterval( ()=> {
        if (time == 0) {
            clearInterval();
            h1.innerHTML = "0:0"
        } else {
            min = Math.floor(time/60)
            sec = time % 60
            time--;
            secPassed++;
            h1.innerHTML = min+":"+sec;
            percComplete = 510-((510 *((secPassed/(startingMin * 60))*100))/100);
            document.getElementById('outline').style.strokeDashoffset =  percComplete;
            console.log(percComplete);
        }
    }, 1000)
}

function pauseTimer() {
    clearInterval(intervalID);
}

replay.addEventListener('click', () =>{
    document.getElementById('outline').style.strokeDashoffset = 510;
    time = startingMin * 60;
    h1.innerHTML = startingMin + ":" + "00"
    secPassed = 0;
    percComplete = 5.1;
});

button1.addEventListener('click', ()=>{
    document.getElementById('outline').style.strokeDashoffset = 510;
    startingMin = 2;
    time = startingMin * 60;
    h1.innerHTML = startingMin + ":" + "00"
    secPassed = 0;
    percComplete = 5.1;
});

// style.strokeoutlineDashoffset = "calc(510 - (510 *0) / 100)";
// ((time /(startingMin * 60)) * 100)
// console.log(            510-((510 *((time/(startingMin * 60))*100))/100)          );
