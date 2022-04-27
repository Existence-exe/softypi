const electron = require('electron');
const { app, BrowserWindow } = electron;
let win;

app.on('ready', function(){
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        icon: './resources/spotify-512.png'
    });

    win.loadFile('./front-end/index.html');
}); 