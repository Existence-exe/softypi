
var client_id = 'c0159e1283c24a9bb4f5c7f1f7629620';
var redirect_uri = 'http://localhost:3000/';
var state = Math.floor(Math.random() * 16);

var link = `https://accounts.spotify.com/authorize?client_id=c0159e1283c24a9bb4f5c7f1f7629620&response_type=code&redirect_uri=http://localhost:3000/home&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`
function login() {
    try {
        window.location.href = link
    } catch (err) {
        console.log(err)
    }
}

