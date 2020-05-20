const express = require('express');
const app = express();

const port = 3000;

const vrVideoStream = [];
const webVideoStream = [];

app.listen(port, '0.0.0.0', () => console.log('listining at ' + port));
app.use(express.json({limit : '1mb'}));


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello Unity Developers!');
})

app.get('/getWeb', (req, res) => {
    res.send('Hello Unity Developers!');
})
app.post('/postWeb', (req, res) => {
    res.end();
})

app.get('/getVR', (req, res) => {
    res.send(vrVideoStream[vrVideoStream.length -1]);
})
app.post('/postVR', (req, res) => {    
    const data = req.body;
    vrVideoStream.push(data);
    //console.log(data);
    res.end;
})


