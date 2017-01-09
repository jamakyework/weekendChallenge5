var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

app.set('port', (process.env.PORT || 6080));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
mongoose.connect('mongodb://localhost:27017/petDb');

app.listen(app.get('port'), function() {
    console.log('Listening on port', app.get('port'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/views/index.html'));
});
