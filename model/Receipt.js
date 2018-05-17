var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var reciptSchema = new Schema({
	name:{type: String},
	grandTotal:{type: String},
    vat6per : String,
	gst18per:String,
	subTotal:String,
	rupees:String,
	products:[{
			description:String,
			gst:String,
			quantity:String,
			rate:String,
			discount:String,
			amount:String
	}],
	customerId: {type: mongoose.Schema.ObjectId, ref: 'Customer'},
	createdDate: { type: Date, default: Date.now }, 
    updatedDate: { type: Date }
   },{timestamps:true})
module.exports = mongoose.model('Recipt',reciptSchema);