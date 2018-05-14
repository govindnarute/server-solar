var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
	username:{type: String, unique: true },
    email: String,
    pwd: { type: String, select: false },
    firstName: String,
	lastName: String,
	createdDate: { type: Date, default: Date.now }, 
    updatedDate: { type: Date }
   

},{timestamps:true})
module.exports = mongoose.model('User',userSchema);