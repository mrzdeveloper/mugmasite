let retime = 50;

function settime() {
    if (retime == 0) {
        document.getElementById('timer').style.display = 'none';
    }
    else {
        let h = Math.floor(retime / 3600);
        let m = Math.floor((retime % 3600) / 60);
        let s = (retime % 3600) % 60;
        document.querySelector('#s').innerHTML = s;
        document.querySelector('#m').innerHTML = m;
        document.querySelector('#h').innerHTML = h;
    }

}
setInterval(() => {
    retime -= 1;
    settime()
}, 1000);
