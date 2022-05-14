let state = 'play'
var xhttp = new XMLHttpRequest()

function fn() {
    d = document.getElementById('play_image')
    if (state == 'play') {
        d.src = '../resources/pause_white_48dp.svg'

        xhttp.onreadstatechange = function(){
            console.log(xhttp.responseText);
        };
        
        xhttp.onload = function(){
            console.log(xhttp.responseText);
        };
        
        xhttp.open('POST','http://127.0.0.1:5000/play')
        xhttp.setRequestHeader('content','music')
        xhttp.send()
                
        state = 'pause'
    }else {
        d.src = '../resources/play_arrow_white_48dp.svg'
        state = 'play'
    }
}



e
