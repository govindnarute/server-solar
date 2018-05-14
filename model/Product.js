var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var productSchema = new Schema({
	name:{type: String},
	description:{type: String},
    rate : String,
	discount:String,
	gst:String,
	createdDate: { type: Date, default: Date.now }, 
    updatedDate: { type: Date }
   },{timestamps:true})
module.exports = mongoose.model('Product',productSchema);