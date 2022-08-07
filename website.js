const express = require("express");

const path = require("path");


const app = express();
const HTTP_PORT = process.env.PORT || 8080
app.use(express.static(__dirname+'/assets'));
app.set("views",path.join(__dirname,"views"));
app.engine('html',require('ejs').renderFile);
app.set("view engine","ejs");

// const controllers = require('./assets/js/controllers');

function onHttpStart(){
    console.log("Server started, listening on " + HTTP_PORT); 
}


app.get("/",function(req,res) {
    res.render("Home.html");
})

app.get("/Portfolio", function(req,res){
    res.render("Portfolio.html");
})

app.get("/Work-Experience", function(req,res){
    res.render("WorkExperience.html");
})

app.get("/WaveGAN", function(req,res){
    res.render("WaveGAN.html");
})

app.listen(HTTP_PORT,onHttpStart);