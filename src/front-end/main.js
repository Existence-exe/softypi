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

