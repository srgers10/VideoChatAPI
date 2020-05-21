const express = require('express');
const app = express();

const port = process.env.PORT;

const vrVideoStream = [];
const webVideoStream = [];

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.use(express.json({limit : '1mb'}));


app.use(express.static('public'));


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




