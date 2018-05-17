const express=require('express');
const router=express.Router();
var fs = require('fs');
var pdf = require('html-pdf');
var ejs = require('ejs');
var Customer=require('../model/Customer');

router.get("/",function(req,res){
	Customer.find({}).exec(function (err, result) {
            if(err){
                return res.send({message:"error",description:err})
            }
            res.send(result);
        })
	
	

})
router.get("/temp",function(req,res){
	Customer.find({}).exec(function (err, result) {
            if(err){
                return res.send({message:"error",description:err})
            }
			var data={
		name:"govind",
		customers:result
	}
	res.render('customer',data)
	
	});

})
router.get("/pdf",function(req,res){
	
	var html = fs.readFileSync('./views/customer.ejs', 'utf8');
	var options = { format: 'Letter' };
	
	
	Customer.find({}).exec(function (err, result) {
            if(err){
                return res.send({message:"error",description:err})
            }
			var data={
		name:"govind",
		customers:result
	}
            let renderedHTML = ejs.render(html,data);
            pdf.create(renderedHTML, options).toBuffer(function (err, buffer) {
               console.log('This is a buffer:', Buffer.isBuffer(buffer));
				res.attachment("test.pdf");
				res.setHeader('content-type', 'application/pdf');
                res.status(200).send(buffer)
                
            });
        })
 
//pdf.create(renderedHTML, options).toFile('./businesscard.pdf', function(err, result) {
  //if (err) return console.log(err);
  //console.log(result); // { filename: '/app/businesscard.pdf' }
  //res.status(200).send(result)
//});
	
	

})


router.post("/",function(req,res){
	
	    var user = new Customer(req.body);

       
       user.save().then(data=>{
		   console.log(data)
		   res.send(data)
	   })

        
        
})
router.delete("/:id",function(req,res){
	
		console.log(req.params.id)
		
		Customer.deleteOne({"_id":req.params.id}).exec(function (err, result){
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