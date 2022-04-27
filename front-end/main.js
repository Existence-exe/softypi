let state = 'play'
function fn() {
    d = document.getElementById('play_image')
    if (state == 'play') {
        d.src = '../resources/pause_white_48dp.svg'
        state = 'pause'
    }else {
        d.src = '../resources/play_arrow_white_48dp.svg'
        state = 'play'
    }
}



