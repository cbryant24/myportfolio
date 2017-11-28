const express = require('express');
const path = require('path');
const static = require('./static_paths');
// const static = require('./static_files')

const app = express();

app.use('/', static);
// app.use(express.static(path.resolve(__dirname, 'HTML')));


app.get('/', function(req, res){
    res.sendFile(__dirname + '/portfolio/index-video_bg.html')
})


app.listen(5000, function() {
    console.log('We be listening on 5000')
})