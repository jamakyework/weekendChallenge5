var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var port = process.env.PORT || 6080;
// app.set('port', (process.env.PORT || 6080));

var connect = mongoose.connect('mongodb://localhost:27017/petDb');

//middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//spin up server
app.listen(port, function(req, res){
  console.log('Listening on port', port);
});
// app.listen(app.get('port'), function() {
//     console.log('Listening on port', app.get('port'));
// });

//base url
  app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname, '../public/views/index.html'));
});
// app.get('/', function(req, res) {
//     res.sendFile(path.resolve('../public/views/index.html'));
// });

//schema
var petSchema = mongoose.Schema ({
  name: String,
  species:String,
  age: Number,
  imageUrl: String
});

//model
var pet = mongoose.model( 'pet', petSchema );

app.post('/addPet', function(req, res){
  console.log('in addPet:', req.body);
  var newPet = pet(req.body);
  // newPet.imageUrl = req.body.imageUrl;
  console.log(newPet);
  newPet.save();
  res.send('post sent', 200);
}); //end addPet

app.get('/getPet', function(req,res){
  console.log('getPet hit');
  pet.find().then(function(data){
    console.log("data:", data);
    res.send(data);
  });
});
