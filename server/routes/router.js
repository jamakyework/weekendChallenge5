var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var petdb = require('./models/schema.js');


router.post ('/', function (req, res){
  var petObj= new Pet ({
    Name: req.body.pet,
    Species: req.body.species,
    Age: req.body.age,
    ImageUrl: req.body.imageUrl
  }); //end addPet obj
});//end post
module.exports= router;
