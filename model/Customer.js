var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var custSchema = new Schema({
	firstName:{type: String},
	lastName:{type: String},
    email: String,
	mobile : String,
	address:String,
	createdDate: { type: Date, default: Date.now }, 
    updatedDate: { type: Date }
   },{timestamps:true})
module.exports = mongoose.model('Customer',custSchema);