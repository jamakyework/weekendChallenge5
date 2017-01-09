var mongoose= require('mongoose');
var schema = mongoose.schema;
var pets= mongoose.model('pet', petSchema);

var petSchema = new Schema ({
  name: String,
  species:String,
  age: Number,
  ImageUrl: String
});

module.exports= pets;
