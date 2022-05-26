let state = 'play'
var xhttp = new XMLHttpRequest()

function fn() {
    d = document.getElementById('play_image')
    if (state == 'play') {
        d.src = 'http://localhost:3000/resource/resources/pause_white_48dp.svg'

        xhttp.onreadstatechange = function(){
            console.log(xhttp.responseText);
        };
        
        xhttp.onload = function(){
            console.log(xhttp.responseText);
        };
        
        xhttp.open('POST','http://localhost:3000/play')
        xhttp.setRequestHeader('content','music')
        xhttp.send()
                
        state = 'pause'
    }else {
        d.src = 'http://localhost:3000/resource/resources/play_arrow_white_48dp.svg'
        state = 'play'
    }
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

vol = document.getElementById('volume');
vol_value = document.getElementById('volume-value');
vol_value.innerHTML = vol.value;

vol.oninput =  function () {
    if(this.value <= 30) {
        vol_value.src = 'http://localhost:3000/resource/resources/no_vol.png'
    }else if (this.value <= 60 && this.value > 30) {
        vol_value.src = 'http://localhost:3000/resource/resources/mid_vol.png'
    }else if (this.value <=90 && this.value > 60) { 
        vol_value.src = 'http://localhost:3000/resource/resources/full_vol.png'
    }else {
        vol_value.src = 'http://localhost:3000/resource/resources/mute.png'
    }
}

function displayLib() {

}
