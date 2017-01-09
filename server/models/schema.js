var mongoose= require('mongoose');
var schema = mongoose.Schema;
var pet= mongoose.model('pet', petSchema);

var petSchema = mongoose.Schema ({
  name: String,
  species:String,
  age: Number,
  ImageUrl: String
});

module.exports= pet;
