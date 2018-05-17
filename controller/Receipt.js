const express=require('express');
const router=express.Router();
var Receipt=require('../model/Receipt');

router.get("/",function(req,res){
	Product.find({}).exec(function (err, result) {
            if(err){
                return res.send({message:"error",description:err})
            }
            res.send(result);
        })
	
	

})

router.post("/",function(req,res){
	
	    var receipt = new Receipt(req.body);

       console.log(receipt)
       receipt.save().then(data=>{
		   console.log(data)
		   res.send(data)
	   })

        
        
})
router.delete("/:id",function(req,res){
	
		console.log(req.params.id)
		
		Product.deleteOne({"_id":req.params.id}).exec(function (err, result){
			console.log(err)
			console.log(result.n)
			if(!result.n){
				return res.send({
					"status":"Faild",
					"message":"Faild"
				})
			}
			 res.send({
			message:"records delete successfully"
		})
			
		})
		
	   

        
        
})


module.exports=router