const express=require('express');
const router=express.Router();
var User=require('../model/User');

router.get("/",function(req,res){
	User.find({}).exec(function (err, result) {
            if(err){
                return res.send({message:"error",description:err})
            }
            res.send(result);
        })
	
	

})
router.post("/login",function(req,res){
	console.log(req.body)
	console.log(req.body.userName)
	console.log(req.body.pwd)
	
	User.findOne({ "username":req.body.userName,
				"pwd":req.body.pwd}).exec(function (err, result) {
            if(err){
                return res.send({message:"error",description:err})
            }
			
            res.send(result);
        })
	
	

})
router.post("/",function(req,res){
	
		console.log("users post")

        var user = new User(req.body);

        user.save(function(err){
			if(err){
				res.send({
					status:"faild",
					message:err.message
				})
			}
		});

        res.status(200);
})


module.exports=router