//this is a comment
const express = require('express');
const PORT = 3000;
const cors = require('cors')
const server = express();

server.use(express.json(),cors({
    origin:'*',
    methods: ['POST','GET']
}))

var dir = __dirname;
dir = dir.slice(0, dir.length - 1);
dir = dir.slice(0, dir.lastIndexOf('/'));
dir = dir.slice(0, dir.lastIndexOf('/') + 1);

console.log(dir);

server.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)

server.post('/play', (req,res) => {
    res.status(200).send({
        "lol" : "ok"
    })
})

server.get('/home', (req,res) => {
    res.sendFile(dir+'src/front-end/index.html')
})

server.get('/:x',(req,res) => {
    var {x} = req.params
    if(x != 'login') return '<h1>This is not a valid page</h1>'
    res.sendFile(dir+'src/front-end/login.html')
})


server.get('/resource/:b/:name', (req,res) => { 
    const { b,name } = req.params

    res.sendFile(dir+'src/'+b+'/'+name)
})




