app=require("express");
const {db}=require("./conn.js")
require("ejs");
server=app();
//Set View Engine To EJS
server.set("view engine", "ejs");
//Set Static Directory
server.use(app.static(__dirname));
const mongoose = require("mongoose")

ipofuser =require('./db')


mongoose.connect("mongodb://localhost/ipofuser",{ useUnifiedTopology: true } )
dbcon =mongoose.connection
dbcon.on("error",(err)=>{console.log("could not connect to db")})
dbcon.once("open",()=>{console.log("connected to  db")})

server.get("/",async(req,res)=>{
    console.log(req.ip)
    console.log(ipofuser)
  
    newip=new ipofuser({
        ip:req.ip
    })
    try{    
    a =  await newip.save()
    }
    catch(e){console.log(e)}
   res.send('file not found')
});




server.listen(
    3000,(err,res)=>{
        if(err){
            console.log("some thing went wrong");
        }
        else{
            console.log("started")
        }

    }
);