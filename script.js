const hourElement = document.getElementById('hour');
const minuteElement = document.getElementById('minutes');
const secondElement = document.getElementById('seconds');
const ampnElement = document.getElementById('ampm');

function clock(){
    var h = new Date().getHours()
    var m = new Date().getMinutes()
    var s = new Date().getSeconds()
    var ampm = 'AM'

    if(h>12) {
        h = h-12
        ampm = 'PM'
    }

    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;


    hourElement.innerText = h;
    minuteElement.innerText = m;
    secondElement.innerText = s;
    ampnElement.innerText = ampm;
    setTimeout(()=>{
        clock()
    },1000);
}

clock();

