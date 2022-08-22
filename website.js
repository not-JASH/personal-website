const express = require("express");
const path = require("path");
//const a = require('./assets/js/Controllers');



const app = express();
const HTTP_PORT = process.env.PORT || 8080
app.use(express.static(__dirname+'/assets'));
app.set("views",path.join(__dirname,"views"));
app.engine('html',require('ejs').renderFile);
app.set("view engine","ejs");





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

app.get("/Education", function(req,res) {
    res.render("Education.html");
})

// Portfolio Pages

//misc sketches
app.get("/Misc-Sketches", function(req,res){
    res.render("MiscSketches.html");
})

// tdsb arch
app.get("/TDSB-Architecture", function(req,res){
    res.render("TDSB-Architecture.html");
})

// chars feasibility
app.get("/CHARS-Feasibility", function(req,res){
    res.render("CHARS-Feasibility.html");
})

// 231 cobourg foundation
app.get("/Shallow-Foundation-231-Cobourg", function(req,res){
    res.render("231Cobourg.html");
})

// chars design report
app.get("/CHARS-Design-Report", function(req,res){
    res.render("CHARS-Design.html");
})

// foundation for tenth line
app.get("/Foundation-for-Tenth-Line", function(req,res){
    res.render("TenthLine.html");
})

// computer generated training data
app.get("/Computer-Generated-Training-Data", function(req,res){
    res.render("CGTD.html");
})

// notes on wavelets and fourier transform
app.get("/Wavelets-and-Extended-Fourier", function(req,res){
    res.render("Wavelets-and-Fourier.html");
})

// parametric space
app.get("/Parametric-Space", function(req,res){
    res.render("ParametricSpace.html");
})

// wave gan
app.get("/WaveGAN", function(req,res){
    res.render("WaveGAN.html");
})

// cryptocurrency ai 
app.get("/Cryptocurrency-AI", function(req,res){
    res.render("CryptoAI.html");
})

// skyrim true nord 
app.get("/Skyrim-TNE", function(req,res){
    res.render("SkyrimTNE.html");
})

// ai art
app.get("/AI-Art", function(req,res){
    res.render("AIArt.html");
})





















app.listen(HTTP_PORT,onHttpStart);