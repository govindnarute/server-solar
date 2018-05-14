const express=require('express');
const bodyParser=require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const user=require('./controller/Users');
const customer=require('./controller/Customer');
const product=require('./controller/Product');














const myApp=express();
myApp.use(bodyParser.json());
myApp.use(bodyParser.text({ type: 'text/html' }));
myApp.use(express.static(path.join(__dirname, 'public')));

myApp.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


myApp.get('/test',function(req,res){
    res.send("working........");
})

var mongodbURL="mongodb://localhost:27017/solarsystem";

mongoose.connect(mongodbURL, function (err, db) {
    if (!err) {
 
        console.log("we are connected to mongo");
      
        
    }else{
		console.log(err)
	}
})
 
myApp.use("/api/users",user)
myApp.use("/api/customers",customer)
myApp.use("/api/products",product)

myApp.all('*', (req, res) => {
        //console.log(`[TRACE] Server 404 request: ${req.originalUrl}`);
        console.log(req.originalUrl)
        res.sendFile(__dirname + '/public/index.html');
    });
myApp.listen(3000,function(){
	console.log("Server started")

});

