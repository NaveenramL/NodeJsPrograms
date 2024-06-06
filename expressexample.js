const express = require("express");

const app = express();

app.listen(9000,function(err,res){
    console.log("Express running.....")
});

app.get("/",function(req,res){
    console.log("Using GET method.....");
    res.send("Hello World From Express JS......")
});

app.get("/greetUser",function(req,res){
    console.log("Using GET method for greet User.....");
    res.send("Hello Naveenram....")
});

app.get("/user/:id",function(req,res){
    // console.log("Using GET method.....");
    const id = req.params.id;
    res.send("Hello User : "+id);
});

app.get("/user",function(req,res){
    // console.log("Using GET method.....");
    const id = req.query.id;
    res.send("Hello User : "+id);
});